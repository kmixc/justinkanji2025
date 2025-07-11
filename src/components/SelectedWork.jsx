import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './SelectedWork.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//Images
import FNTSY from '../assets/fntsy-project.png';
import Cradle from '../assets/cradle-project.png';
import Chariot from '../assets/chariot-project.png';
import FlexInc from '../assets/flexinc-project.png';
import EduNest from '../assets/edunest-project.png';
import { Link } from 'react-router-dom';


const projects = [
    {
        id: 1,
        name: 'Cradle',
        description: 'Never Lose Sight. One-of-a-kind built in baby monitor right on your phone.',
        tags: ['UX/UI', 'Branding'],
        image: Cradle
    },
    {
        id: 2,
        name: 'FNTSY',
        description: 'Modern day fantasy app focused on the social aspect of fantasy sports.',
        tags: ['UX/UI', 'Branding'],
        image: FNTSY
    },
    {
        id: 3,
        name: 'Chariot',
        description: 'An all-in-one app for those looking to get a premium ride-sharing experience.',
        tags: ['UX/UI', 'Branding'],
        image: Chariot
    },
    {
        id: 4,
        name: 'Flex Inc.',
        description: 'Work-life balance, automated. Your personal assistant for hybrid living.',
        tags: ['UX/UI', 'Branding'],
        image: FlexInc
    },
    {
        id: 5,
        name: 'EduNest',
        description: 'Your campus. Your courses. Your way. A new take on UW Learn.',
        tags: ['UX/UI', 'Branding'],
        image: EduNest
    }
];

export default function SelectedWork() {
    const [openId, setOpenId] = useState(null);
    const previewRefs = useRef([]);

    useEffect(() => {
        previewRefs.current.forEach((el, index) => {
            if (!el) return;
            if (projects[index].id === openId) {
                gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' });
            } else {
                gsap.to(el, { autoAlpha: 0, y: -20, duration: 0.3, ease: 'power2.in' });
            }
        });
    }, [openId]);

    const toggleProject = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="selected-work-section">
            <div className="selected-work-header">
                <h2>Selected Work</h2>
                <Link to="/work" className="view-all">View All <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`project ${openId === project.id ? 'open' : ''}`}
                    onClick={() => toggleProject(project.id)}
                >
                    <div className="project-header">
                        <div className="project-info">
                            <div className="project-name">{project.name}</div>
                            <div className="project-description">{project.description}</div>
                        </div>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div
                        className="project-preview"
                        ref={(el) => (previewRefs.current[index] = el)}
                    >
                        <img className="project-image" src={project.image} alt={project.name} />
                    </div>
                </div>
            ))}
        </section>
    );
}
