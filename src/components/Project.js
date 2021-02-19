import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { useHistory } from 'react-router';


const Project = () => {
  //const [currentProject] = useState(projectsData);

  //const project = currentProject[props.projectNumber];

  // random background circle
  const history = useHistory();

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
  let imgX = Math.random() * 200 * plusMinus;
  let imgY = Math.random() * 100 * plusMinus;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
      y: 0,
    }
  }

  const imgAnim1 = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
      y: 0,
    }
  }

  const imgAnim2 = {
    initial: {
      opacity: 0,
      x: -imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
      y: 0,
    }
  }

  const imgAnim3 = {
    initial: {
      opacity: 0,
      x: imgX,
      y: -imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
      y: 0,
    }
  }
  const imgAnim4 = {
    initial: {
      opacity: 0,
      x: -imgX,
      y: -imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
      y: 0,
    }
  }
  const imgAnim5 = {
    initial: {
      opacity: 0,
      x: imgX,
      y: -imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
      y: 0,
    }
  }


  const imgAnim6 = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 20,
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
            delayChildren: 1.5,
            staggerChildren: 1.2
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
  
  const mySpecifyProject = (id) => {
    history.push(`projets/${id}`)
  }

  return (
      <>
       
        <motion.div 
            className="content1"
            initial="initial"
            animate="visible"
            exit="exit"
            transition={transition}
            variants={variants}
            //transition={{duration: 1.2}}
        >

              <h2>Mes réalisations</h2>
              <div
                  className="img-content"
              >
                  <div className="myPosts">
            <div className="myFirstPosts">
              <div className="img-container" onClick={() => { mySpecifyProject(1) }}>
              <span>
            <h3>title</h3>
            <p>infos</p>
                </span>
                <motion.img
                variants={imgAnim1}
                initial="initial"
                animate="visible"
                transition={{ duration: 1.2 }}
                src="./assets/img/projet-1.PNG"
                alt="projet1"
                className="myImg1"
                            /> 
              </div>

                            <motion.img
                                variants={imgAnim2}
                                initial="initial"
                                animate="visible"
                                transition={{duration: 1.5}}
                                src="./assets/img/projet-3.PNG"
                                alt="projet1"
                                className="myImg2"
                            />  
                      </div>
                      <div className="mySecondPosts">
                            <motion.img
                                variants={imgAnim3}
                                initial="initial"
                                animate="visible"
                                transition={{duration: 1.8}}
                                src="./assets/img/projet-2.jpg"
                                alt="projet1"
                                className="myImg3"
                            /> 
                          
                      </div>
                  </div>
                  <div className="myPosts">
                      <div className="myFirstPosts">
                            <motion.img
                                variants={imgAnim4}
                                initial="initial"
                                animate="visible"
                                transition={{duration: 2.1}}
                                src="./assets/img/projet-5.PNG"
                                alt="projet1"
                                className="myImg1"
                            /> 
                            <motion.img
                                variants={imgAnim5}
                                initial="initial"
                                animate="visible"
                                transition={{duration: 2.4}}
                                src="./assets/img/projet-6.JPG"
                                alt="projet1"
                                className="myImg1"
                            />
                      </div>
                      <div className="mySecondPosts">
                            <motion.img
                                variants={imgAnim6}
                                initial="initial"
                                animate="visible"
                                transition={{duration: 2.7}}
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
