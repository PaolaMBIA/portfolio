import React, { useEffect, useState } from 'react'
import Resume from './Resume'
import Slide from './Slide'
import SocialMedia from './SocialMedia'
import { motion } from 'framer-motion';

const Apropos = () => {
    const [showImage, setShowImage] = useState(true);

    let array = ["Développeuse","d'applications", "Web", "et mobiles"];
    let wordIndex = 0;
    let letterIndex = 0;
  
    useEffect(() => {
      const target = document.getElementById("text-target");
  
      const createLetter = () => {
        const letter = document.createElement("span");
        target.appendChild(letter);
  
        letter.classList.add("letter");
        letter.style.opacity = "0";
        letter.style.animation = "anim 5s ease forwards";
        letter.textContent = array[wordIndex][letterIndex];
  
        setTimeout(() => {
          letter.remove();
        }, 2000);
      };
  
      const loop = () => {
        setTimeout(() => {
          if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
          } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
          } else {
            letterIndex = 0;
            wordIndex++;
            setTimeout(() => {
              loop();
            }, 2000);
          }
        }, 80);
      };
      loop();
    }, []);

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

    return (
        <div
            className="myHomePage"
        >
            <motion.div className="myIdentite" >
                {/* {
                    showImage ? */}
                        <img id="photoProfil" src="./assets/img/img.jpeg" alt="photoProfil" />
                        {/* : <img id="photoProfil" src="./assets/img/imag.jpeg" alt="photoProfil"  />
                } */}
                <div className="titre">
                    <motion.h2>Paola MBIA MESSI</motion.h2>
                    <motion.h3><span id="text-target"></span></motion.h3>
                    <SocialMedia/>
                </div>
            </motion.div>
            <Resume/>
        </div>
    )
}

export default Apropos
