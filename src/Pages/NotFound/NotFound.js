import React from 'react';
import nf from '../../img/404-error.png'

const NotFound = () => {
    return (
        <section className='h-screen'>
            <img className='mx-auto w-48' src={nf} alt="" />
            <p className='text-5xl font-bold text-center text-primary mb-2'>Oops!</p>
            <p className='text-xl font-semibold text-center text-primary'>404 | This page could not be found.</p>
        </section>
    );
};

export default NotFound;