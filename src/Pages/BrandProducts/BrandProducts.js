import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import BookingModal from '../Shared/BookingModal/BookingModal';

const BrandProducts = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);
    return (
        <section className='m-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product =><div key={product._id} className="card w-80 bg-primary-content shadow-xl">
                    <figure><img className='w-full h-60' src={product.img} alt="Phone" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-neutral">{product.brand} {product.model}</h2>
                        <p>Location: <strong>{product.seller_location}</strong></p>
                        <p>Resale Price: <strong>{product.resale_price}</strong></p>
                        <p>Original Price: <strong>{product.original_price}</strong></p>
                        <p>Years of Use: <strong>{product.using_period}</strong></p>
                        <p>Posted Date: <strong>{product.posted_date}</strong></p>
                        <p>Seller: <strong>{product.seller_name}</strong> {product.genuine_seller === 'true' && <TiTick className='text-blue-600'/>}</p>
                        <div className="card-actions">
                            <label htmlFor="booking-modal" className="btn btn-primary" onClick={() =>setProduct(product)}>Book Now</label>
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
        </section>
    );
};

export default BrandProducts;