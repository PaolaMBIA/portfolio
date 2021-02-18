import React, { useEffect, useState } from 'react'

const Slide = ({ images=['transparent','transparent','./assets/img/test.PNG'], interval=3000}) => {
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(()=>{
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });

        if(currentSlide>0){
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 

    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    };

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    };

    return (
        <div className="slideshow">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail">hhh</div>
                </section>
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail">pp
                    </div>
                </section>
                <section className="slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail">jj</div>
                </section>
            </div>          
            <div className="slideshow-controller">
                <span onClick={previous}><i class="fas fa-arrow-left"></i></span>
                <span onClick={next}><i class="fas fa-arrow-right"></i></span>
            </div>
            
        </div>
    )
}

export default Slide
