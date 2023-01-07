import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import ProductCard from './ProductCard';

const BrandProducts = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);
    return (
        <section className='m-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product =><ProductCard
                    key={product._id}
                    product={product}
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
        </section>
    );
};

export default BrandProducts;