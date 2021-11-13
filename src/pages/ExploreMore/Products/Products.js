import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-bayou-43093.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
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
                            products.map(product => <Product
                                product={product}
                                key={product._id}
                            ></Product>)
                        }
                    </div>
            }
        </div>
    );
};

export default Products;