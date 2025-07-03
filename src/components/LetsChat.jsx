import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './LetsChat.css'

export default function
    () {
    return (
        <div className='lets-chat'>
            <p className='text'>Like what you see? Let's chat!</p>
            <div className='email-wrapper'>
                <p className='email'><span className='colour'>jfkanji25</span>@gmail.com</p>
                <div className='circle'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}
