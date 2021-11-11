import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const PlaceOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState({});
    const [placeOrder, setPlaceOrder] = useState({});
    const [orderSuccess, setOrderSuccess] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    // const initialInfo = { name: user.displayName, email: user.email, productName: order.name, price: order.price }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...placeOrder };
        newInfo[field] = value;
        setPlaceOrder(newInfo);
    }

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const orderInfo = {
            name: user.displayName,
            email: user.email,
            productName: order.name,
            price: order.price,
            ...placeOrder
        };
        // send to server
        fetch('http://localhost:5000/userOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    // alert('Order placed Successfully');
                    setOrderSuccess(true);
                    e.target.reset();
                }
            });
    }

    return (
        <div>
            <Navigation></Navigation>
            <h2>This is place order</h2>
            <div className="container mt-5">
                <div className="row g-3 justify-content-md-center">
                    <div className="col-12 col-lg-5">
                        <img className="img-fluid" src={order?.image} alt="" />
                        <h4>Name: {order?.name}</h4>
                        <p><span className="fw-bold">Price:</span> ${order?.price} <br />
                            <span className="fw-bold">Description:</span> {order?.description}</p>
                    </div>
                    <div className="my-auto col-12 col-lg-7">
                        <form onSubmit={handleOrderSubmit} className='mt-3'>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" defaultValue={user?.displayName || ''} name="name" required disabled />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" name="email"
                                        defaultValue={user?.email || ''} required disabled />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Item name :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="orderName"
                                        defaultValue={order?.name || ''} required disabled />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Price :</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="price" defaultValue={order?.price || ''} required disabled />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone :</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="phone" onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Address :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="address" onBlur={handleOnBlur} required />
                                </div>
                            </div>
                            <input type="submit" value="Place order" className="bg-success px-3 py-2 rounded-3 text-white" />
                            {
                                orderSuccess && <div className="alert alert-success mt-3" role="alert">
                                    Place order Successful!
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;