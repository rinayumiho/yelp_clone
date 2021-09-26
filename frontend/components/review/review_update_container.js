import { connect } from 'react-redux';
import ReviewUpdate from './review_update';
import { updateReview, fetchReviews } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    user_id: state.session.id,
    formType: "review_pages",
    user: state.entities.users[state.session.id],
    review: state.entities.reviews[ownProps.match.params.reviewId]
});

const mdp = dispatch => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(ReviewUpdate);