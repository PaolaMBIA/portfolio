//import { Button, Modal } from 'bootstrap';
import React from 'react'
import { useHistory } from 'react-router-dom';


const Footer = () => {

    const history = useHistory();
    
    const handleShow = () => {
        history.push('/mentions')
    };


    return (
        <>
            <div className="shadow">bb</div>
            <footer className="myFooter">
                <button><a title="cv" target="_blank" rel="noopener"  href="./assets/CV_Paola_MBIA_Developpeuse_Web_&_Web_mobile.pdf">Télécharger le CV</a></button>
                <div className="myNameFooter">
                    <p>Paola MBIA MESSI ~ </p>
                    <span onClick={handleShow}> ~ Mentions légales </span>
                </div>

            </footer>           
        </>
        
    )
}

export default Footer
