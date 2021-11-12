import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])

    const deleteProduct = (id) => {
        const result = window.confirm('Are you sure to delete this product?');
        if (result) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Successfully deleted the product');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                })
        }
    }

    return (
        <div>
            <h2 className='mt-3'>Total Products: {products.length}</h2>
            <div className='text-center container mb-5'>
                <div className='container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 row-cols-1 mt-5'>
                    {
                        products.map(product =>
                            <div key={product._id} className="col">
                                <div className="card bg-secondary text-white">

                                    <div className="card-body">
                                        <h5 className="card-title mb-2">Product Name: {product?.name}</h5>
                                        <p className="card-text">Price: ${product?.price}</p>

                                        <button className='btn btn-danger px-3 mt-2 mb-2 ' onClick={() => deleteProduct(product?._id)}>Delete Product</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;