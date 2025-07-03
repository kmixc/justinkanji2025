import React from 'react'
import './About.css'

//components
import LetsChat from '../components/LetsChat'

//assets
import Headshot from '../assets/Headshot.png'
import Django from '../assets/Django.png'
import Pipefy from '../assets/Pipefy.png'
import Portal from '../assets/Portal.png'
import Rackspace from '../assets/Rackspace.png'

export default function About() {
    return (
        <div>
            <div className='about-hero'>
                <div className='about-hero-text'>
                    <p><span>About me,</span> who I am & the story behind the work</p>
                </div>

                <div className='about-hero-description'>
                    <div className='about-hero-image'>
                        <img src={Headshot} alt="Justin-Kanji-Headshot" />
                    </div>
                    <div className='about-hero-description-text'>
                        <p>I’m a multidisciplinary creative and freelance event coordinator who loves bringing ideas to life - on a screen or in real time. I’ve worked on branding projects to live activations, and I’m just as comfortable behind a laptop as I am leading a team on-site.  With a mix of creative energy and project management experience, I thrive in marketing and project roles that need both vision and follow through. </p>
                    </div>
                </div>
            </div>

            <div className='about-work-experience'>
                <p>Past Work Experience</p>
                <div className='about-work-experience-list'>
                    <div className='about-work-experience-item'>
                        <div className='about-work-experience-item-info'>
                            <p>Freelance Event Coordinator</p>
                            <p>SDI Sports & Midnight Circus</p>
                        </div>
                        <div className='about-work-experience-item-date'>
                            <p>2024 - Present</p>
                        </div>
                    </div>

                    <div className='about-work-experience-item'>
                        <div className='about-work-experience-item-info'>
                            <p>Game Presentation/Operations Coordinator - Toronto Maple Leaf’s </p>
                            <p>MLSE (Maple Leaf Sports & Entertainment)</p>
                        </div>
                        <div className='about-work-experience-item-date'>
                            <p>2023 - Present</p>
                        </div>
                    </div>

                    <div className='about-work-experience-item'>
                        <div className='about-work-experience-item-info'>
                            <p>Freelance Designer & Creative Director</p>
                            <p>Self Employed Creative Professional</p>
                        </div>
                        <div className='about-work-experience-item-date'>
                            <p>2023 - Present</p>
                        </div>
                    </div>

                    <div className='about-work-experience-item'>
                        <div className='about-work-experience-item-info'>
                            <p>Baseball/Gameday Operations Team Lead</p>
                            <p>Toronto Blue Jays - Rogers Communications Inc.</p>
                        </div>
                        <div className='about-work-experience-item-date'>
                            <p>2024 - 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-resume-download'>
                <h1>Full resume PDF download?</h1>
                <div className='about-resume-download-list'>
                    <div className='about-resume-download-item'>
                        <img src={Django} alt="" />
                        <p>UIUX & Branding</p>
                        <p>2022</p>
                    </div>
                    <div className='about-resume-download-item'>
                        <img src={Pipefy} alt="" />
                        <p>UIUX & Branding</p>
                        <p>2022</p>
                    </div>
                    <div className='about-resume-download-item'>
                        <img src={Portal} alt="" />
                        <p>UIUX & Branding</p>
                        <p>2022</p>
                    </div>
                    <div className='about-resume-download-item'>
                        <img src={Rackspace} alt="" />
                        <p>UIUX & Branding</p>
                        <p>2022</p>
                    </div>
                </div>
            </div>

            <div className='about-volunteer-work'>
                <p>Volunteer Work & Accomplishments</p>
                <div className='about-volunteer-work-item'>
                    <p className='title'>Canada Basketball U19 Women’s National Basketball Team</p>
                    <p className='date'>July 2023</p>
                </div>
                <div className='about-volunteer-work-item'>
                    <p className='title'>University of Waterloo Women’s Basketball</p>
                    <p className='date'>Sept 2023 - April 2024</p>
                </div>
                <div className='about-volunteer-work-item'>
                    <p className='title'>University of Waterloo First Year Peer Leader</p>
                    <p className='date'>Sept 2023 - April 2024</p>
                </div>
                <div className='about-volunteer-work-item'>
                    <p className='title'>CES 2023, Las Vegas, Nevada</p>
                    <p className='date'>January 2023</p>
                </div>
            </div>

            <LetsChat />
        </div>
    )
}
