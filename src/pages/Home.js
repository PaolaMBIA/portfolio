import React from 'react';
import Apropos from '../components/Apropos';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import SocialMedia from '../components/SocialMedia';

import { motion } from 'framer-motion';

const Home = () => {

    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 200,
          },
          visible: { 
            opacity: 1,
            x: 0,
          },
          exit: {
            opacity: 0.4,
            transition: { duration: 0.35 },
            x: -800,
          }
    };

    const transition = {
        ease: [.03,.87,.73,.9],
        duration: .6,
      }
    
    return (
        <motion.div>
            <Nav />
            <motion.div
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        transition={transition}
                        variants={variants}>
                <Apropos/>
            </motion.div>
            <Footer/>
        </motion.div>
    )
};

export default Home;