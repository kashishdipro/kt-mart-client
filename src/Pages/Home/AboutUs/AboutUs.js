import React from 'react';
import banner from '../../../img/banner-rebg.png'

const AboutUs = () => {
    return (
        <section>
            <div className="card lg:card-side bg-secondary-content shadow-xl">
                <figure className='w-1/2'><img src={banner} alt="Album"/></figure>
                <div className="card-body w-1/2 my-auto">
                    <h2 className="text-3xl text-center text-neutral font-bold">About Us</h2>
                    <p className='text-center text-neutral'>KT Mart is a platform on which you can buy and sell mobile phone. Every month, hundreds of millions of people use <strong>KT Mart</strong> to find and sell mobiles. To sell used phones quickly, <strong>KT Mart</strong> offers advertise features. At <strong>KT Mart</strong>, we make it so easy to connect people to buy or sell as other classified sites. </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;