//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
//import { Projet1, Projet2, Projet3, Projet4, Projet5 } from "./pages/Projet";

import { AnimatePresence } from 'framer-motion';
import Project from "./components/Project";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MyProject from "./pages/MyProject";
import test from "./components/test";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <>
      <Nav/>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projets" component={Project} />
            <Route exact={true} path="/projets/:id" component={MyProject} />
            <Route exact path="/mentions" component={MentionsLegales} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
      </AnimatePresence>
      <div className="myDivFooter">
        <Footer />
      </div>
    </>
    
  );
}

export default App;
