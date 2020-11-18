import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//routes
import Home from './home';
import About from './About';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;

