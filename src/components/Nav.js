import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuButton } from './MenuButton';

import { motion } from 'framer-motion';

const transition = { duration: 0.8, ease: "easeInOut" };
//import logo from ''

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const canvasStyle = {
        position: "absolute",
        top: "23px",
        right: "19px"
    };
  
    const menuButtonStyle = {
      marginLeft: "2rem"
    };

    const menuContainerStyle = {
        display: "block"
    };

    const menuContainer2Style = {
        display: "none"
    }

    const variantsHamburgerOpen = {
        initial: { y: 10, opacity: 0 },
        enter: { y: 0, opacity: 1, transition },
        exit: { y: -10, opacity: 0, transition }
    };

    const variantsHamburgerClose = {
        initial: { x: 0, opacity: 0 },
        enter: { x: 100, opacity: 0, transition },
        exit: { x: 0, opacity: 0, transition }
    };

    return (
        <>
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
                <div className="myhambur" style={canvasStyle}>
                    <MenuButton
                        isOpen={isOpen}
                        onClick={() => setOpen(!isOpen)}
                        strokeWidth="2"
                        color="#05745a"
                        transition={{ ease: "easeOut", duration: 1.2 }}
                        width="32"
                        height="45"
                        style={menuButtonStyle}
                    />
                </div>
            </div>
            {
                isOpen ? 
                    <motion.div
                        className="myHamburgerMenu"
                        style={menuContainerStyle}
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        variants={variantsHamburgerOpen}
                    >
                        <ul className="myUlHamburger">
                            <NavLink to="/" exact className="hover" activeClassName="nav-active" onClick={() => setOpen(!isOpen)}>
                                <li>.aPropos()</li>
                            </NavLink>
                            <NavLink to="/projets" exact className="hover" activeClassName="nav-active" onClick={() => setOpen(!isOpen)}>
                                <li className="nav-portfolio">.portfolio()</li>
                            </NavLink>
                            <NavLink to="/contact" exact className="hover" activeClassName="nav-active" onClick={() => setOpen(!isOpen)}>
                                <li>.contact()</li>
                            </NavLink>
                        </ul>
                    </motion.div>
                    :
                    <div
                        className="myHamburgerMenu"
                        style={menuContainer2Style}
                        initial="initial"
                        animate="exit"
                        exit="exit"
                        variants={variantsHamburgerClose}
                    >
                        <ul className="myUlHamburger">
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
            }
        </>
    )
}

export default Nav
