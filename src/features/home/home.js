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
            <section id="hero">
                <div className="banner">
                    <Controls up={upSlide} down={downSlide} />
                    <h1 className="light">Level up your style with our summer collection</h1>
                    {/* Need CTA Button component */}
                    <Link to="/shop" className="button">
                        Shop Now
                    </Link>
                    <Slides slideCount={slideCount} currentSlide={currentSlide} click={fixSlide}/>
                </div>
            </section>
            <section id="brands">
                <h2>Brands</h2>
                <div className="list-row">
                    {Array(8).fill(0).map(_=><div className="list-item"></div>)}
                </div>
            </section>
            <section id="experiences">
                <div className="split-row">
                    <div className="thin-header">
                        <h2>We provide great customer experiences</h2>
                    </div>
                    <div className="side">
                        <div className="bar"></div>
                        <p>We ensure our customers has the best experience.</p>
                    </div>
                </div>
                <div className="list-row">
                    <div className="list-card">
                        <div className="list-item"></div>
                        <h4>Original Products</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item"></div>
                        <h4>Satisfaction Guarantee</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item"></div>
                        <h4>New Arrival Everyday</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item"></div>
                        <h4>Fast & Free Shipping</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                </div>
            </section>
            <section id="picks">
                <h2>Curated picks</h2>
                <div className="list-row">
                    <div className="card card-small">
                        <Link to="/shop" className="button">Best Seller</Link>
                    </div>
                    <div className="card card-small">
                        <Link to="/shop" className="button">Shop Men</Link>
                        
                    </div>
                    <div className="card card-small">
                        <Link to="/shop" className="button">Shop Women</Link>
                        
                    </div>
                    <div className="card card-small">
                        <Link to="/shop" className="button">Shop Casual</Link>
                        
                    </div>
                </div>
            </section>
            <section id="featured">
                <h2>Featured products</h2>
                <div className="list-row">
                    <div className="card card-large">

                    </div>
                    <div className="card card-large">
                        
                    </div>
                    <div className="card card-large">
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;