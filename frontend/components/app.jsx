import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom'

const App = () => (
    <div>
        <h1>yelp_clone</h1>
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        
    </div>
);

export default App;