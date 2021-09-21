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

    // componentDidUpdate(prevProps){
    //     if(!this.hasSearchContent) this.hasSearchContent = true;
    //     let prevSearch = prevProps.location.search.split("=")[1];
    //     let curSearch = this.props.location.search.split("=")[1];
    //     if(prevSearch !== curSearch){
    //         this.setState({ search: curSearch });
    //     }
    //     window.scrollTo(0, 0)
    // }

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
                        <p className="best-in">Best {this.state.search} in Philadelphia, PA.</p>
                        <p className="all-results">All Results</p>
                        <div className="results">
                            {this.props.businesses.map((business, idx) => (
                                <div className="each-result-container" key={ idx }>
                                    <Link className="result-link" to={`/businesses/${ business.id }`}>
                                        <div className="each-result">
                                            <img className="rep_pic" src={ business.photoUrls[0] } alt=""/>
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
                                                    <p>Rating (Currently Unavailable)</p>
                                                </div>
                                                <div className="result-review">
                                                    <p>Reviews (Currently Unavailable)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="index-map-box">
                        <BusinessMap businesses={ this.props.businesses }/>
                    </div>
                </div>
                <div className="splash-about">
                    <SplashAbout></SplashAbout>
                </div>
            </div>
        );
    }
}

export default BusinessIndex;