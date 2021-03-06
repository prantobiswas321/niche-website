import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const DashboardNav = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container">
                <h2 className="fw-bold header-text-color">Dashboard</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto fs-4 fw-bold navbar-nav">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/home" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Home</NavHashLink>
                            </li>

                            <li className="nav-item navLinks">
                                <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/myOrders" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >My orders</NavHashLink>
                            </li>

                            {/* {!user.email &&
                                <li className="nav-item navLinks">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/register" activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }}>Register</NavHashLink>
                                </li>
                            } */}

                            {/* <li className="nav-item">
                                <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/login" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Login</NavHashLink>
                            </li> */}

                            {/* {user.email &&
                                <li className="nav-item">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/myOrders" activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} >My orders</NavHashLink>
                                </li>
                            } */}

                            {/* {user.email &&
                                <li className="nav-item">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/manageOrders" activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} >Manage orders</NavHashLink>
                                </li>
                            } */}

                            <li className="nav-item">
                                <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/review" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Review</NavHashLink>
                            </li>

                            <li className="nav-item">
                                <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/payment" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Payment</NavHashLink>
                            </li>

                            {
                                // user?.email ?
                                <button className="btn btn-success" onClick={logOut} > <span className="fw-bold text-info">Log Out</span> {user.displayName}</button>
                                // :
                                // <li className="nav-item">
                                //     <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/login" activeClassName="selected"
                                //         activeStyle={{ color: '#00FFFF' }} >Login</NavHashLink>
                                // </li>
                            }
                        </ul>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNav;