import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './LetsChat.css'
import { Link } from 'react-router-dom';

export default function
    () {
    return (
        <div className='lets-chat'>
            <p className='text'>Like what you see? Let's chat!</p>
            <div className='email-wrapper'>
                <Link to='/contact' className='email'><span className='colour'>jfkanji25</span>@gmail.com</Link>
                <Link to="/contact" className='circle'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    )
}
