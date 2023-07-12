import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./home.css";

import { Controls, Slides } from './components';

const Home = (props) => {
    const slideCount = 5;

    const [currentSlide, setSlide] = useState(0);

    const upSlide = ( ) => {
        // move slide to the right
        setSlide(slide => (slide + 1 + slideCount) % slideCount);
    }
    const downSlide = ( ) => {
        // move slide to the right
        setSlide(slide => (slide - 1 + slideCount) % slideCount);
    }

    const fixSlide = ( next ) => {
        setSlide(slide => next);
    }

    return (
        <>
            <div id="hero">
                <div className="banner">
                    <Controls up={upSlide} down={downSlide} />
                    <h1 className="light">Level up your style with our summer collection</h1>
                    {/* Need CTA Button component */}
                    <Link to="/shop" className="button">
                        Shop Now
                    </Link>
                    <Slides slideCount={slideCount} currentSlide={currentSlide} click={fixSlide}/>
                </div>
            </div>
        </>
    );
}

export default Home;