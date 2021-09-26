import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(){
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render(){
        return !this.props.user ? 
            (
                <nav className={`nav-main-${this.props.formType}`}>
                    <div className={`nav-main-sub-${this.props.formType}`}>
                        <p className={`session-button0-${this.props.formType}`}>{this.props.formType === "splash" ? "Write a Review" : ""}</p>
                        <p className={`session-button0-${this.props.formType}`}>{this.props.formType === "splash" ? "Events" : ""}</p>
                        <p className={`session-button0-${this.props.formType}`}>{this.props.formType === "splash" ? "Talk" : ""}</p>
                    </div>
                    <div className={`nav-main-sub-${this.props.formType}`}>
                        <Link to="/login"><button className={`session-button1-${this.props.formType}`}>Log In</button></Link>
                        <Link to="/signup"><button className={`session-button2-${this.props.formType}`}>Sign Up</button></Link>
                    </div>
                </nav>
            )
            :
            (
                <div className={`nav-main-${this.props.formType}`}>
                    <div className={`nav-main-sub-${this.props.formType}`}>
                        <p className={`session-button0-${this.props.formType}`}>{this.props.formType === "splash" ? "Write a Review" : ""}</p>
                        <p className={`session-button0-${this.props.formType}`}>{this.props.formType === "splash" ? "Events" : ""}</p>
                        <p className={`session-button0-${this.props.formType}`}>{this.props.formType === "splash" ? "Talk" : ""}</p>
                    </div>
                    <div className={`nav-main-sub-${this.props.formType}`}>
                        <div className="drpbtwn">
                            <button onClick={() => this.handleClick()} className="nav-signed-on">
                                <img className="profile" src="https://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg" />
                            </button>
                        </div>
                        <div id="myDropdown" className="nav-dropdown-content">
                            <div className="dropdown-profile">
                                <img className="profile-inner" src="https://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg" />
                                <div className="dropdown-profile-text">
                                    <div className="dropdown-profile-name">{`${this.props.user.first_name}`}</div>
                                    <div className="dropdown-profile-name">{`${this.props.user.last_name}`}</div>
                                </div>
                            </div>
                            <button className="nav-logout" onClick={() => this.props.logout()}>Log Out</button>
                        </div>
                    </div>
                </div>
            );
    }
    
}

export default NavBar;