import React, { useEffect, useState } from 'react';
import Ratings from './Ratings/Ratings';
import './UserReview.css';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="mb-5">
            <h2 className='mt-3 fw-bold'>Customer Feedback</h2>
            <div className='text-center container mb-5'>
                <div className='container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 row-cols-1 mt-4'>
                    {
                        reviews.map(review =>
                            <div key={review._id} className="col">
                                <div className="card bg-back text-white">

                                    <div className="card-body">
                                        <h4 className="card-title mb-2">Name: {review?.displayName}</h4>
                                        <p className="card-text"><span className="fw-bold">Comment:</span> {review?.comment}</p>
                                        <h6 className="card-text">Rating<Ratings rating={review.rating}></Ratings></h6>

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

export default UserReview;