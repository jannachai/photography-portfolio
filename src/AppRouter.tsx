import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TeMotu from './components/TeMotu/TeMotu';
import ContactPage from './components/Contact';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Te-Motu" component={TeMotu} />
            <Route path="/contact" component={ContactPage} />
            <Redirect to="/" />
        </Switch>
    )
}

export default AppRouter;