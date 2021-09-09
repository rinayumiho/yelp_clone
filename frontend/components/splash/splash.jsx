import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="splash-top-container">
                <div className="splash-main-top">
                    <div className="nav-bar-container">
                        {/* <NavBar formType={this.props.formType} currentUser={this.props.currentUser} logout={this.props.logout} />
                        <SearchBox formType={this.props.formType} searchBusinesses={this.props.searchBusinesses} /> */}
                    </div>
                    <div className="splash-logo-container">
                        <Link to="/"><img className="splash-logo" src="https://i.ibb.co/ydJ6Mvg/yelp-clone-logo-removebg-preview.png" /></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;