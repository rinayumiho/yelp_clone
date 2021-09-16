import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import NavBar from '../nav_bar/nav_bar';
import SplashAbout from '../splash_about/splash_about';
import BusinessMap from '../business_map/business_map';
import Map from '../business_map/map';

class BusinessIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: this.props.location.search.split("=")[1]
        }
        this.mount = false;
    }

    componentDidMount(){
        this.mount = true;
        if (Object.keys(this.props.businesses).length === 0 || !Array.isArray(this.props.businesses)) {
            this.props.searchBusinesses(this.state.search);
        }
    }

    componentDidUpdate(prevProps){
        if (!this.mount) this.mount = true;
        if (prevProps.location.search.split("=")[1] !== this.props.location.search.split("=")[1]) {
            this.setState({search: this.props.location.search.split("=")[1]});
        }
        window.scrollTo(0, 0)
    }

    render(){
        if (this.mount === true && (Object.keys(this.props.businesses).length === 0 || !Array.isArray(this.props.businesses))) {
            this.mount = false;
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
                    {/* <div className="business-page-top-index">
                        <div className="top-header-container">
                            <Link to="/"><img className="top-logo-sign" src="https://i.ibb.co/G37QPsf/yelp-clone-logo-removebg-preview.png"/></Link>
                            <SearchBar formType={this.props.formType} searchBusinesses={this.props.searchBusinesses}/>
                            <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout}/>
                        </div>    
                    </div> */}
                    <div className="business-index-main">
                        <p className="best-in">Sorry, no results for your search!</p>
                        {/* <Map/> */}
                        {/* <BusinessMap businesses={this.props.businesses}/> */}
                    </div>
                    <div className="splash-about">
                        <SplashAbout></SplashAbout>
                    </div>
                </div>
            );
        } else if ( this.mount === false && (Object.keys(this.props.businesses).length === 0 || !Array.isArray(this.props.businesses))) {
            
            return (
                <div>Currently Unavailable</div>
            );
        } else {
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
                                {this.props.businesses.map((business, i) => {
                                    return(
                                        <div className="each-result-container" key={i}>
                                            <Link className="result-link" to={`/businesses/${business.id}`}>
                                                <div className="each-result">
                                                    <div className="result-info">
                                                        <div className="result-name">
                                                            <p>{i + 1}. </p>
                                                            <p className="result-name-name">{business.name}</p>
                                                        </div>
                                                        <div className="result-location">
                                                            <p className="result-num">{business.phone}</p>
                                                            <p>{business.address}</p>
                                                        </div>
                                                        <div className="result-rating">
                                                            <p>Currently Unavailable</p>
                                                        </div>
                                                        <div className="result-review">
                                                            <p>Currently Unavailable</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="index-map-box">
                            <BusinessMap businesses={this.props.businesses}/>
                        </div>
                    </div>
                    <div className="splash-about">
                        <SplashAbout></SplashAbout>
                    </div>
                </div>
            );
        }
    }
}

export default BusinessIndex;