import React from 'react';

const SplashAbout = props => (
    <div className="footer-container">
        <div className="footer-about">
            <p className="footer-title">About</p>
            <div className="about-links">
                <div className="about-link">
                    <a href="https://github.com/rinayumiho" target="_blank"><img className="about-pic" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/></a>
                    
                </div>
                <div className="about-link">
                    
                    <a href="https://www.linkedin.com/in/long-chen-5153a31b7/" target="_blank"><img className="about-pic" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/></a>
                </div>
            </div>  
        </div>
        <img className="bottom-image"src="http://d5yem10y0aabn.cloudfront.net/yelp_footer.png" alt="bottom-pic"/>
    </div>
)

export default SplashAbout