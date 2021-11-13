import { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import review from '../../../images/review1.png';
import './Review.css';

const Review = () => {
    const { user } = useAuth();
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const ratingRef = useRef();
    const reviewRef = useRef();

    const addReview = e => {
        const review = {
            displayName: user.displayName,
            email: user.email,
            rating: ratingRef.current.value,
            comment: reviewRef.current.value
        };
        fetch('https://limitless-bayou-43093.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setReviewSuccess(true);
                e.target.reset();
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="my-4 fw-bold">Give Your Feedback</h2>
            <div className="container mt-5 mb-4 pb-4">
                <div className="row g-3 justify-content-md-center">
                    <div className="col-12 col-lg-5">
                        <img className="img-fluid" src={review} alt="" />
                    </div>
                    <div className="my-auto col-12 col-lg-7">
                        <form onSubmit={addReview} className='mt-3'>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Name :</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" defaultValue={user?.displayName || ''} name="name" required disabled />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Email :</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" name="email"
                                        defaultValue={user?.email || ''} required disabled />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Rating: </label>
                                <div className="col-sm-10">
                                    <input type="number" min="0" max="5" className="form-control" ref={ratingRef} name="rating" required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Comment :</label>
                                <div className="col-sm-10">
                                    <textarea className="w-100" ref={reviewRef}></textarea>
                                </div>
                            </div>
                            <input type="submit" value="Submit" className="bg-success px-3 py-2 rounded-3 text-white" />
                            {
                                reviewSuccess && <div className="alert alert-success mt-3" role="alert">
                                    Review added Successfully!
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;