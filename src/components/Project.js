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
        
        <div className="img-content">
          <div className="myPosts">
            <div className="myFirstPosts">
              <div className="img-container" onClick={() => { mySpecifyProject(1) }}>
                <span>
                  <h3>Schitt's Creek Cafe Tropical</h3>                 
                  <p>React JS, Node JS, MongoDB</p>                 
                </span>

                <motion.img
                  variants={imgAnim1}
                  initial="initial"
                  animate="visible"
                  transition={{ duration: 1 }}
                  src="./assets/img/projet-1.PNG"
                  alt="projet1"
                  className="myImg1"
                /> 
                
              </div>

              <div className="img-container" onClick={() => { mySpecifyProject(2) }}>
                <span>
                  <h3>PM movies</h3>                 
                  <p>React JS, API The movies database</p>                 
                </span>

                <motion.img
                  variants={imgAnim2}
                  initial="initial"
                  animate="visible"
                  transition={{duration: 1.1}}
                  src="./assets/img/projet-3.PNG"
                  alt="projet1"
                  className="myImg2"
                />  
              </div>
            </div>
            
            <div className="mySecondPosts">    
              <div className="img-container" onClick={() => { mySpecifyProject(3) }}>
                <span className="myMobile1">
                  <h3>Mboa237</h3>                 
                  <p><p>React native,</p> <p>firebase</p></p>                 
                </span>

                <motion.img
                  variants={imgAnim3}
                  initial="initial"
                  animate="visible"
                  transition={{duration: 1.2}}
                  src="./assets/img/projet-2.jpg"
                  alt="projet1"
                  className="myImg3"
                /> 
              </div>       
            </div>  
          </div>
          

          <div className="myPosts">            
            <div className="myFirstPosts">    
              <div className="img-container" onClick={() => { mySpecifyProject(4) }}>
                <span>
                  <h3>Site de jeunes entrepreneurs</h3>                 
                  <p>WordPress</p>                 
                </span>

                <motion.img
                  variants={imgAnim4}
                  initial="initial"
                  animate="visible"
                  transition={{duration: 1.3}}
                  src="./assets/img/projet-5.PNG"
                  alt="projet1"
                  className="myImg1"
                />             
              </div>

              <div className="img-container" onClick={() => { mySpecifyProject(5) }}>
                <span>
                  <h3>pmTools</h3>                 
                  <p>Angular, Node JS, MongoDB</p>                 
                </span>

                <motion.img
                  variants={imgAnim5}
                  initial="initial"
                  animate="visible"
                  transition={{duration: 1.4}}
                  src="./assets/img/projet-6.JPG"
                  alt="projet1"
                  className="myImg1"
                />
              </div>
            </div>
            
            <div className="mySecondPosts">
              
              <div className="img-container" onClick={() => { mySpecifyProject(6) }}>
                <span className="myMobile">
                  <h3>Afrik tchop</h3>                 
                  <p>React native, PHP</p>                 
                </span>

                <motion.img
                  variants={imgAnim6}
                  initial="initial"
                  animate="visible"
                  transition={{duration: 1.5}}
                  src="./assets/img/home1.jpeg"
                  alt="projet1"
                  className="myImg3"
                />             
              </div>
            </div>            
          </div>   
        </div> 
      </motion.div>    
    </>
  );
};

export default Project;
