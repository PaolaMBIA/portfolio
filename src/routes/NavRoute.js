import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../pages/Home';
import Projet from '../pages/Projet';
import Nav from '../components/Nav';

const NavRoute = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projet" exact component={Projet}/>
                <Route path="/statistic"  /> 
                <Redirect to ="/"/>
            </Switch>
        </Router>
    );
};

export default NavRoute;