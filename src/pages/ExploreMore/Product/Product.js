import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, price, image, _id } = props.product;
    const url = `/placeOrder/${_id}`;
    return (
        <div>
            <div className="col">
                <div className="card-color text-center">
                    <img src={image} className="card-img-top mx-auto mt-3 w-75 mx-auto mb-2 rounded-3" alt="" />
                    <div className="mt-1">
                        <h5 className="card-title fw-bold">Name: {name}</h5>
                        {/* <h6 className="card-title">Description: {description}</h6> */}
                        <h5 className="card-text">Cost: ${price}</h5>

                        <Link to={url}>
                            <button className="btn btn-success my-3">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;