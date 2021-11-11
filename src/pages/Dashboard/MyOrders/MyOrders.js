import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>My orders: {orders.length}</h2>
            <div className='text-center container mb-5'>
                <div className='container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 row-cols-1 mt-5'>
                    {
                        orders.map(order =>
                            <div className="col">
                                <div className="card bg-secondary text-white">

                                    <div className="card-body">
                                        <h2 className="card-title mb-2">Product Name: {order?.productName}</h2>
                                        <p className="card-text">Ordered by: {order?.email}</p>
                                        <p className="card-text">Cost: {order?.price}</p>
                                        {/* <h6 className="card-text">Order Status: <b>{order?.orderStatus}</b></h6> */}

                                        <button className='btn btn-success px-3 mt-2 mb-4 ' onClick="">Delete</button>
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

export default MyOrders;