import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard';

const ProductBrands = () => {
    const [brandNames, setBrandNames] = useState([]);
    useEffect(() =>{
        fetch('https://kt-mart-server.vercel.app/brands')
        .then(res => res.json())
        .then(data => setBrandNames(data))
    },[])
    return (
        <section className='my-4'>
            <h2 className='text-3xl font-bold text-neutral text-center'>Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                {
                    brandNames.map(brand =><BrandCard
                    key={brand._id}
                    brand={brand}
                    ></BrandCard>)
                }
            </div>
        </section>
    );
};

export default ProductBrands;