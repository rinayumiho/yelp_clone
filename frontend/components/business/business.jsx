import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import NavBar from '../nav_bar/nav_bar';
import SplashAbout from '../splash_about/splash_about';

class Business extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
    }
    
    // today_business_hour(){
    //     const todayDate = new Date().toDateString().split(" ")[0];
    //     for (let i = 0; i < this.props.business.schedules.length; i++) {
    //         if (this.props.business.schedules[i].day === todayDate) {
    //             return `${this.props.business.schedules[i].day}: ${this.props.business.schedules[i].open} - ${this.props.business.schedules[i].close}`
    //         }
    //     }
    // }

    render(){
        if (!this.props.business) {
            return (
                <div>Currently Unavailable</div>
            )
        }

        return (
            <div>

                <div className="business-page-top">
                    <div className="top-header-container">
                        <Link to="/"><img className="top-logo-sign" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png" /></Link>
                        <SearchBar formType={this.props.formType} searchBusinesses={this.props.searchBusinesses}/>
                        <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout}/>
                    </div>    
                </div>

                <div className="business-intro-container">

                    <div className="business-pictures-container">
                        <p>Currently Unavailable</p>
                    </div>
                            
                    <div className="business-intro">
                        <div className="business-intro-text">
                            <p>{this.props.business.name}</p>
                            <div className="rating-star-box">
                                <p>4 stars</p>
                                <span className="num-reviews">{this.props.business.reviews.length} reviews</span>
                            </div>
                            <p className="today-hours">Mon: 11:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                </div>

                <div className="business-page-link-container">
                    <div className="business-user-upload-links">
                        <button className="business-review-button" onClick={() => this.props.history.push(`/businesses/${this.props.business.id}/reviews/create`)}>Write a Review</button>
                    </div>
                </div>

                <div className="business-container">

                    <div className="business-container-left">
                        <p className="business-hour">Hours</p>
                        <div className="business-hour-container">
                            <div>
                                <h4 className="business-hour-text">Hours</h4>
                                <p>Currently Unavailable</p>
                            </div>
                        </div>
                        <div className="business-reviews-container">
                            <div>
                                <h4 className="reviews-text">Reviews</h4>
                                <p>Currently Unavailable</p>
                            </div>
                        </div>
                    </div>

                    <div className="business-container-right">
                        <div className="right-item">
                            <a href={`${this.props.business.website}`}>{`${this.props.business.name}.com`}</a>
                            <img src="https://i.ibb.co/tXSmdsh/website-icon.png" alt="website-icon" />
                        </div>
                        <div className="right-item">
                            <p>{`${this.props.business.phone}`}</p>
                            <img src="https://i.ibb.co/b1s5S9C/phone-icon.png" alt="website-icon" />
                        </div>
                        <div className="right-item">
                            <div>
                                <p className="address-tag">Get Directions</p>
                                <p>{`${this.props.business.address}`}</p>
                            </div>
                            <img src="https://i.ibb.co/6DZ56N1/address-icon.png" alt="website-icon" />
                        </div>
                    </div>

                </div>

                <div className="splash-about">
                    <SplashAbout></SplashAbout>
                </div>
            </div>
        )
    }
}

export default Business;