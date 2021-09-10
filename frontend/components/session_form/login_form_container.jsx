import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
// import SessionForm from './session_form';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    // formType: 'login',
    // navLink: <Link to="/signup">sign up instead</Link>
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);