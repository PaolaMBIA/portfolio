import React from 'react'
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';

const Resume = () => {
    
    const anim = () => {
        let navlinks = document.querySelectorAll('.mySkillsImage div');

        navlinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {
                link.style.transform = '';
            })
        })
    }

    const animImage = () => {

        let imgAni = document.querySelector('.myBlockResume img');
        let imgAni2 = document.querySelector('.myBlockResume2 img');

        imgAni.addEventListener('mouseover', (e) => {
            imgAni.style.transform = `translate(15px)`
        })

        imgAni.addEventListener('mouseleave', () => {
            imgAni.style.transform ='';
        })

        
        imgAni2.addEventListener('mouseover', (e) => {
            imgAni2.style.transform = `translate(-15px)`
        })

        imgAni2.addEventListener('mouseleave', () => {
            imgAni2.style.transform ='';
        })
    }

    let plusMinus = Math.random() > 0.4 ? 1 : -1;
    let imgX = Math.random() * 200 * plusMinus;

    const resume = {
        initial: {
          opacity: 0,
          x: imgX,
        },
        visible: { 
          opacity: 1,
            x: 0,
        }
      }

    return (
        <motion.div
            className="myResume"
            variants={resume}
            initial="initial"
            animate="visible"
            transition={{duration: 2.1}}
        >
            <div className="myGlobalBlockResume">
                <div className="myBlockResume">  
                    <div className="myStory">
                        <h4>Qui suis-je?</h4>
                        <span>Originaire du cameroun <img src="https://img.icons8.com/emoji/100/000000/cameroon-emoji.png" alt="cameroun" style={{ width: "30px", marginBottom:"-8px" }} /> et ouverte à m’adapter dans tout type d’environnement, j’ai décidé de venir poursuivre mes études supérieures en France <img src="https://img.icons8.com/emoji/100/000000/airplane-emoji.png" alt="avion" style={{ width: "30px", marginBottom:"-5px" }}/> en 2014, pour une formation d'ingénieurs en système embarqué (alliant informatique et électronique) de 5 ans. Durant cette dernière j’ai pu acquérir des compétences dans la rédaction de cahiers de charges et spécifications fonctionnelles, dans la programmation en <strong style={{color:`#05745a`}}>C</strong>, <strong style={{color:`#05745a`}}>HTML</strong>, <strong style={{color:`#05745a`}}>CSS</strong>, <strong style={{color:`#05745a`}}>JavaScript</strong> et j'ai également eu l'opportunité de découvrir le monde du travail <img src="https://img.icons8.com/emoji/100/000000/briefcase-emoji.png" alt="travail" style={{ width: "30px", marginBottom:"-5px" }}/> dans une alternance de 3 ans au sein de la socièté <strong style={{color:`#05745a`}}>BODET</strong>.<br /><br/>
                        J'ai ensuite débuté un projet en interne dans la socièté <strong style={{color:"#05745a"}}>ADENTIS</strong> avec le Framework <strong style={{color:"#05745a"}}>Vue JS</strong>. Ce projet m'a donné l'envie de plus me spécialiser dans le développement Web.</span>
                    </div>  
                    <div className="myBlockResuImage" onMouseOver={animImage}>
                         <img  src="./assets/img/diplome.png" alt="diplome" />
                    </div>     
                </div>
                <div className="myBlockResume2">            
                    <div className="myStory">
                        <h4>Ma passion?</h4>
                        <span>Je suis direct devenue amoureuse <img src="https://img.icons8.com/emoji/48/000000/smiling-face-with-heart-eyes.png" alt="coeur" style={{ width: "30px", marginBottom:"-5px" }} /> des <strong style={{ color: "#05745a" }}>technologies du Web</strong>. En Mars 2020, j'ai suivi une formation professionnalisante de <strong style={{ color: "#05745a" }}>développeur .Net</strong> dans l'optique de pouvoir approfondir la liaison qu'il y'a entre l'orienté objet et Web. J'ai pu acquérir des compétences dans l'architecte MVC. A la suite j'ai enchaîné sur une formation de <strong style={{ color: "#05745a" }}>développeur Web et Web mobile</strong> pour acquerir plus de connaissances.
                        <br /><br />
                        A ce jour, j'ai réalisé plusieurs <NavLink to="/projets" exact className="hover">projets</NavLink> et je n'arrête pas tellement c'est hyper intéressant. J'ai réellement trouvé mon épanouissement tant bien professionnel que personnel.<br /><br />
                        Ci-dessous vous pourrez voir mes compétences acquises jusqu'à ce jour. Et ce n'est que le début <img src="https://img.icons8.com/emoji/100/000000/flexed-biceps.png" alt="bras" style={{ width: "30px", marginBottom:"-5px" }}/> </span>
                    </div>
                    <div className="myBlockResuImage"  onMouseOver={animImage}>
                        <img style={{transform:"rotateY(180deg)"}} src="./assets/img/imag.jpeg" alt="diplome"/>
                    </div> 
                </div>
            </div>
            <div className="mySkills">
                <h4>Mes compétences</h4>
                <div className="mySkillsImage">
                    <div onMouseOver={anim} >
                        <img src="./assets/img/icons8-html-5.svg" alt="html5" />
                        <p>HTML5</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-css3.svg" alt="css3" />
                        <p>CSS3</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-javascript.svg" alt="javascript" />
                        <p>JavaScript</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-typescript.svg" alt="typescript" />
                        <p>TypeScript</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-react-native.svg" alt="react" />
                        <p>React JS/native</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img rel="preconnect" src="https://img.icons8.com/color/100/000000/vue-js.png" alt="vuejs"/>
                        <p>Vue JS</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-ionic.svg" alt="ionic" />
                        <p>Ionic</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-nodejs.svg" alt="nodejs" />
                        <p>Node JS</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-firebase.svg" alt="firebase" />
                        <p>Firebase</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-mongodb.svg" alt="mongodb" />
                        <p>MongoDb</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img rel="preconnect" src="https://img.icons8.com/fluent/100/000000/adobe-xd.png" alt="adobeXD"/>
                        <p>Adobe XD</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img rel="preconnect" src="https://img.icons8.com/material-sharp/100/000000/github.png" alt="Github"/>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
