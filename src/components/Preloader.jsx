import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = () => {
    const preloaderRef = useRef(null);
    const leftTextRef = useRef(null); // for "justin"
    const rightTextRef = useRef(null); // for "kanji"

    useEffect(() => {
        const preloader = preloaderRef.current;
        const leftText = leftTextRef.current;
        const rightText = rightTextRef.current;

        const leftWord = "justin";
        const rightWord = "kanji";

        const tl = gsap.timeline();

        tl.set(preloader, { y: '0%', opacity: 1 });

        // Typing animation for "justin"
        for (let i = 1; i <= leftWord.length; i++) {
            tl.call(() => {
                leftText.textContent = leftWord.slice(0, i);
            }, null, "+=0.15");
        }

        // Typing animation for "kanji"
        for (let i = 1; i <= rightWord.length; i++) {
            tl.call(() => {
                rightText.textContent = rightWord.slice(0, i);
            }, null, "+=0.15");
        }

        tl.to({}, { duration: 0.5 });

        // Swipe up and remove preloader
        tl.to(preloader, {
            y: '-100%',
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                preloader.style.display = 'none';
            }
        });
    }, []);

    return (
        <div ref={preloaderRef} className="preloader">
            <div className="preloader-content" style={{ fontSize: '3rem', fontWeight: 'bold', display: 'flex' }}>
                <p style={{ margin: 0, display: 'flex', gap: '4px' }}>
                    <span ref={leftTextRef} style={{ color: '#333333' }}></span>
                    <span ref={rightTextRef} style={{ color: '#999999' }}></span>
                    <span className="blinking-cursor">|</span>
                </p>
            </div>
        </div>
    );
};


export default Preloader;