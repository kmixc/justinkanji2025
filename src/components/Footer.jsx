import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top-row">
                <div className="footer-name">justinkanji.</div>
                <div className="footer-description">
                    A freelance UX/UI designer and live event coordinator currently based in Toronto.
                </div>
            </div>

            <div className="footer-socials">
                <a href="https://instagram.com" className="footer-social-btn">Instagam</a>
                <a href="https://behance.net" className="footer-social-btn">Behance</a>
                <a href="https://x.com" className="footer-social-btn">X</a>
                <a href="https://linkedin.com" className="footer-social-btn">Linkedin</a>
            </div>

            <div className="footer-bottom-row">
                <div className="footer-navigation">
                    <div className="footer-navigation-title">Navigation</div>
                    <div className="footer-pages">
                        <Link to="/" className="footer-page-link">Home</Link>
                        <Link to="/about" className="footer-page-link">About</Link>
                        <Link to="/work" className="footer-page-link">Work</Link>
                        <Link to="/contact" className="footer-page-link">Contact</Link>
                    </div>
                </div>

                <div className="footer-subscribe">
                    <div className="footer-subscribe-text">Stay connected with me</div>
                    <div className="footer-email-wrapper">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer-email-input"
                            disabled
                        />
                        <button className="footer-email-submit" disabled>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
