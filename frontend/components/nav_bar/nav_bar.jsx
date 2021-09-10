import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="nav-main">
                <div className="nav-main-sub">
                    <p className="session-button0splash">Write a Review</p>
                    <p className="session-button0splash">Events</p>
                    <p className="session-button0splash">Talk</p>
                </div>
                <div className="nav-main-sub">
                    <Link to="/login"><button className="session-button1splash">Log In</button></Link>
                    <Link to="/signup"><button className="session-button2splash">Sign Up</button></Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;