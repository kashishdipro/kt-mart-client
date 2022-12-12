import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductBrands from '../ProductBrands/ProductBrands';

const Home = () => {
    return (
        <div className='m-5'>
            <Banner/>
            <AdvertisedItems/>
            <ProductBrands/>
        </div>
    );
};

export default Home;