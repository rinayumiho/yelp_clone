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
        if(this.props.business === undefined){
            return <p>waiting for loading</p>;
        }
        return (
            <div>
                <div className="business-top">
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
                            <p>{this.props.business.name}</p>
                            <div className="rating-star-box">
                                <p>(Rating)</p>
                                <p><span id="num-reviews">{this.props.business.reviews.length} reviews</span></p>
                            </div>
                            <p className="today-hours">Mon: 11:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                </div>

                <div className="business-review-link">
                    <button className="business-review-button" onClick={() => this.props.history.push(`/businesses/${this.props.business.id}/reviews/create`)}>Write a Review</button>
                </div>

                <div className="business-info-container">

                    <div className="business-container-left">
                        <div className="business-reviews-container">
                            <div>
                                <h4 className="business-hour-text">Hours</h4>
                                <p>Businesss Hours (Currently Unavailable)</p>
                            </div>
                        </div>
                        <div className="business-reviews-container">
                            <div>
                                <h4 className="reviews-text">Reviews</h4>
                                <p>Reviews (Currently Unavailable)</p>
                            </div>
                        </div>
                    </div>

                    <div className="business-container-right">
                        <ul>
                            <li>
                                <a className="business-website-url" href={`${this.props.business.website}`}>{`${this.props.business.name}.com`}</a>
                                <img className="business-website-tag" src="https://i.ibb.co/tXSmdsh/website-icon.png" alt="website-icon" />
                                
                                {/* <img className="business-website-tag" src="https://i.ibb.co/3YRVVmd/website-icon.png" alt="website-icon" /> */}
                            </li>
                            <li>
                                <p className="business-phone">{this.props.business.phone}</p>
                                <img src="https://i.ibb.co/b1s5S9C/phone-icon.png" alt="website-icon" />
                            </li>
                            <li>
                                <div className="side-info-dir">
                                    <p className="business-address-tag"> Get Directions </p>
                                    <p className="business-address-words">{`${this.props.business.address}`}</p>
                                </div>
                                <img src="https://i.ibb.co/6DZ56N1/address-icon.png" alt="website-icon" />
                            </li>
                        </ul>
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