import React from 'react'

const SocialMedia = () => {
    
    const anim = () => {
        let navlinks = document.querySelectorAll('.social-network a');

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
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://www.linkedin.com/in/paola-mbia-messi-86273a150/" target="_blank" rel="noopener noreferrer"   onMouseOver={anim}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="https://github.com/PaolaMBIA/" target="_blank" rel="noopener noreferrer"  onMouseOver={anim}>
                    <li><i className="fab fa-github"></i></li>
                </a>
                <a href="https://www.instagram.com/paolambiamessi/" target="_blank" rel="noopener noreferrer"  onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>
            
        </div>
    )
}

export default SocialMedia
