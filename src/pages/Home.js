import React from 'react';
import Apropos from '../components/Apropos';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
    return (
        <div>
            <Nav />
            <Apropos/>
            <Footer/>
        </div>
    )
};

export default Home;