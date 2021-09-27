import { RECEIVE_BUSINESS_HOURS } from "../actions/business_hour_actions";

const BusinessHoursReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_BUSINESS_HOURS:
            return action.businessHours;
        default:
            return oldState
    }
}

export default BusinessHoursReducer;