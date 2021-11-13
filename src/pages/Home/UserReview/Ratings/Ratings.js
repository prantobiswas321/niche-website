import React from 'react';
import "./Ratings.css";
import ReactStars from "react-rating-stars-component";

const Ratings = (props) => {

    const stars = {
        size: 20,
        value: parseInt(props.rating),
        edit: false
    };

    return (
        <div className="rating">
            <ReactStars {...stars} />
        </div >
    );
};

export default Ratings;



