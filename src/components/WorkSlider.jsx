import React from 'react';
import Marquee from 'react-fast-marquee';
import './WorkSlider.css';

const WorkSlider = () => {

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
                        <div className="marquee-box">Project {index + 1}</div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default WorkSlider;