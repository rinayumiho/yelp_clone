import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import { Route, Link, Switch } from 'react-router-dom';
import BusinessContainer from './business/business_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/" component={SplashContainer}/>
            <Route exact path="/businesses/:businessId" component={BusinessContainer} />
        </Switch>     
        {/* <h1>pley</h1> */}
        {/* <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} /> */}
        {/* <Route path="/" component={SplashContainer}/> */}
    </div>
);

export default App;