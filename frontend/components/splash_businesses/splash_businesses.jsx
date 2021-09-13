import React from 'react';

class SplashBusinesses extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type) {
        this.props.searchBusinesses(type).then(() => this.props.history.push(`/businesses?query=${type}`))
    }

    render(){
        return(
            <div>
                <p className="splash-businesses-title">Hot and New Business</p>
                <div className="splash-businesses-container">
                    <div className="splash-businesses-item" onClick={() => this.handleClick("Chinese")}>
                        <div className="splash-businesses-pic-container">
                            <img className="splash-businesses-pic" src="https://cdn.vox-cdn.com/thumbor/NylXhUxHg2ZLh31jMbOi9hcMURI=/0x0:5760x3840/1200x900/filters:focal(2420x1460:3340x2380)/cdn.vox-cdn.com/uploads/chorus_image/image/66683596/Atlas_Kitchen_30.0.jpg" alt="picture"/>
                        </div>
                        <p className="splash-businesses-item-text">Chinese</p>
                    </div>
                    <div className="splash-businesses-item" onClick={() => this.handleClick("Italian")}>
                        <div className="splash-businesses-pic-container">
                            <img className="splash-businesses-pic" src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/italian-food.jpg?quality=82&strip=1&resize=640%2C360" alt="picture"/>
                        </div>
                        <p className="splash-businesses-item-text">Italian</p>  
                    </div>
                    <div className="splash-businesses-item" onClick={() => this.handleClick("Japanese")}>
                        <div className="splash-businesses-pic-container">
                            <img className="splash-businesses-pic" src="https://i.pinimg.com/originals/85/2e/6c/852e6c1646c383d558a20070524c7882.jpg" alt="picture"/>
                        </div>
                        <p className="splash-businesses-item-text">Japanese</p>
                    </div>
                    <div className="splash-businesses-item" onClick={() => this.handleClick("Mexican")}>
                        <div className="splash-businesses-pic-container">
                            <img className="splash-businesses-pic" src="https://www.welcometothetable.coop/sites/default/files/wp-content/uploads/2011/11/The_Food_of_Mexico_7.jpg" alt="picture"/>
                        </div>
                        <p className="splash-businesses-item-text">Mexican</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashBusinesses;