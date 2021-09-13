import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom'
import SplashBusinesses from './splash_businesses';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashBusinesses));