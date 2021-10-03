import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import NavBar from '../nav_bar/nav_bar';
import SplashAbout from '../splash_about/splash_about';
import BusinessMap from '../business_map/business_map';

class BusinessIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: this.props.location.search.split("=")[1]
        }
        this.hasSearchContent = false;
    }

    componentDidMount(){
        this.hasSearchContent = true;
        if(Object.keys(this.props.businesses).length === 0 || !Array.isArray(this.props.businesses)) {
            this.props.searchBusinesses(this.state.search);
        }
    }

    componentDidUpdate(prevProps){
        if(!this.hasSearchContent) this.hasSearchContent = true;
        let prevSearch = prevProps.location.search.split("=")[1];
        let curSearch = this.props.location.search.split("=")[1];
        if(prevSearch !== curSearch){
            this.setState({ search: curSearch });
        }
        window.scrollTo(0, 0)
    }

    render(){
        if (this.hasSearchContent === true && (Object.keys(this.props.businesses).length === 0 || !Array.isArray(this.props.businesses))) {
            this.hasSearchContent = false;
            return (
                <div>
                    <div className="business-page-top-index">
                        
                        <div className="index-logo-container">
                            <Link to="/"><img className="top-logo-sign" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png" /></Link>
                            <SearchBar formType={this.props.formType} searchBusinesses={this.props.searchBusinesses}/>
                        </div>  
                        <div className="top-header-container">
                            <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout}/>
                        </div>  
                    </div>
                    <div className="business-index-main">
                        <p className="best-in">Sorry, no results for your search!</p>
                    </div>
                    <div className="splash-about">
                        <SplashAbout></SplashAbout>
                    </div>
                </div>
            );
        }
        
        if ( this.hasSearchContent === false && (Object.keys(this.props.businesses).length === 0 || !Array.isArray(this.props.businesses))) {
            return (
                <div>Currently Unavailable</div>
            );
        }

        return(
            <div>
                <div className="business-page-top-index">
                    <div className="index-logo-container">
                        <Link to="/"><img className="top-logo-sign" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png" /></Link>
                        <SearchBar formType={this.props.formType} searchBusinesses={this.props.searchBusinesses}/>
                    </div>  
                    <div className="top-header-container">
                        <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout}/>
                    </div>  
                </div>
                <div className="business-index-main">
                    <div>
                        <p className="best-in">Best {this.state.search} near Philadelphia, PA.</p>
                        <p className="all-results">All Results</p>
                        <div className="results">
                            {this.props.businesses.map((business, idx) => {
                                let avgStar = '';
                                let oneStar = (<div >
                                                <i id="inv-star"className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);
                                let oneHalfStar = (<div >
                                                <i id="inv-star"className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star-half-alt str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);
                                let twoStar = (<div>
                                                <i id="inv-star" className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs" ></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);
                                let twoHalfStar = (<div>
                                                <i id="inv-star" className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star-half-alt str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);
                                let threeStar = (<div>
                                                <i id="inv-star"className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);
                                let threeHalfStar = (<div>
                                                <i id="inv-star"className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star-half-alt str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);        
                                let fourStar = (<div>
                                                <i id="inv-star" className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="far fa-star str-g fa-xs"></i>
                                                </div>);
                                let fourHalfStar = (<div>
                                                <i id="inv-star" className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i id="half-star"className="fas fa-star-half-alt str fa-xs"></i>
                                                </div>);
                                let fiveStar = (<div>
                                                <i id="inv-star"className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                <i className="fas fa-star str fa-xs"></i>
                                                </div>);
                                let rating = 0;
                                if(business.reviews === undefined || business.reviews.length === 0) {
                                    rating = 5.00.toFixed(1);
                                }else {
                                    business.reviews.forEach(review => rating += review.stars);

                                    rating /= business.reviews.length;
                                    rating = rating.toFixed(1);  
                                }
                                if(rating > 4.9){
                                    avgStar = fiveStar;    
                                }else if(rating > 4.4){
                                    avgStar = fourHalfStar;
                                }else if(rating > 3.9){
                                    avgStar = fourStar;
                                }else if(rating > 3.4){
                                    avgStar = threeHalfStar;
                                }else if(rating > 2.9){
                                    avgStar = threeStar;
                                }else if(rating > 2.4){
                                    avgStar = twoHalfStar;
                                }else if(rating > 1.9){
                                    avgStar = twoStar;
                                }else if(rating > 1.4){
                                    avgStar = oneHalfStar;
                                }else{
                                    avgStar = oneStar;
                                }

                                let price = "$";
                                if(business.price === 2){
                                    price = "$$";
                                }else if(business.price === 3){
                                    price ="$$$";
                                }
                                let categoriesArr = business.categories.split(" ");
                                return (
                                    <div className="each-result-container" key={ idx }>
                                        <Link className="result-link" to={`/businesses/${ business.id }`}>
                                            <div className="each-result">
                                                <div className="rep-pic-container">
                                                    <img className="rep-pic" src={ business.photoUrls[0] } alt=""/>
                                                </div>
                                                
                                                <div className="result-info">
                                                    <div className="result-name">
                                                        <p>{idx + 1}. </p>
                                                        <p className="result-name-word">{ business.name }</p>
                                                    </div>
                                                    <div className="result-location">
                                                        <p className="result-phone">{ business.phone }</p>
                                                        <p>{ business.address }</p>
                                                    </div>
                                                    <div className="result-rating">
                                                        <p>{avgStar}</p>
                                                        <p className="result-num-reviews">{business.reviews.length === 0 ? "" : `${business.reviews.length} review(s)`}</p>
                                                    </div>
                                                    <div className="result-details">
                                                        <span>{price}</span>
                                                        
                                                        {categoriesArr.map((c, idx) => (
                                                            <span className="result-bullet" key={idx}>&#8226; {c}</span>
                                                        ))}
                                                    </div>
                                                    <div className="result-review">
                                                        <p className="result-review-text">"{business.reviews.length != 0 ? `${business.reviews[0].body.split(" ").filter((w, i) => i < 30).join(" ")}...` : "Write the first review!"}"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                                
                            })}
                        </div>
                    </div>
                    <div className="index-map-box">
                        <BusinessMap businesses={ this.props.businesses }/>
                    </div>
                </div>
                <br />
                <footer>
                    <div className="splash-about">
                        <SplashAbout></SplashAbout>
                    </div>
                </footer>
            </div>
        );
    }
}

export default BusinessIndex;