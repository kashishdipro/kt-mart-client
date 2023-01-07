import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { TiTick } from 'react-icons/ti';
import { AuthContext } from '../../contexts/AuthProvider';

const ProductCard = ({product, setProduct}) => {
    const {user} = useContext(AuthContext);
    const {data: seller = []} = useQuery({
        queryKey: ['seller'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/users/seller/${product?.seller_email}`);
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
        <>
            {product.status !== 'paid' &&
                <div key={product._id} className="card w-80 bg-primary-content shadow-xl">
                    <figure><img className='w-full h-60' src={product.img} alt="Phone" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-neutral">{product.brand} {product.model}</h2>
                        <p>Location: <strong>{product.seller_location}</strong></p>
                        <p>Resale Price: <strong>{product.resale_price}</strong></p>
                        <p>Original Price: <strong>{product.original_price}</strong></p>
                        <p>Years of Use: <strong>{product.using_period}</strong></p>
                        <p>Posted Date: <strong>{product.posted_date}</strong></p>
                        <p className='flex items-center gap-1'>Seller: <strong>{product.seller_name}</strong> {seller?.user?.genuine_seller && <TiTick className='text-blue-600'/>}</p>
                        {currentUser?.role !== 'seller' && currentUser?.role !== 'admin' && <div className="card-actions">
                            <label htmlFor="booking-modal" className="btn btn-primary" onClick={() =>setProduct(product)}>Book Now</label>
                        </div>}
                    </div>
                </div>
            }
        </>
        
    );
};

export default ProductCard;