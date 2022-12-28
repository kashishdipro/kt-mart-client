import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import BookingModal from '../../Shared/BookingModal/BookingModal';

const AdvertisedItems = () => {
    const [product, setProduct] = useState(null);
    const {data: advertisies = []} = useQuery({
        queryKey: ['advertisies'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/advertisies');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='my-4'>
            <div className="carousel w-full">
                {
                    advertisies.map((advertise, idx) =><div key={advertise._id} id={`item${idx+1}`} className="carousel-item w-full">
                        <div className="card lg:card-side bg-primary-content shadow-xl w-full">
                            <figure><img className='w-full lg:w-96 h-60 lg:h-full' src={advertise.img} alt=""/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-neutral">{advertise.brand} {advertise.model}</h2>
                                <p>Location: <strong>{advertise.seller_location}</strong></p>
                                <p>Resale Price: <strong>{advertise.resale_price}</strong></p>
                                <p>Original Price: <strong>{advertise.original_price}</strong></p>
                                <p>Years of Use: <strong>{advertise.using_period}</strong></p>
                                <p>Posted Date: <strong>{advertise.posted_date}</strong></p>
                                <p>Seller: <strong>{advertise.seller_name}</strong> {advertise.genuine_seller === 'true' && <TiTick className='text-blue-600'/>}</p>
                                <div className="card-actions">
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={() =>setProduct(advertise)}>Book Now</label>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div> 
            {   product &&
                <BookingModal
                product={product}
                setProduct={setProduct}
                />
            }
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    advertisies.map((advertise, idx) =><a key={advertise._id} href={`#item${idx+1}`} className="btn btn-xs">{idx+1}</a>)
                }
            </div>
        </section>
    );
};

export default AdvertisedItems;