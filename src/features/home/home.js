import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./home.css";

import { Controls, Slides } from './components';

const Home = (props) => {
    const slideCount = 5;

    const [currentSlide, setSlide] = useState(0);

    let folder = require.context(`../../assets/images/products/`, true);
    let images = [
        "ga-2100-1a/desktop_GA-2100-1A1ER_01.jpg",
        "gma-s2100-1a/desktop_GMA-S2100_Desktop_02.jpg",
        "gma-s2100-1a/desktop_GMA-S2100_Desktop_03.jpg",
        "ga-2100-1a/desktop_GA-2100-1A1ER_03.jpg",
        "ga-2100-1a/desktop_GA-2100-1A1ER_04.jpg",
    ]

    const upSlide = () => {
        // move slide to the right
        setSlide(slide => (slide + 1 + slideCount) % slideCount);
    }
    const downSlide = () => {
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
                    <img className="banner-image" src={folder("./"+images[currentSlide])} alt="" />
                    <div className="banner-cover"></div>
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
                    <div className="list-item card shadow m0-10 p-10">
                        <img src={require("../../assets/images/brands/g-shock-logo.png")} alt="G-Shock Logo" />
                    </div>
                    <div className="list-item card shadow m0-10 p-10">
                        <img src={require("../../assets/images/brands/seiko-logo.png")} alt="Seiko Logo" />
                    </div>
                    <div className="list-item card shadow m0-10 p-10">
                        <img src={require("../../assets/images/brands/casio-logo.png")} alt="Casio Logo" />
                    </div>
                    {Array(7).fill(0).map((_,i)=><div key={i} className="list-item card shadow m0-10 "></div>)}
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
                        <div className="list-item shadow"></div>
                        <h4>Original Products</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item shadow"></div>
                        <h4>Satisfaction Guarantee</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item shadow"></div>
                        <h4>New Arrival Everyday</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item shadow"></div>
                        <h4>Fast & Free Shipping</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                </div>
            </section>
            <section id="picks">
                <h2>Curated picks</h2>
                <div className="list-row">
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow">
                            <Link to="/shop/most-wanted" className="button split-row ai-center">
                                <h4>Best Seller</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="G-Shock Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow">
                            <Link to="/shop/men" className="button split-row ai-center">
                                <h4>Men's Watches</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="G-Shock Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow">
                            <Link to="/shop/women" className="button split-row ai-center">
                                <h4>Women's Watches</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="G-Shock Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow">
                            <Link to="/shop/" className="button split-row ai-center">
                                <h4>All Items</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="G-Shock Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="featured">
                <h2>Featured products</h2>
                <div className="list-row">
                    <div className="db-4 gap-20">
                        <div className="card card-large shadow">

                        </div>
                    </div>
                    <div className="db-4 gap-20">
                        <div className="card card-large shadow">

                        </div>
                    </div>
                    <div className="db-4 gap-20">
                        <div className="card card-large shadow">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;