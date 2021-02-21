import React, { useEffect, useState } from 'react';
import {projectsData} from '../data/projectsData';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

import { wrap } from "popmotion";

const transition = { duration: 1.1, ease: "easeInOut" };
const postVariants = {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -100, opacity: 0, transition }
};
  
const imageVariants = {
    initial: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1, transition },
    exit: { x: 100, opacity: 0, transition }
};
  
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
    enter: { x: 0, opacity: 1, transition:{duration: 0.1, ease: "easeInOut"} },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: { x: 0, opacity: 0, transition:{duration: 0.1, ease: "easeInOut"}  }
  };

const MyProject = () => {
    const { id } = useParams();
    const [resultPost, setResultPost] = useState({ mySearchPost1: projectsData })

    useEffect(() => {
        const fiterResult = projectsData.filter(e => e.id === parseInt(id));

        setResultPost({ mySearchPost1: fiterResult })

        console.log(fiterResult)
    
    }, [id])

    const [[page, direction], setPage] = useState([0, 0]);

    const mylength = resultPost.mySearchPost1.map(e => e.img.length);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, mylength, page);
  
    const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
    };
    
    return (
        <div className="content1">
            {
                resultPost.mySearchPost1.map(e =>
                    <motion.div
                        className="myResultPostID"

                    >
                        <motion.div
                            className="myProjectDetails"
                            initial="exit"
                            animate="enter"
                            exit="exit"
                            variants={postVariants}
                        >
                            <div className="myTitle">
                                <h1>{e.title}</h1>
                                <p className="myLanguage"><span>{e.languages}</span></p>
                            </div>
                            <div className="myExplain">
                                {
                                    e.infos.map(item =>
                                        <p className="myInfo">{item}</p>
                                    )
                                }
                                
                                <a href={e.link} target="_blank" rel="noreferrer" >{e.link}</a>
                            </div>
                        </motion.div>
                        <motion.div
                            className="myImageProject"
                            initial="exit"
                            animate="enter"
                            exit="exit"
                            variants={imageVariants}
                        >
                            
                            {
                                
                                  
                                (e.id === 3) || (e.id === 6) ? <motion.img 
                                alt={e.title}
                                className="myImagesAppli"
                                key={page}
                                src={e.img[imageIndex]}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                  opacity: { duration: 0.1 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                  const swipe = swipePower(offset.x, velocity.x);
                      
                                  if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                  } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                  }
                                }}
                                 />
                                        : <motion.img
                                            alt={e.title} className="myImages"
                                            key={page}
                                            src={e.img[imageIndex]}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                              duration:0.5
                                            }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={1}
                                            onDragEnd={(e, { offset, velocity }) => {
                                              const swipe = swipePower(offset.x, velocity.x);
                                  
                                              if (swipe < -swipeConfidenceThreshold) {
                                                paginate(1);
                                              } else if (swipe > swipeConfidenceThreshold) {
                                                paginate(-1);
                                              }
                                            }}
                                        />        
                                
                            }
                            
                            <div className="next" onClick={() => paginate(1)}>
                                
                                {"‣"}
                                
                            </div>                            
                            <div className="prev" onClick={() => paginate(-1)}>                                
                                {"‣"}                               
                            </div>
                            
                        </motion.div>

                    </motion.div>
                )
            }
        </div>
    )
}

export default MyProject
