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
                <button>Télécharger le CV</button>
                <div className="myNameFooter">
                    <p>Paola MBIA MESSI ~ </p>
                    <span onClick={handleShow}> ~ Mentions légales </span>
                </div>

            </footer>           
        </>
        
    )
}

export default Footer
