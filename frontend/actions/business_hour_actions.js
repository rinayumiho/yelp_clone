import * as ApiBusinessHourUtil from '../util/business_hour_api_util';
export const RECEIVE_BUSINESS_HOURS = "RECEIVE_BUSINESS_HOURS";

const receiveBusinessHours = businessHours => ({
    type: RECEIVE_BUSINESS_HOURS,
    businessHours
});

export const fetchBusinessHours = businessId => dispatch => (
    ApiBusinessHourUtil.fetchBusinessHours(businessId)
        .then(businessHours => dispatch(receiveBusinessHours(businessHours)))
);