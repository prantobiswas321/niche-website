import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="header-text-color bg-color">
            <div className="container p-5 d-flex flex-column flex-lg-row justify-content-lg-between bd-highlight">

                <div>
                    <h3 className="fw-bold">RetroCycle</h3>
                    <p>Buy best product & enjoy your every ride. <br /> Best service we provide <br /> with long lasting parts.</p>
                </div>

                <div className="mb-3">
                    <h4 className="fw-bold">Company</h4>
                    <nav className="navbar-nav">
                        <NavLink style={{ textDecoration: 'none', color: '#ADADAD' }} to=''>About us</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#ADADAD' }} to=''>Privacy policy</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#ADADAD' }} to=''>Terms & conditions</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#ADADAD' }} to=''>Customer service</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: '#ADADAD' }} to=''>Return policy</NavLink>
                    </nav>
                </div>

                <div>
                    <h4 className="fw-bold">Contact Us</h4>
                    <div>
                        <p> 350 Avenue, New York, NY 10001<br />
                            info@example.com<br />
                            888-000-999</p>
                        {/* <input type="email" placeholder='Email' name="" id="" /> */}
                        <form className="row g-3">
                            <div className="col-auto">
                                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                                <input type="text" readOnly id="staticEmail2" value="email@example.com" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <hr />

            <footer className="text-center p-1">
                <p><small>Pranto Biswas © 2021. All Rights Reserved.</small></p>
            </footer>
        </div >
    );
};

export default Footer;