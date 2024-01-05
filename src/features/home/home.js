import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./home.css";

import { Controls, Slides } from './components';
import allItems from "../../shared/utils/products/items.json";

const Home = () => {
    // Landing page for project

    // Set up slides for hero section
    const slideCount = 5;
    const [currentSlide, setSlide] = useState(0);

    let icons = require.context("../../assets/icons/", true);
    let folder = require.context(`../../assets/images/`, true);
    let images = [
        "products/ga-2100-1a/desktop_GA-2100-1A1ER_01.jpg",
        "products/gma-s2100-1a/desktop_GMA-S2100_Desktop_02.jpg",
        "products/gma-s2100-1a/desktop_GMA-S2100_Desktop_03.jpg",
        "products/ga-2100-1a/desktop_GA-2100-1A1ER_03.jpg",
        "products/ga-2100-1a/desktop_GA-2100-1A1ER_04.jpg",
    ];

    let items = [
        allItems["srpb77"],
        allItems["bm7100-59h"],
        allItems["ga-2100-1a"]
    ];

    // Functions to move through slides
    const upSlide = () => {
        // move slide to the right
        setSlide(slide => (slide + 1 + slideCount) % slideCount);
    }
    
    const downSlide = () => {
        // move slide to the right
        setSlide(slide => (slide - 1 + slideCount) % slideCount);
    }

    const fixSlide = ( next ) => {
        // change slide to a specific one
        setSlide(slide => next);
    }


    // Set up brands (in context `../../assets/images/`)
    let brandList = [
        ["brands/g-shock-logo.png", "G-Shock Logo"],
        ["brands/seiko-logo.png", "Seiko Logo"],
        ["brands/casio-logo.png", "Casio Logo"],
        ["brands/citizen-logo.png", "Citizen Logo"],
        ["brands/orient-logo.png", "Orient Logo"],
        ["brands/claude-bernard-logo.png", "Claude Bernard Logo"],
        ["brands/certina-logo.png", "Certina Logo"]
    ]

    return (
        <>
            <section id="hero">
                <div className="banner">
                    <img className="banner-image" src={folder("./"+images[currentSlide])} alt="" />
                    <div className="banner-cover"></div>
                    <Controls up={upSlide} down={downSlide} />
                    <h1 className="light">Level up your style with our summer collection</h1>
                    <Link to="/dbstore/shop" className="button">
                        Shop Now
                    </Link>
                    <Slides slideCount={slideCount} currentSlide={currentSlide} click={fixSlide}/>
                </div>
            </section>
            <section id="brands">
                <h2>Brands</h2>
                <div className="list-row g-10 jc-left">
                    {brandList.map(([brandImage, brandName]) =>
                        <div key={brandName} className="list-item card shadow p-10">
                            <img src={folder("./"+brandImage)} alt={brandName} />
                        </div>
                    )}
                </div>
            </section>
            <section id="experiences">
                <div className="split-row">
                    <div className="thin-header">
                        <h2>We provide great customer experiences</h2>
                    </div>
                    <div className="side">
                        <div className="bar"></div>
                        <p>We ensure our customers have the best experience.</p>
                    </div>
                </div>
                <div className="list-row g-20 jc-left">
                    <div className="list-card">
                        <div className="list-item icon shadow">
                            <img src={icons("./check-mark-circle-line-icon.png")} alt="Check mark" />
                        </div>
                        <h4>Original Products</h4>
                        <p>We provide money back guarantee if the product are not original.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item icon shadow">
                            <img src={icons("./quality-badge-thumbs-up-icon.png")} alt="Quality Controled" />
                            </div>
                        <h4>Satisfaction Guarantee</h4>
                        <p>We ensure full customer satisfaction guarantee.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item icon shadow">
                            <img src={icons("./new-icon.png")} alt="New Arrivals" />
                            </div>
                        <h4>Frequent New Arrivals</h4>
                        <p>We keep our products up do date and bring in new arrivals frequently.</p>
                    </div>
                    <div className="list-card">
                        <div className="list-item icon shadow">
                            <img src={icons("./box-package-icon.png")} alt="Free Shipping" />
                            </div>
                        <h4>Fast & Free Shipping</h4>
                        <p>We provide fast shipping all around the world for free, every time.</p>
                    </div>
                </div>
            </section>
            <section id="picks">
                <h2>Curated picks</h2>
                <div className="list-row g-20 jc-left">
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow full-image">
                            <Link to="/dbstore/shop/most-wanted" className="button split-row ai-center">
                                <h4>Best Seller</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="Right arrow angle icon" />
                            </Link>
                            <img src={folder("./general/best-seller.png")} alt="" />
                        </div>
                    </div>
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow full-image">
                            <Link to="/dbstore/shop/men" className="button split-row ai-center">
                                <h4>Men's Watches</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="Right arrow angle icon" />
                            </Link>
                            <img src={folder("./general/mens-watches.png")} alt="" />
                        </div>
                    </div>
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow full-image">
                            <Link to="/dbstore/shop/women" className="button split-row ai-center">
                                <h4>Women's Watches</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="Right arrow angle icon" />
                            </Link>
                            <img src={folder("./general/womens-watches.png")} alt="" />
                        </div>
                    </div>
                    <div className="db-3 gap-20">
                        <div className="card card-small shadow full-image">
                            <Link to="/dbstore/shop/" className="button split-row ai-center">
                                <h4>All Items</h4>
                                <img className="square-img" src={require("../../assets/icons/angle-right-grey.svg")} alt="Right arrow angle icon" />
                            </Link>
                            <img src={folder("./general/most-wanted.png")} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="featured">
                <h2>Featured products</h2>
                <div className="list-row g-20 jc-left">
                    {
                        items.map((item, i) =>
                            <div key={i} className="db-4 gap-20">
                                <div className="card card-large shadow">
                                    <img src={folder("./products/"+item["images"][0])} alt={item["name"]} />
                                </div>
                                <div className="card-text">
                                    <div className="split-row">
                                        <h4>{item["name"]}</h4>
                                        <h3>{item["price"]}:-</h3>
                                    </div>
                                </div>
                                <p className="cap">{item["gender"]}</p>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default Home;