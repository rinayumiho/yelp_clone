import * as ApiBusinessUtil from '../util/business_api_util';

export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

const receiveBusiness = business => ({
    type: RECEIVE_BUSINESS,
    business
});

const receiveBusinesses = businesses => ({
    type: RECEIVE_BUSINESSES,
    businesses
});

export const fetchBusiness = businessId => dispatch => (
    ApiBusinessUtil.fetchBusiness(businessId)
        .then(business => dispatch(receiveBusiness(business)))
);

export const fetchBusinesses = () => dispatch => (
    ApiBusinessUtil.fetchBusiness()
        .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const searchBusinesses = search => dispatch => (
    ApiBusinessUtil.searchBusinesses(search)
        .then(businesses => dispatch(receiveBusinesses(businesses)))
);
