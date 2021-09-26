import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import { Route, Link, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import BusinessContainer from './business/business_container';
import BusinessIndexContainer from './business_index/business_index_container';
import ReviewFormContainer from './review/review_form_container';
import ReviewUpdateContainer from "./review/review_update_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/signup" component={ SignupFormContainer } />
            <AuthRoute exact path="/login" component={ LoginFormContainer } />
            <Route exact path="/businesses/:businessId" component={ BusinessContainer } />
            <Route exact path="/businesses" component={ BusinessIndexContainer } />
            <Route exact path="/" component={ SplashContainer }/>
            <ProtectedRoute exact path="/businesses/:businessId/reviews/create" component={ ReviewFormContainer }/>
            <ProtectedRoute exact path="/businesses/:businessId/reviews/:reviewId/update" component={ ReviewUpdateContainer }/>
        </Switch>
    </div>
);

export default App;