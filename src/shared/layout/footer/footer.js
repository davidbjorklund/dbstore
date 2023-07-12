import React from 'react';
import { Link } from 'react-router-dom';

import "./footer.css";

const Footer = (props) => {
    return (
        <div id="footer">
            <div className="innerFooter">
                <div className="homesection">
                    <Link to={"/"} className="link">DBStore</Link>
                    <p>Specializes in providing high-quality, stylish products for your wardrobe.</p>
                </div>
                
                <div className="shop">
                    <h5>Shop</h5>
                    <ul>
                        <li><Link to={"/shop"} className="alt-link">All Collections</Link></li>
                        <li><Link to={"/shop/winter-edition"} className="alt-link">Winter Edition</Link></li>
                        <li><Link to={"/shop/discount"} className="alt-link">Discount</Link></li>
                    </ul>
                </div>
                <div className="company">
                    <h5>Company</h5>
                    <ul>
                        <li><Link to={"/about-us"} className="alt-link">About Us</Link></li>
                        <li><Link to={"/contact-us"} className="alt-link">Contact Us</Link></li>
                        <li><Link to={"/affiliates"} className="alt-link">Affiliates</Link></li>
                    </ul>
                </div>
                <div className="support">
                    <h5>Support</h5>
                    <ul>
                        <li><Link to={"/faq"} className="alt-link">FAQs</Link></li>
                        <li><Link to={"/cookie-policy"} className="alt-link">Cookie Policy</Link></li>
                        <li><Link to={"/terms-of-use"} className="alt-link">Terms of Use</Link></li>
                    </ul>
                </div>
                <div className="payment">
                    <h5>Payment Methods</h5>
                    <ul>
                        <li><Link to={"/"} className="alt-link">Mastercard</Link></li>
                        <li><Link to={"/"} className="alt-link">Visa</Link></li>
                        <li><Link to={"/"} className="alt-link">PayPal</Link></li>
                    </ul>
                </div>
            </div>
            <div className="credits">
                <p>Copyright &copy;2023 DBStore. By David Björklund.</p>
            </div>
        </div>
    );
}

export default Footer;