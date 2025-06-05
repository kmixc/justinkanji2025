import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = () => {
    const transitionRef = useRef(null);
    const blockRefs = useRef([]);
    const logoRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const transition = transitionRef.current;
        const blocks = blockRefs.current;
        const logo = logoRef.current;

        // GSAP animation for the page transition
        const tl = gsap.timeline();
        tl.set(transition, { display: 'block' })
            .set(blocks, { y: '100%' }) // ensure they start off-screen at the bottom
            .to(blocks, {
                y: '0%', // animate into view from the bottom
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1,
            })
            .fromTo(
                logo,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.4'
            )
            .to(blocks, {
                y: '-100%', // animate out upwards
                duration: 0.5,
                ease: 'power2.in',
                stagger: 0.1,
                delay: 0.5,
            })
            .to(logo, { opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=0.5')
            .set(transition, { display: 'none' });


        return () => {
            tl.kill();
        };
    }, [location]);

    return (
        <div ref={transitionRef} className="page-transition">
            <div ref={el => blockRefs.current[0] = el} className="transition-block block1"></div>
            <div className="logo-container">
                <p className="transition-logo" ref={logoRef}><span className='first'>justin</span><span className='last'>kanji</span></p>
            </div>
        </div>
    );
};

export default PageTransition;