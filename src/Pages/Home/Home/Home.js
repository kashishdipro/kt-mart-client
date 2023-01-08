import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductBrands from '../ProductBrands/ProductBrands';

const Home = () => {
    const {data: advertisies = []} = useQuery({
        queryKey: ['advertisies'],
        queryFn: async() =>{
            const res = await fetch('https://kt-mart-server.vercel.app/advertisies');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='m-5'>
            <Banner/>
            {advertisies.length > 0 && <AdvertisedItems/>}
            <ProductBrands/>
            <AboutUs/>
        </div>
    );
};

export default Home;