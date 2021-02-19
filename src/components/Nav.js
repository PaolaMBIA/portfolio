import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from ''

const Nav = () =>{
    return (
        <div className="navigation">
            <div className="brand-logo">
                <NavLink to="/"> 
                    <img id="myLogo" src="./assets/img/logo.png" alt="logo"/>
                </NavLink>
            </div>
            <ul className="myUl">
                <NavLink to="/" exact className="hover" activeClassName="nav-active">
                    <li>.aPropos()</li>
                </NavLink>
                <NavLink to="/projets" exact className="hover" activeClassName="nav-active">
                    <li className="nav-portfolio">.portfolio()</li>
                </NavLink>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                    <li>.contact()</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Nav
