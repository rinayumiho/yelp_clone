import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review});
        case REMOVE_REVIEW:
            const newState = Object.assign({}, oldState);
            delete newState[action.review.id];
            return newState;
        default:
            return oldState;
    }
}

export default ReviewsReducer;