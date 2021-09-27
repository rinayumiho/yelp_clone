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
        this.date = new Date(this.props.review.created_at);
        this.realDate = (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" + this.date.getFullYear();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteReview(this.props.review, this.props.business.id).then(() => window.location.reload())
    }

    handleClick(id){
        if (document.getElementById(`myReviewDropdown${id}`).style.display === "block") {
            document.getElementById(`myReviewDropdown${id}`).style.display = "none";
        } else {
            document.getElementById(`myReviewDropdown${id}`).style.display = "block";
        }
    }

    deleteModal(id){
        const deleteContainer = document.getElementById(`delete${id}`);
        return(
            deleteContainer.style.display = "block"
        )
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    removeModal(e) {
        return(
            e.currentTarget.style.display = "none"
        )
    }

    editandDelete(){
        if (this.props.user !== null && this.props.user !== undefined) {
            if (this.props.review.user_id === this.props.user.id) {
                return (
                    <div className="edit-delete-btn">
                         <div className={`dropdown-review`}>
                            <div className="reviewDrpbtwn">
                                <button onClick={() => this.handleClick(this.props.review.id)}className="review-options">
                                    <i className="fa fa-list"></i>
                                </button>
                            </div>
                            <div id={`myReviewDropdown${this.props.review.id}`} className='review-dropdown-content'>
                                <p className="edit-review" onClick={this.handleUpdate}><Link className="edit-review-text" to={`/businesses/${this.props.business.id}/reviews/${this.props.review.id}/update`}>Edit review</Link></p>
                                <p className="delete-review"onClick={() => this.deleteModal(this.props.review.id)}>Remove review</p>
                            </div>
                        </div>
                        <div id={`delete${this.props.review.id}`} className="delete-background" onClick={this.removeModal}>
                            <div className="delete-container-top"onClick={e => e.stopPropagation()} >
                                <div className="delete-text">
                                    <div className="delete-options">
                                        <p>Are you sure you want to remove your review?</p>
                                        <br/>
                                        <div className="buttons-box">
                                            <button className="del-no"onClick={() => window.location.reload()}>Keep Review</button>
                                            <button className="del-yes"onClick={this.handleDelete}>Remove Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="invisible">
                        Hey
                    </div>
                )
            }
        }
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
                                    <span className="review-created-time">{this.realDate}</span>
                                    
                                </div>
                            </div>
                            {this.editandDelete()}
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