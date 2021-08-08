import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import ParamsDemo from './ParamsDemo';

function ReactRouterDemo(props) {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <br  />
                <Link to="/about">About</Link>
                <br  />
                <Link to="/contact">Contact</Link>
                <br  />
                <Link to="/params/ResultFromParams">Params Demo</Link>
            </nav>
            <hr />
            <Switch>
                <Route path="/" exact component={() => <HomePage />}/>
                <Route path="/about" exact component={() => <AboutPage />}/>
                <Route path="/contact" exact component={() => <ContactPage />}/>
                <Route path="/params/:id" exact component={() => <ParamsDemo />}/>
            </Switch>
        </Router>
    );
}

export default ReactRouterDemo;
