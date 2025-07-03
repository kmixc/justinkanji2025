import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import './Landing.css'
import WorkSlider from '../components/WorkSlider'
import SelectedWork from '../components/SelectedWork'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
    const selectedWorkRef = useRef(null);

    const scrollToSelectedWork = () => {
        if (selectedWorkRef.current) {
            selectedWorkRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>

            <div className="hero-section">
                <div className="hero-text-with-bubbles-wrapper">
                    <div className="hero-text-with-bubbles">
                        <div className="bubbles-container">
                            <span className="bubble bubble1"></span>
                            <span className="bubble bubble2"></span>
                            <span className="bubble bubble3"></span>
                            <span className="bubble bubble4"></span>
                            <span className="bubble bubble5"></span>
                            <span className="bubble bubble6"></span>
                            <span className="bubble bubble7"></span>
                        </div>
                        <h1 className="hero-text">
                            <span className='highlight'>I’m Justin,</span> a creative professional <br />
                            that coordinates experiences that connect.
                        </h1>
                        <button className='see-more-btn' onClick={scrollToSelectedWork}>See More</button>
                    </div>
                </div>
            </div>

            <WorkSlider />

            <section ref={selectedWorkRef} className="about-section">
                <div className="about-left">
                    <h1 className="about-heading">
                        <span className="dark">big ideas,</span>
                        <span className="gray"> sharp execution</span>
                        <span className="dash"> – </span>
                        <span className="gray">all under one roof</span>
                    </h1>
                </div>

                <div className="about-right">
                    <p>I’ve built a path that merges design, storytelling and live experiences. Whether I’m behind the screen crafting or visuals or on-site coordinating events. I bring a mix of creativity, structure, and intention to everything I do. My background as a self-employed designer and event coordinator has given me a unique lens on how ideas come to life - form concept to execution.</p>
                    <p>Scroll down to dive into my story, work and what drives me</p>
                    <Link to="/about" className="about-btn">About Me <FontAwesomeIcon className='arrow' icon={faArrowRight} /></Link>
                </div>
            </section>

            <SelectedWork />

            <section className="cta-section">
                <div className="cta-links">
                    <Link to="/about" className="cta-link">About Me</Link>
                    <Link to="/work" className="cta-link">My Work</Link>
                </div>

                <div className="cta-texts">
                    <p className="cta-main-text">Design is better when it’s collaborative.</p>
                    <p className="cta-sub-text">Let’s team up.</p>
                </div>

                <Link to="/contact" className="cta-btn">Let’s Connect</Link>
            </section>

        </div>
    )
}
