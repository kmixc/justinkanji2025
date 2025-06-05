import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './SelectedWork.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const projects = [
    {
        id: 1,
        name: 'Cradle',
        description: 'Never Lose Sight. One-of-a-kind built in baby monitor right on your phone.',
        tags: ['UX/UI', 'Branding']
    },
    {
        id: 2,
        name: 'FNTSY',
        description: 'Modern day fantasy app focused on the social aspect of fantasy sports.',
        tags: ['UX/UI', 'Branding']
    },
    {
        id: 3,
        name: 'Chariot',
        description: 'An all-in-one app for those looking to get a premium ride-sharing experience.',
        tags: ['UX/UI', 'Branding']
    },
    {
        id: 4,
        name: 'Flex Inc.',
        description: 'Work-life balance, automated. Your personal assistant for hybrid living.',
        tags: ['UX/UI', 'Branding']
    },
    {
        id: 5,
        name: 'EduNest',
        description: 'Your campus. Your courses. Your way. A new take on UW Learn.',
        tags: ['UX/UI', 'Branding']
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
                <button className="view-all">View All <FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
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
                        <div className="project-placeholder"></div>
                    </div>
                </div>
            ))}
        </section>
    );
}
