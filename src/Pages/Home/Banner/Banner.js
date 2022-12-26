import React from 'react';
import banner from '../../../img/banner.jpg'

const Banner = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Best Prices, Best Products,</h1>
                    <h1 className="mb-5 text-5xl font-bold">Buy Now!</h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;