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
                <NavLink to="/projet-1" exact className="hover" activeClassName="nav-active">
                    <li className="nav-portfolio">.portfolio() <i class="fas fa-sort-down"></i>
                        <ul className="nav-projects">
                            <NavLink to="/projet-1" activeClassName="nav-active" className="hover">
                                <li style={{fontSize:"20px", color:"#05745a", marginTop:"20px"}}>.portfolio(projet 1)</li>
                            </NavLink>
                            <NavLink to="/projet-2" activeClassName="nav-active" className="hover">
                                <li style={{fontSize:"20px", color:"#05745a"}}>.portfolio(projet 2)</li>
                            </NavLink>
                            <NavLink to="/projet-3" activeClassName="nav-active" className="hover">
                                <li style={{fontSize:"20px", color:"#05745a"}}>.portfolio(projet 3)</li>
                            </NavLink>
                            <NavLink to="/projet-4" activeClassName="nav-active" className="hover">
                                <li style={{fontSize:"20px", color:"#05745a"}}>.portfolio(projet 4)</li>
                            </NavLink>
                            <NavLink to="/projet-5" activeClassName="nav-active" className="hover">
                                <li style={{fontSize:"20px", color:"#05745a"}}>.portfolio(projet 5)</li>
                            </NavLink>
                        </ul>
                    </li>
                </NavLink>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                    <li>.contact()</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Nav
