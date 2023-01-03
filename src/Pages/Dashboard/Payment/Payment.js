import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    const {brand, model, resale_price} = data;
    return (
        <section className='m-4'>
            <h2 className='text-2xl text-neutral font-semibold'>Payment for {brand} {model}</h2>
            <p className='text-xl text-neutral my-4'>Please pay <strong className='text-neutral'>BDT {resale_price}</strong></p>     
            <div className='w-80 my-2'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data}/>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;