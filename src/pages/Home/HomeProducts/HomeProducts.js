import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const cycles = products.slice(0, 6)

    return (
        <div className="container">
            {
                !products ? <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">
                        {
                            cycles.map(cycle => <HomeProduct
                                cycle={cycle}
                                key={cycle._id}
                            ></HomeProduct>)
                        }
                    </div>
            }
        </div>
    );
};

export default HomeProducts;