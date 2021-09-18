import { searchBusinesses } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import BusinessIndex from './business_index'

const mapStateToProps = (state, ownProps) => ({
    businesses: Object.values(state.entities.businesses),
    user: state.entities.users[state.session.id],
    formType: "other",
});

const mapDispatchToProps = dispatch =>({
    searchBusinesses: search => dispatch(searchBusinesses(search)),
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessIndex));