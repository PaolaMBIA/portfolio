import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";


const Project = () => {
  //const [currentProject] = useState(projectsData);

  //const project = currentProject[props.projectNumber];

  // random background circle
  let right = -250 + "px";
  let top = 0 + "px";
  //let size = "scale(" + (Math.random() + 0.7) + ")";

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

  // random img pop
  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusMinus;
  let imgY = Math.random() * 120 * plusMinus;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
    }
  }

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

  return (
      <>
       
        <motion.div 
            className="content1"
            initial="hidden"
            animate="visible"
            variants={container}
            //transition={{duration: 1.2}}
        >

              <h2>Mes réalisations</h2>
              <div
                  className="img-content"
              >
                  <div className="myPosts">
                      <div className="myFirstPosts">
                            <motion.img
                                variants={item}
                                src="./assets/img/projet-1.PNG"
                                alt="projet1"
                              className="myImg1"                  
                            /> 
                            <motion.img
                                variants={item}
                                src="./assets/img/projet-3.PNG"
                                alt="projet1"
                                className="myImg2"
                            />  
                      </div>
                      <div className="mySecondPosts">
                            <motion.img
                                variants={item}
                                src="./assets/img/projet-2.jpg"
                                alt="projet1"
                                className="myImg3"
                            /> 
                          
                      </div>
                  </div>
                  <div className="myPosts">
                      <div className="myFirstPosts">
                            <motion.img
                                variants={item}
                                src="./assets/img/projet-5.PNG"
                                alt="projet1"
                                className="myImg1"
                            /> 
                            <motion.img
                                variants={item}
                                src="./assets/img/projet-6.JPG"
                                alt="projet1"
                                className="myImg1"
                            />
                      </div>
                      <div className="mySecondPosts">
                            <motion.img
                                variants={item}
                                src="./assets/img/projet-4.jpeg"
                                alt="projet1"
                                className="myImg3"
                            />
                      </div>
                  </div> 
              </div>
    
          </motion.div>
          
    </>
  );
};

export default Project;
