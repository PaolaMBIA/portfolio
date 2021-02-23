//import { Button, Modal } from 'bootstrap';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Footer = () => {

    const history = useHistory();
    
    const handleShow = () => {
        history.push('/mentions')
    };


    return (
        <>
            <div className="shadow"></div>
            <footer className="myFooter">
                <button>Télécharger le CV</button>
                <span onClick={handleShow}> Mentions légales </span>
            </footer>           
        </>
        
    )
}

export default Footer
