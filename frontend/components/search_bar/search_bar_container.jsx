import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import SessionForm from './session_form';
import SearchBar from './search_bar';


const mapStateToProps = (state, ownProps) => ({
    
});


const mapDispatchToProps = dispatch => ({});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));