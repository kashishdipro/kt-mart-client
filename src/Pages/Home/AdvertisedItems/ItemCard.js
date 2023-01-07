import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { TiTick } from 'react-icons/ti';
import { AuthContext } from '../../../contexts/AuthProvider';

const ItemCard = ({advertise, idx, setProduct}) => {
    const {user} = useContext(AuthContext);
    const {data: seller = []} = useQuery({
        queryKey: ['seller'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/users/seller/${advertise?.seller_email}`);
            const data = await res.json();
            return data;
        }
    })
    const {data: currentUser = []} = useQuery({
        queryKey:['user', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div key={advertise._id} id={`item${idx+1}`} className="carousel-item w-full">
            <div className="card lg:card-side bg-primary-content shadow-xl w-full">
                <figure><img className='w-full lg:w-96 h-60 lg:h-full' src={advertise.img} alt=""/></figure>
                <div className="card-body">
                    <h2 className="card-title text-neutral">{advertise.brand} {advertise.model}</h2>
                    <p>Location: <strong>{advertise.seller_location}</strong></p>
                    <p>Resale Price: <strong>{advertise.resale_price}</strong></p>
                    <p>Original Price: <strong>{advertise.original_price}</strong></p>
                    <p>Years of Use: <strong>{advertise.using_period}</strong></p>
                    <p>Posted Date: <strong>{advertise.posted_date}</strong></p>
                    <p className='flex items-center gap-1'>Seller: <strong>{advertise.seller_name}</strong> {seller?.user?.genuine_seller && <TiTick className='text-blue-600'/>}</p>
                    {currentUser?.role !== 'seller' && currentUser?.role !== 'admin' && <div className="card-actions">
                        <label htmlFor="booking-modal" className="btn btn-primary" onClick={() =>setProduct(advertise)}>Book Now</label>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ItemCard;