import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import NavBar from '../nav_bar/nav_bar';
import SplashAbout from '../splash_about/splash_about';
import ReviewIndexContainer from '../review/review_index_container';
import BusinessMap from '../business_map/business_map';
import BusinessHourContainer from '../business_hour/business_hour_container';

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.avgStar = '';
        this.oneStar = (<div >
                        <i id="inv-star"className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        </div>);
        this.oneHalfStar = (<div >
                        <i id="inv-star"className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star-half-alt str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        </div>);
        this.twoStar = (<div>
                        <i id="inv-star" className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs" ></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                    </div>);
        this.twoHalfStar = (<div>
                        <i id="inv-star" className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star-half-alt str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                    </div>);
        this.threeStar = (<div>
                        <i id="inv-star"className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                    </div>);
        this.threeHalfStar = (<div>
                        <i id="inv-star"className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star-half-alt str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                    </div>);        
        this.fourStar = (<div>
                        <i id="inv-star" className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="far fa-star str-g fa-xs"></i>
                    </div>);
        this.fourHalfStar = (<div>
                        <i id="inv-star" className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i id="half-star"className="fas fa-star-half-alt str fa-xs"></i>
                    </div>);
        this.fiveStar = (<div>
                        <i id="inv-star"className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                        <i className="fas fa-star str fa-xs"></i>
                    </div>);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render(){
        if(this.props.business === undefined){
            return <p>waiting for loading</p>;
        }
        let rating = 0;
        if(this.props.business.reviews === undefined || this.props.business.reviews.length === 0) {
            rating = 5.00.toFixed(1);
        }else {
            this.props.business.reviews.forEach(review => rating += review.stars);

            rating /= this.props.business.reviews.length;
            rating = rating.toFixed(1);  
        }
        if(rating > 4.9){
            this.avgStar = this.fiveStar;    
        }else if(rating > 4.4){
            this.avgStar = this.fourHalfStar;
        }else if(rating > 3.9){
            this.avgStar = this.fourStar;
        }else if(rating > 3.4){
            this.avgStar = this.threeHalfStar;
        }else if(rating > 2.9){
            this.avgStar = this.threeStar;
        }else if(rating > 2.4){
            this.avgStar = this.twoHalfStar;
        }else if(rating > 1.9){
            this.avgStar = this.twoStar;
        }else if(rating > 1.4){
            this.avgStar = this.oneHalfStar;
        }else{
            this.avgStar = this.oneStar;
        }
        let price = "$";
        if(this.props.business.price === 2){
            price = "$$";
        }else if(this.props.business.price === 3){
            price ="$$$";
        }
        let categoriesArr = this.props.business.categories.split(" ");
        return (
            <div>
                <div className="business-top">
                {/* <div className="business-page-top-container"> */}
                    <div className="index-logo-container">
                        <Link to="/"><img className="top-logo-sign" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png" /></Link>
                        <SearchBar formType={this.props.formType} searchBusinesses={this.props.searchBusinesses}/>
                    </div>  
                    <div className="top-header-container">
                        <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout}/>
                    </div> 
                </div>

                <div className="business-abstract-container">

                    <div className="business-pic-container">
                        {this.props.business.photoUrls.map((photoUrl, idx) => (
                            <img className="business-pic" key={idx} src={ photoUrl } alt="business-picture"/>
                        ))}
                    </div>
                            
                    <div className="business-abstract">
                        <div className="business-abstract-text">
                            <p class="review-form-business-name">{this.props.business.name}</p>
                            <div className="rating-star-box">
                                <p>{this.avgStar}</p>
                                <p><span id="num-reviews">{this.props.business.reviews.length} reviews</span></p>
                            </div>
                            
                        </div>
                        <p className="today-hours">
                            {this.props.business.claimed? <span className="claimed-business"><i class="fas fa-check-circle claimed-business-icon"></i> Claimed</span> : <span className="unclaimed-business"><i class="fas fa-times-circle claimed-business-icon"></i> Unclaimed</span>}
                            <span className="result-bullet">&#8226;</span>
                            <span>{price}</span>
                                                    
                            {categoriesArr.map((c, idx) => (
                                <span className="result-bullet" key={idx}>&#8226; {c}</span>
                            ))}
                        </p>
                    </div>

                </div>

                <div className="business-review-link">
                    <button className="business-review-button" onClick={() => this.props.history.push(`/businesses/${this.props.business.id}/reviews/create`)}>Write a Review</button>
                </div>

                <div className="business-info-container">

                    <div className="business-container-left">
                        <div className="business-location-hour-container">
                            <div>
                                <p className="location-hours-text">Location and Hours</p>
                                <div className="business-location-hour-box">
                                    <div className="business-location">
                                        <div className="map-box">
                                            <BusinessMap businesses={this.props.business}/>
                                        </div>

                                        <p className="business-street">{this.props.business.address}</p>
                                    </div>
                                    <BusinessHourContainer business={this.props.business}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="review-index-container">
                            <h4 className="reviews-tag">Reviews</h4>
                            <ReviewIndexContainer business={this.props.business}/>
                        </div>
                    </div>

                    <div className="business-container-right">
                        <ul>
                            <li class="business-container-right-list">
                                <a className="business-website-url" href={`${this.props.business.website}`}>{`${this.props.business.name}.com`}</a>
                                <img className="business-website-tag" src="https://i.ibb.co/tXSmdsh/website-icon.png" alt="website-icon" />
                            </li>
                            <li class="business-container-right-list">
                                <p className="business-phone">{this.props.business.phone}</p>
                                <img src="https://i.ibb.co/b1s5S9C/phone-icon.png" alt="website-icon" />
                            </li>
                            <li class="business-container-right-list">
                                <div className="side-info-dir">
                                    <p className="business-address-tag"> Get Directions </p>
                                    <p className="business-address-words">{`${this.props.business.address}`}</p>
                                </div>
                                <img src="https://i.ibb.co/6DZ56N1/address-icon.png" alt="website-icon" />
                            </li>
                        </ul>
                    </div>

                </div>

                <footer>
                    <div className="splash-about">
                        <SplashAbout></SplashAbout>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Business;