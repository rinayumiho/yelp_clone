import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';

const BusinessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return Object.assign({}, oldState, {[action.business.id]: action.business});
        default: 
            return oldState; 
    }
}
export default BusinessesReducer;