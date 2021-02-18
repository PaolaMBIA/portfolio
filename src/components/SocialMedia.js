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
                <a href="#!" target="_blank" rel="noopener noreferrer" className="hover"  onMouseOver={anim}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="#!" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-github"></i></li>
                </a>
                <a href="#!" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
            </ul>
            
        </div>
    )
}

export default SocialMedia
