import React from 'react';
import banner from "../../../assets/Banner/FOL-Book-Sale-Web-Banner.png"

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:w-full rounded-lg shadow-2xl " alt='' />
            </div>
        </div>
    );
};

export default Banner;