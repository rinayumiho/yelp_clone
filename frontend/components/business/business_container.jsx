import { connect } from 'react-redux';
import { fetchBusiness, searchBusinesses } from '../../actions/business_actions';
import Business from './business'
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    user: state.entities.users[state.session.id],
    formType: "other"
});

const mapDispatchToProps = dispatch => ({
    searchBusinesses: search => dispatch(searchBusinesses(search)),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    logout: () => dispatch(logout())
    
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Business));