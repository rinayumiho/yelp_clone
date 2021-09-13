import { connect } from 'react-redux';
import BusinessIndex from './business_index'
import {withRouter} from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import { searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
    businesses: Object.values(state.entities.businesses),
    formType: "other_pages",
    user: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch =>({
    searchBusinesses: search => dispatch(searchBusinesses(search)),
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessIndex));