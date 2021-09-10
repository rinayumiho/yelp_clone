import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    // formType: 'signup',
    // navLink: <Link to="/login">log in instead</Link>
});

const mapDispatchToProps = dispatch => ({
    processDemo: user => dispatch(login(user)),
    processForm: user => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);