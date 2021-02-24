/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import Resume from './Resume'
//import Slide from './Slide'
import SocialMedia from './SocialMedia'
import { motion } from 'framer-motion';

const Apropos = () => {
    const [showImage, setShowImage] = useState(true);

    // let array = ["Développeuse","d'applications", "Web", "et mobiles"];
    // let wordIndex = 0;
    // let letterIndex = 0;
  
    // useEffect(() => {
    //   const target = document.getElementById("text-target");
  
    //   const createLetter = () => {
    //     const letter = document.createElement("span");
    //     target.appendChild(letter);
  
    //     letter.classList.add("letter");
    //     letter.style.opacity = "0";
    //     letter.style.animation = "anim 5s ease forwards";
    //     letter.textContent = array[wordIndex][letterIndex];
  
    //     setTimeout(() => {
    //       letter.remove();
    //     }, 2000);
    //   };
  
    //   const loop = () => {
    //     setTimeout(() => {
    //       if (wordIndex >= array.length) {
    //         wordIndex = 0;
    //         letterIndex = 0;
    //         loop();
    //       } else if (letterIndex < array[wordIndex].length) {
    //         createLetter();
    //         letterIndex++;
    //         loop();
    //       } else {
    //         letterIndex = 0;
    //         wordIndex++;
    //         setTimeout(() => {
    //           loop();
    //         }, 2000);
    //       }
    //     }, 50);
    //   };
    //   loop();
    // }, []);

    const anim = () => {
        setShowImage(false);
        let photoShow = document.querySelector('.myIdentite img');
        


        photoShow.addEventListener('mouseover', () => {
            //setShowImage(false);
            photoShow.style.transform = `rotateY(360deg)`;
            photoShow.style.transition = `160ms `;
        })

        photoShow.addEventListener('mouseleave', () => {
            setShowImage(true)
            photoShow.style.transform = `rotateY(-360deg)`;
        })

        // navlinks.forEach(link => {
        //     link.addEventListener('mouseover', (e) => {
        //         let attrX = e.offsetX - 20;
        //         let attrY = e.offsetY - 13;

        //         link.style.transform = `translate(${attrX}px, ${attrY}px)`;
        //     })
        //     link.addEventListener('mouseleave', () => {
        //         link.style.transform = '';
        //     })
        // })
    }

    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
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
        duration: .9,
    }

    let plusMinus = Math.random() > 0.4 ? 1 : -1;
    let imgX = Math.random() * 200 * plusMinus;
    
    const identite = {
        initial: {
          opacity: 0,
          x: imgX,
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
