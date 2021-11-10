import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h2 className="my-5 fw-bold">Our Products</h2>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;