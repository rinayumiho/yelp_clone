import { connect } from 'react-redux';
import BusinessHour from './business_hour';
import { fetchBusinessHours } from '../../actions/business_hour_actions';

const mapStateToProps = (state, ownProps) => ({
    businessHours: state.entities.businessHours
});

const mapDispatchToProps = dispatch => ({
    fetchBusinessHours: businessId => dispatch(fetchBusinessHours(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessHour);