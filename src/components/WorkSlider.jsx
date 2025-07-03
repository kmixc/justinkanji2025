import React from 'react';
import Marquee from 'react-fast-marquee';
import './WorkSlider.css';

//images
import FNTSY from '../assets/fntsy-project.png';
import Cradle from '../assets/cradle-project.png';

const WorkSlider = () => {
    const images = [FNTSY, Cradle]; // Add more images here if you have more!


    return (
        <div className="work-marquee">
            <Marquee
                gradient={false}
                speed={200}
                pauseOnHover={false}
                loop={0}
            >
                {[...Array(10)].map((_, index) => (
                    <div className="marquee-item" key={index}>
                        <img src={images[index % images.length]} alt={`Project ${index + 1}`} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default WorkSlider;