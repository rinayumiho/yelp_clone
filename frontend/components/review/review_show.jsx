import React from 'react';
import { Link } from 'react-router-dom';

class ReviewShow extends React.Component {
    constructor(props) {
        super(props);
        this.ratingStar = "";
        if(this.props.review.stars === 1) {
            this.ratingStar = (<div >
                               <i id="inv-star"className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               </div>);
        }else if(this.props.review.stars === 2) {
            this.ratingStar = (<div>
                               <i id="inv-star" className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="far fa-star str-g fa-xs" ></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               </div>);
        }else if(this.props.review.stars === 3) {
            this.ratingStar = (<div>
                               <i id="inv-star"className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               </div>);
        }else if(this.props.review.stars === 4) {
            this.ratingStar = (<div>
                               <i id="inv-star" className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="far fa-star str-g fa-xs"></i>
                               </div>);
        }else{
            this.ratingStar = (<div>
                               <i id="inv-star"className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               <i className="fas fa-star str fa-xs"></i>
                               </div>);
        }
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        if (this.props.users[this.props.review.user_id] === undefined) {
            return (
                <div>Loading..</div>
            )
        } else {
            return(

                <div>
                    <div className="review-box">
                        <div className="review-top">
                            <div className="important-info-container">
                                <div className="profile-box">
                                    <img className="profile-pic-user"src="https://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg" alt="Avatar"/>
                                    <div className="user-info">
                                        <li className="user-name">{this.props.users[this.props.review.user_id].first_name.slice(0, 1).toUpperCase() + this.props.users[this.props.review.user_id].first_name.slice(1)} {this.props.users[this.props.review.user_id].last_name.slice(0,1).toUpperCase()}.</li>
                                    </div>
                                </div>
                                <div className="rating-date-box">
                                    <span className="review-rating">
                                    <p>{this.ratingStar}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="review-main">
                            <div className="review-main-box">
                                {this.props.review.body}
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        }
    }
}

export default ReviewShow;