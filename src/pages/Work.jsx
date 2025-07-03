import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Work.css'

import FNTSY from '../assets/fntsy-project.png';
import Cradle from '../assets/cradle-project.png';

export default function Work() {
    return (
        <div className='work-hero'>
            <div>
                <p>My Work</p>
                <p>What I've been <span>working on</span> so far.</p>
            </div>
            <div className='work-projects'>
                <div className='work-project-item'>
                    <Link to="/projects/fntsy" className='work-project-item-link'>
                        <img src={FNTSY} alt="" />
                    </Link>
                    <div className='work-project-item-info'>
                        <div className='work-project-item-info-title'>
                            <p>FNTSY</p>
                            <p>UX/UI</p>
                        </div>
                        <div className='work-project-item-info-description'>
                            <p>Modern day fantasy app focused on the social aspect of fantasy sports.</p>
                        </div>
                        <Link to="/projects/fntsy" className='work-project-item-info-arrow'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
                <div className='work-project-item'>
                    <Link to="/projects/cradle" className='work-project-item-link'>
                        <img src={Cradle} alt="" />
                    </Link>
                    <div className='work-project-item-info'>
                        <div className='work-project-item-info-title'>
                            <p>Cradle</p>
                            <p>UX/UI</p>
                        </div>
                        <div className='work-project-item-info-description'>
                            <p>Never Lose Sight. one-of-a-kind built in baby monitor right on your phone.</p>
                        </div>
                        <Link to="/projects/cradle" className='work-project-item-info-arrow'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
