import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TeMotu from './components/Pages/TeMotu/TeMotu';
import ContactPage from './components/Contact';
import SweetRed from './components/Pages/SweetRed/SweetRed';
import About from './components/About';
import Resume from './components/Resume';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Te-Motu" component={TeMotu} />
            <Route path="/Sweet-Red" component={SweetRed} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={ContactPage} />
            <Redirect to="/" />
        </Switch>
    )
}

export default AppRouter;