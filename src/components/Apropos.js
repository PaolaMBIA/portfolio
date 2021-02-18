import React from 'react'
import Resume from './Resume'
import Slide from './Slide'
import SocialMedia from './SocialMedia'

const Apropos = () => {

    return (
        <div className="myHomePage">
            <div className="myIdentite" >
                <img id="photoProfil" src="./assets/img/img.jpeg" alt="photoProfil" />
                <div className="titre">
                    <h2>Paola MBIA MESSI</h2>
                    <h3>Développeuse d'applications Web et mobiles</h3>
                    <SocialMedia/>
                </div>
            </div>
            <Resume/>
        </div>
    )
}

export default Apropos
