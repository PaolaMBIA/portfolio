//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Projet1, Projet2, Projet3, Projet4, Projet5 } from "./pages/Projet";

import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projet-1" component={Projet1} />
        <Route exact path="/projet-2" component={Projet2} />
        <Route exact path="/projet-3" component={Projet3} />
        <Route exact path="/projet-4" component={Projet4} />
        <Route exact path="/projet-5" component={Projet5} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
    
  );
}

export default App;
