import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const deleteOrder = id => {
        const result = window.confirm('Are You Sure You Want To Delete?');
        if (result) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order Deleted Successfully');
                    const restOrder = allOrders.filter(order => order._id !== id);
                    setAllOrders(restOrder);
                });
        }
        else {
            return;
        }
    }

    return (
        <div className='text-center container mb-5'>
            <h1 className='mt-4'>Manage all orders</h1>
            <div className='container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 row-cols-1 mt-5'>
                {
                    allOrders.map(order =>
                        <div key={order._id} className="col">
                            <div className="card bg-secondary text-white">

                                <div className="card-body">
                                    <h2 className="card-title mb-2">{order?.productName}</h2>
                                    <p className="card-text">Ordered by: {order?.email}</p>
                                    <p className="card-text">Price: ${order?.price}</p>
                                    <h6 className="card-text">Order Status: <b>{order?.status}</b></h6>
                                    <button className='btn btn-success px-3 mt-2 mb-4 me-3'>Update Status</button>
                                    {/* <button className='btn btn-danger px-3 mt-4 ' onClick={() => deleteOrder(order?._id)}>Delete</button> */}
                                    <button onClick={() => deleteOrder(order?._id)} className='btn btn-success px-3 mt-2 mb-4'>Delete Item</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;