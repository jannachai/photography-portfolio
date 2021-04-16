import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FirstPage from './components/FirstPage';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/page/1" component={FirstPage} />
            <Redirect to="/" />
        </Switch>
    )
}

export default AppRouter;