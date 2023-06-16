# yulp

[Live Demo (Link is temporarily unavailable, I am working to resolve this. I sincerely apologize for it.)](https://yulp-lc.herokuapp.com/#/)

yulp is a full stack clone of yelp.

The functionality in this project includes user auth, visiting business pages, locations on Google Map, displaying business hours and open/closed, write, update, delete reviews for businesses, and rating for businesses.

## Technologies Used

BackEnd | Frontend
---|:--
Ruby on Rails | React
PostgreSQL | Redux
AWS S3 | JavaScript ES6
bcrypt | FontAwesome
jbuilder | Google Map API

## Features

* ### User Auth

The User authentication feature allows users to create their account and have access to the functionality such as rating or writing reviews for businesses.

##### Backend

```
  class User < ApplicationRecord
  
      validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
      validates :email, uniqueness: true
      validates :password, length: { minimum: 8 }, allow_nil: true

      has_many :reviews,
          primary_key: :id,
          foreign_key: :user_id,
          class_name: :Review,
          dependent: :destroy

      has_many :saves,
          primary_key: :id,
          foreign_key: :user_id,
          class_name: :Save,
          dependent: :destroy

      attr_reader :password 

      after_initialize :ensure_session_token 

      def self.find_by_credentials(email, password) 
          user = User.find_by(email: email)
          return user if user && user.is_password?(password)
      end

      def self.generate_session_token
          SecureRandom::urlsafe_base64(16)
      end

      def is_password?(password)
          BCrypt::Password.new(self.password_digest).is_password?(password)
      end

      def password=(password)
          @password = password 
          self.password_digest = BCrypt::Password.create(password)
      end

      def reset_session_token!
          self.session_token = self.class.generate_session_token
          self.save!
          self.session_token
      end

      private 

      def ensure_session_token 
          self.session_token ||= self.class.generate_session_token
      end

  end
```


##### Frontend

![auth](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-sign-up.PNG)



* ### Business Index and Show Pages

The Business index pages list all businesses/searched businesses with their overall rating, price, categories, and one of its reviews
has set of photos of that is being hosted on AWS S3. The Google Maps API pinpoints exactly where the restaurant is located based on latitude and longitude coordinates.

![business index](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-business-index.PNG)

A Business Show page contains its photos that are hosted on AWS S3, business hours, write a review button for logged in users, and review index page.

![business show](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-business-show.PNG)

The Google Map API pinpoints exactly where the businesses locations in both index and show pages. 
The number in the marker agree with the number of the businesses in the index page. A small window with the business name will pop up once users put cursor on the marker.

##### Backend

```
  let mapOptions;
  if (Array.isArray(this.props.businesses)) {
      mapOptions = {
          center: { lat: this.props.businesses[0].latitude, lng: this.props.businesses[0].longitude},
          zoom: 11
      };
  }else{
      mapOptions = {
          center: { lat: this.props.businesses.latitude, lng: this.props.businesses.longitude},
          zoom: 11
      };
  }
  this.map = new google.maps.Map(this.mapNode, mapOptions);
  this.MarkerManager = new MarkerManager(this.map);
  this.MarkerManager.updateMarkers(this.props.businesses);
```

##### Fontend

![map](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-google-map.PNG)



* ### Business Hours

The business hours are below the write review button. It shows 7-day business hours and whether it's open or closed based on day and time.

In order to implement the open/closed functionality, I created a function called openState. It accepts a timeRange string as a parameter, like "311:30 AM - 9:30 PM".
The first number indicates the day. Here the "3" means Wednesday. From the timeRange the information of day, startHour, startMin, endHour and endMin can be obtained.
By comparing them with today's day and current time, the openState function will return "Open Now" or "Closed Now" if day matches, or an empty string if the day doesn't match.

##### Backend
```
    openState(timeRange){
        let firstColon = timeRange.indexOf(":");
        let startHour = parseInt(timeRange.slice(1, firstColon));
        let startMin = parseInt(timeRange.slice(firstColon + 1, firstColon + 3));
        if(startHour != 12 && timeRange.charAt(firstColon + 4) === "P"){
            startHour += 12;
        }
        let dash = timeRange.indexOf("-");
        let lastColon = timeRange.lastIndexOf(":");
        let endHour = parseInt(timeRange.slice(dash + 2, lastColon));
        let endMin = parseInt(timeRange.slice(lastColon + 1, lastColon + 3));
        if(endHour != 12 && timeRange.charAt(lastColon + 4) === "P"){
            endHour += 12;
        }
        
        let date = new Date();
        let day = date.getDay();
        let curHour = date.getHours();
        let curMin = date.getMinutes();

        if(day != parseInt(timeRange.charAt(0))){
            return "";
        }
        if(curHour < startHour || curHour === startHour && curMin < startMin){
            return <span className="closed-tag">Closed Now</span>;
        }
        if(curHour > endHour || curHour === endHour && curMin > endMin){
            return <span className="closed-tag">Closed Now</span>;
        }
        return <span className="open-tag">Open Now</span>;
    }
```

##### Fontend

![hour](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-business-hour.PNG)



* ## Reviews

All the reviews under a business can be views by anyone.

##### Fontend

![review index](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-review-index.PNG)

If users want to click the red button to write a review for the business, they should sign up and log in first.

The review form is shown as a block. The logged in users need to rate and write some contents inside it.

In order to realize the rating functionality, I imported react rating component with symbol in Awesome Font to let users decide how many "stars" they want to give.
Each rating also has a tag, from "Not Good" to "Great".


##### Backend
```
  handleRatingChange(n){
      this.setState({stars: n});
      const ratingText = document.getElementById("rating-text");
      if (n === 1) {
          ratingText.innerText = "Not good";
      } else if (n === 2) {
          ratingText.innerText = "Could've been better";
      } else if (n === 3) {
          ratingText.innerText = "OK";
      } else if (n === 4) {
          ratingText.innerText = "Good";
      } else if (n === 5) {
          ratingText.innerText = "Great";
      } else {
          ratingText.innerText = "Select your rating";
      }
  }
  
  <form onSubmit={this.handleSubmit}>
    <div className="review-form-box">
        <div className="review-form-texts">
            <span className="review-form-business-name">{this.props.business.name}</span>
            <span className="review-form-guide" onClick={() => this.reviewModal()}>Read our guideline</span>
            /* regulation page */
        </div>
        <div className="review-content-box">
            <p id="rating-text"className="select-rating-text">Select your rating</p>
            <Rating
                emptySymbol="fa fa-star fa-2x un-filled"
                initialRating={this.state.stars}
                fullSymbol="fa fa-star fa-2x filled"
                onChange={this.handleRatingChange}
                className="rating"
                onHover={this.handleHover}
            />
            <textarea className="text-area-text"value={this.state.body} onChange={this.update("body")} 
            placeholder="placeholder content"></textarea>
            <div className={classNameErrors}>
                {this.renderErrors()}
            </div>
        </div>
    </div>
    <button className="review-post-button">Post Review</button>
  </form>
```

##### Fontend

![review form](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-review-form.PNG)


Users can also update or delete their own reviews. Just log in, find the review and click the top right icon.

##### Backend
```
  editandDelete(){
      if (this.props.user !== null && this.props.user !== undefined) {
          if (this.props.review.user_id === this.props.user.id) {
              return (
                  <div className="edit-delete-btn">
                       <div className={`dropdown-review`}>
                          <div className="reviewDrpbtwn">
                              <button onClick={() => this.handleClick(this.props.review.id)}className="review-options">
                                  <i className="fa fa-list"></i>
                              </button>
                          </div>
                          <div id={`myReviewDropdown${this.props.review.id}`} className='review-dropdown-content'>
                              <p className="edit-review" onClick={this.handleUpdate}><Link className="edit-review-text" to=
                              {`/businesses/${this.props.business.id}/reviews/${this.props.review.id}/update`}>Edit review</Link></p>
                              <p className="delete-review"onClick={() => this.deleteModal(this.props.review.id)}>Remove review</p>
                          </div>
                      </div>
                      <div id={`delete${this.props.review.id}`} className="delete-background" onClick={this.removeModal}>
                          <div className="delete-container-top"onClick={e => e.stopPropagation()} >
                              <div className="delete-text">
                                  <div className="delete-options">
                                      <p>Are you sure you want to remove your review?</p>
                                      <br/>
                                      <div className="buttons-box">
                                          <button className="del-no"onClick={() => window.location.reload()}>Keep Review</button>
                                          <button className="del-yes"onClick={this.handleDelete}>Remove Review</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              )
          } else {
              return (
                  <div className="invisible">
                      ...
                  </div>
              )
          }
      }
  }
```

##### Fontend

![review edit](https://github.com/rinayumiho/yulp/blob/main/app/assets/images/yulp-update-delete.PNG)



## Future Work

- [x] Add Review count in both business index and show page
- [x] Add term of service, privacy policy pages in session form. Add regulation page in review form

## References

* Google Maps API
* Scroll Restoration
* Font Awesome with React
