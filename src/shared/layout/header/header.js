import React from 'react';
import { Link } from 'react-router-dom';

import "./header.css";

const Header = (props) => {
    return (
        <div id="header">
            <div>
                <Link to={"/"} className="link">DBStore</Link>
            </div>
            <div className="links">
                <Link to={"/shop"} className="link">Shop</Link>
                <Link to={"/shop/most-wanted"} className="link">Most wanted</Link>
                <Link to={"/shop/brands"} className="link">Brands</Link>
            </div>
            <div>
                <Link to={"/profile"} className="link">Profile</Link>
            </div>
        </div>
    );
}

export default Header;