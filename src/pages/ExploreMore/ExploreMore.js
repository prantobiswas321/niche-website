import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Products from './Products/Products';

const ExploreMore = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>More cycles</h2>
            <Products></Products>
        </div>
    );
};

export default ExploreMore;