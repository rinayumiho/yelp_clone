import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import { Route } from 'react-router-dom'

const App = () => (
    <div>
        {/* <h1>pley</h1> */}
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/" component={SplashContainer}/>
    </div>
);

export default App;