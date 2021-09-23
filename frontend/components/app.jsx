import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import { Route, Link, Switch } from 'react-router-dom';
import BusinessContainer from './business/business_container';
import BusinessIndexContainer from './business_index/business_index_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/" component={SplashContainer}/>
            
        </Switch>
    </div>
);

export default App;