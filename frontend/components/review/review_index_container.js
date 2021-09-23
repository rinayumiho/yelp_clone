import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, updateReview, deleteReview } from '../../actions/review_actions'
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
    reviews: state.entities.reviews,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    // updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
    // deleteReview: (review, businessId) => dispatch(deleteReview(review, businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);