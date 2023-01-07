import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import ItemCard from './ItemCard';

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
            <h2 className='text-3xl font-bold text-neutral text-center mb-4'>Advertised Items</h2>
            <div className="carousel w-full">
                {
                    advertisies.map((advertise, idx) =><ItemCard
                    key={advertise._id}
                    idx={idx}
                    advertise={advertise}
                    setProduct={setProduct}
                    />)
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