import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();


    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Nav */}
            <nav className={`navbar ${isMenuOpen ? 'inverted' : ''}`}>
                <div className="navbar-name">
                    <Link to="/" className="name-link">
                        <span className="first">justin</span><span className="last">kanji.</span>
                    </Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/contact" className="talk-btn">
                        Let’s Talk
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={`burger ${isMenuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Fullscreen Menu */}
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-links">
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="nav-title">Home <span className="nav-index">(01)</span></div>
                        <div className="nav-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="nav-title">About Me <span className="nav-index">(02)</span></div>
                        <div className="nav-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
                    </Link>
                    <Link
                        to="/work"
                        className={`nav-link ${isActive('/work') ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="nav-title">Works <span className="nav-index">(03)</span></div>
                        <div className="nav-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
                    </Link>
                    <Link
                        to="/contact"
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className="nav-title">Contact <span className="nav-index">(04)</span></div>
                        <div className="nav-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
                    </Link>
                </div>

                <div className="divider"></div>

                <div className="nav-socials">
                    <a href="https://instagram.com" className="nav-social">INSTAGRAM <span>→</span></a>
                    <a href="https://behance.net" className="nav-social">BEHANCE <span>→</span></a>
                    <a href="https://linkedin.com" className="nav-social">LINKEDIN <span>→</span></a>
                    <a href="https://x.com" className="nav-social">X <span>→</span></a>
                </div>
            </div>
        </>
    );
};

export default Nav;
