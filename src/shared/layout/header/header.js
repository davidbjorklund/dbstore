import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import "./header.css";

const Header = ({items}) => {
    // Header section of every page

    const [active, setActive] = useState(false);

    const burgerClick = () => {
        setActive(a => !a);
    }

    const closeMenu = () => {
        setTimeout(() => {
            setActive(_ => false);
        }, 50);
    }

    return (
        <div id="header">
            <div>
                <Link to={"/dbstore/"} className="link">DBStore</Link>
            </div>
            <div className={active ? "links nav active" : "links nav"} onClick={()=>closeMenu()}>
                <Link to={"/dbstore/shop"} className="link">All items</Link>
                <Link to={"/dbstore/shop/most-wanted"} className="link">Most wanted</Link>
                <Link to={"/dbstore/shop/men"} className="link">Men's</Link>
                <Link to={"/dbstore/shop/women"} className="link">Women's</Link>
            </div>
            <div className="ai-center g-20">
                <div className={active ? "burger open" : "burger"} onClick={()=>burgerClick()}>
                    <div className="burger-bar burger-bar-1"></div>
                    <div className="burger-bar burger-bar-2"></div>
                    <div className="burger-bar burger-bar-3"></div>
                </div>
                <Link to={"/dbstore/cart"} className="link ai-center g-10 cart">
                    <img src={require("../../../assets/icons/cart-line-icon.png")} alt="Cart Icon" />
                    { items.length !== 0 ? <span className="sticker">{items.length}</span> : null }
                    <span className="cart-text">Cart</span>
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items,
    }
}

export default connect(mapStateToProps)(Header);