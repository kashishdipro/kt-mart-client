import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';

const BrandProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <section className='m-4 h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products?.map(product =><div key={product._id} className="card bg-primary-content md:card-side w-80 shadow-xl">
                        <figure><img className='w-auto md:h-full h-60' src={product.img} alt="Phone" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-neutral">{product.brand} {product.model}</h2>
                            <p>Location: <strong>{product.location}</strong></p>
                            <p>Resale Price: <strong>{product.resale_price}</strong></p>
                            <p>Original Price: <strong>{product.original_price}</strong></p>
                            <p>Years of Use: <strong>{product.using_period}</strong></p>
                            <p>Posted Date: <strong>{product.posted_date}</strong></p>
                            <p>Seller: <strong>{product.seller}</strong> {product.genuine_seller === 'true' && <TiTick className='text-blue-600'/>}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
                
            </div>
        </section>
    );
};

export default BrandProducts;