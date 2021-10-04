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
                <div className="about-link">
                    
                    <a href="https://angel.co/u/long-chen-14" target="_blank"><img className="about-pic" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angellist-512.png" alt="AngelList"/></a>
                </div>
                <div className="about-link">
                    
                    <a href="https://rinayumiho.github.io/portfolio/" target="_blank"><img className="about-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Status_iucn_LC_icon.svg/1200px-Status_iucn_LC_icon.svg.png" alt="portfolio"/></a>
                </div>
            
            </div>  
        </div>
        <img className="bottom-image" src="https://i.ibb.co/W0wBZK3/yelp-footer.png" alt="bottom-pic"/>
    </div>
)

export default SplashAbout