import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../nav_bar/nav_bar'
import Rating from 'react-rating';

class ReviewUpdate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: this.props.review,
            stars: this.props.review,
            user_id: this.props.user_id,
            business_id: this.props.match.params.businessId,
            id: this.props.match.params.reviewId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(n){
        if (this.state.stars === '') {
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
        } else {
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
                if (this.state.stars === 1) {
                    ratingText.innerText = "Not good";
                } else if (this.state.stars === 2) {
                    ratingText.innerText = "Could've been better";
                } else if (this.state.stars === 3) {
                    ratingText.innerText = "OK";
                } else if (this.state.stars === 4) {
                    ratingText.innerText = "Good";
                } else if (this.state.stars === 5) {
                    ratingText.innerText = "Great";
                }
            }
        }
    }

    handleRatingChange(n){
        this.setState({stars: n})
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

    update(type){
        return e => this.setState({[type]: e.currentTarget.value});
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
        this.props.fetchReviews(this.props.match.params.businessId).then(() => {
            this.setState({
                body: this.props.review ? this.props.review.body : "",
                stars: this.props.review ? this.props.review.stars : "",
                user_id: this.props.user_id ? this.props.user_id : "",
                business_id: this.props.match.params.businessId ? parseInt(this.props.match.params.businessId) : "",
                id: this.props.match.params.reviewId ? parseInt(this.props.match.params.reviewId) : ""
            })
        })
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.updateReview(this.state).then(()=> this.props.history.push(`/businesses/${this.state.business_id}`))
    }

    reviewModal(){
        const regulation = document.getElementById("regulation");
        return(
            regulation.style.display = "block"
        )
    }

    removeModal(){
        const regulation = document.getElementById("regulation");
        return(
            regulation.style.display = "none"
        )
    }

    render(){
    
        if (!this.props.business || this.state.body === "") {
            return (
                <div>Loading..</div>
            )
        }
        return(
            <div>
                <div className="review-form-navbar">
                    <Link to="/"><img className="review-logo" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png" alt=""/></Link>
                    
                    <div className="review-nav-spacefill"></div>
                    <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout}/>
                </div>
                <div className="review-form-main">
                    <form onSubmit={this.handleSubmit}>
                        <div className="review-form-box">
                            <div className="review-form-texts">
                                <span className="review-form-business-name">{this.props.business.name}</span>
                                <span className="review-form-guide" onClick={() => this.reviewModal()}>Read our review guidelines</span>
                                <div id="regulation"className="regulation-background" onClick={this.removeModal}>
                                    <div className="regulation-container-top" onClick={e => e.stopPropagation()}>
                                        <div className="regulation-text">
                                            <div className="content-guidelines">
                                                <p>Content Guidelines</p>
                                                <p className="x" onClick={this.removeModal}>
                                                    <i className="fas fa-times"></i>
                                                </p>
                                            </div>
                                            <div className="regulation-scrollable">
                                                <p className="gen-guide">General Guidelines</p>
                                                <br/>
                                                <p>
                                                    People come to Yelp to connect with great local businesses. We know that people won’t always agree, but we expect everyone on the site to treat one another and the platform with honesty and respect. We’ve put together these general guidelines to help set the tone for discourse on the site—just in case. Please also read the additional guidelines below for specific types of content that you might contribute to the site.
                                                </p>
                                                <br/>
                                                <div class="regulation-container-subs">
                                                    <p>
                                                        <span class="regulation-content">Relevance:</span> Please make sure your contributions are appropriate to the forum. For example, reviews aren’t the place for rants about political ideologies, a business’s employment practices, extraordinary circumstances, or other matters that don’t address the core of the consumer experience.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        <span class="regulation-content">Inappropriate content:</span> Colorful language and imagery are fine, but there’s no place for threats, harassment, lewdness, hate speech, or other displays of bigotry. 
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        <span class="regulation-content">Conflicts of interest:</span> Your contributions to Yelp should be unbiased and objective. For example, you shouldn’t write reviews of your own business or employer, your friends’ or relatives’ business, your peers or competitors in your industry, or businesses in your networking group. Businesses should never ask customers to write reviews.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        <span class="regulation-content">Privacy:</span> Don’t publicize people’s private information. For instance, please don’t post close-up photos or videos of other patrons without their permission, and don’t post other people’s full names unless you’re referring to someone who is commonly referred to by their full name.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        <span class="regulation-content">Promotional content:</span> Don’t post promotional material unless it’s in connection with a Yelp advertising product and through a Business Account. Let’s keep the site useful for consumers and not overrun with commercial noise from every user.
                                                    </p>
                                                    <br/>
                                                    <p>
                                                        <span class="regulation-content">Intellectual property:</span> Don’t swipe content from other sites, users, or businesses. You’re a smart cookie, so write your own copy and share your own photos and videos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <textarea className="text-area-text" value={this.state.body} onChange={this.update("body")} ></textarea>
                            </div>
                        </div>
                        <button className="review-post-button">Post Review</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewUpdate;