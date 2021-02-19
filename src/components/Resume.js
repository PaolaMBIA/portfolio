import React from 'react'

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

    return (
        <div className="myResume">
            <div className="myGlobalBlockResume">
                <div className="myBlockResume">  
                    <div className="myStory">
                        <h4>Qui suis-je?</h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>  
                    <div onMouseOver={animImage}>
                         <img  src="./assets/img/diplome.png" alt="diplome" />
                    </div>     
                </div>
                <div className="myBlockResume2">            
                    <div className="myStory">
                        <h4>Ma passion?</h4>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                    <div onMouseOver={animImage}>
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
                        <img src="./assets/img/icons8-nodejs.svg" alt="nodejs" />
                        <p>Node JS</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-ionic.svg" alt="ionic" />
                        <p>Ionic</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-mongodb.svg" alt="mongodb" />  
                        <p>MongoDb</p>
                    </div>
                    <div onMouseOver={anim}>
                        <img src="./assets/img/icons8-firebase.svg" alt="firebase" />
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
