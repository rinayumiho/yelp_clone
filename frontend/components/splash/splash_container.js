import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { logout, receiveCurrentUser } from '../../actions/session_actions';
import { searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
    formType: "splash",
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
    searchBusinesses: search => dispatch(searchBusinesses(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);