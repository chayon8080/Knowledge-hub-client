import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Sell</Link>
                    <Link to="/" className="link link-hover">Buy</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                </div>
            </div>
            <div className='text-center'>
                <p>Copyright © 2022 - All right reserved by Knowledge Hub</p>
            </div>
        </footer>
    );
};

export default Footer;