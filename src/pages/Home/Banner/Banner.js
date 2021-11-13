import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import pic1 from '../../../images/pic1.jpg';
import pic2 from '../../../images/pic2.jpg';
import pic3 from '../../../images/pic3.jpg';


const Banner = () => {
    return (
        <div className="img-height">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Make your ride with our cycle</h3>
                        <p>A ride often involving a series of stops and ending at the starting point</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Quality at our core</h3>
                        <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Memorable experiences</h3>
                        <p>Browse and buy cycles and activities so incredible, you’ll want to tell your friends.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;