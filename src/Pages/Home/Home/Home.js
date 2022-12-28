import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductBrands from '../ProductBrands/ProductBrands';

const Home = () => {
    const {data: advertisies = []} = useQuery({
        queryKey: ['advertise'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='m-5'>
            <Banner/>
            {advertisies.length > 0 && <AdvertisedItems/>}
            <ProductBrands/>
        </div>
    );
};

export default Home;