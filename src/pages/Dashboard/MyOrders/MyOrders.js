import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const deleteOrder = (id) => {
        const result = window.confirm('Are you sure to delete this order?');
        if (result) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Successfully deleted the order');
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);
                })
        }
    }

    return (
        <div>
            <h2 className='mt-5 fw-bold'>My orders: {orders.length}</h2>
            <div className='text-center container mb-5'>
                <div className='container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 row-cols-1 mt-5'>
                    {
                        orders.map(order =>
                            <div key={order._id} className="col">
                                <div className="card bg-back text-white">

                                    <div className="card-body">
                                        <h2 className="card-title mb-2">{order?.productName}</h2>
                                        <p className="card-text">Ordered by: {order?.email}</p>
                                        <p className="card-text">Cost: ${order?.price}</p>
                                        <h6 className="card-text">Order Status: <b>{order?.status}</b></h6>

                                        <button className='btn btn-success px-3 mt-2 mb-4 ' onClick={() => deleteOrder(order?._id)}>Delete Item</button>
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