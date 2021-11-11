import React from 'react';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="my-5 fw-bold">Our Products</h2>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;