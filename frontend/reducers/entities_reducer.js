import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';
import BusinessHoursReducer from './business_hours_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    businesses: BusinessesReducer,
    reviews: ReviewsReducer,
    businessHours: BusinessHoursReducer
})

export default EntitiesReducer;