/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Resume from './Resume'
//import Slide from './Slide'
import SocialMedia from './SocialMedia'
import { motion } from 'framer-motion';

const Apropos = () => {

    let plusMinus = Math.random() > 0.4 ? 1 : -1;
    let imX = Math.random() * 200 * plusMinus;
    
    const identite = {
        initial: {
          opacity: 0,
          x: imX,
        },
        visible: { 
          opacity: 1,
          x: 0,
          y: 0,
        }
    }
    

    return (
        <div
           className="myHomePage"
           id="titre"
        >
            <motion.div
                className="myIdentite"
                variants={identite}
                initial="initial"
                animate="visible"
                transition={{duration: 1.5}}
            >
                {/* {
                    showImage ? */}
                        <img id="photoProfil" src="./assets/img/img.jpeg" alt="photoProfil" />
                        {/* : <img id="photoProfil" src="./assets/img/imag.jpeg" alt="photoProfil"  />
                } */}
                <div className="titre" >
                    <motion.h2>Paola MBIA MESSI</motion.h2>
                    <motion.h3>
                    {/* <span id="text-target"></span> */}
                    Développeuse d'applications Web <img src="https://img.icons8.com/emoji/100/000000/laptop-emoji.png" alt="ordinateur" style={{ width: "31px", marginBottom:"-5px" }}/> et mobiles <img src="https://img.icons8.com/emoji/100/000000/mobile-phone.png" alt="telephone" style={{ width: "31px", marginBottom:"-5px" }}/>
                    </motion.h3>
                    <SocialMedia/>
                </div>
            </motion.div>
            <Resume />
            <div className="myReturnButton"><a id="cRetour" className="cInvisible" href="#titre"></a></div>
        </div>
    )
}

export default Apropos
