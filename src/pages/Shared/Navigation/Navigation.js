import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container">
                <h2 className="fw-bold header-text-color"><span className='text-warning'>R</span>etro<span className='text-danger'>C</span>ycle</h2>
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
                                <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/explore" activeClassName="selected"
                                    activeStyle={{ color: '#00FFFF' }} >Explore More</NavHashLink>
                            </li>

                            {
                                user.email &&
                                <li className="nav-item">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/dashboard" activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} >Dashboard</NavHashLink>
                                </li>
                            }

                            {!user.email &&
                                <li className="nav-item navLinks">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to="/register" activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }}>Register</NavHashLink>
                                </li>
                            }

                            {
                                user?.email ?
                                    <button className="btn btn-success" onClick={logOut} > <span className="fw-bold text-info">Log Out</span> {user.displayName}</button>
                                    :
                                    <li className="nav-item">
                                        <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to="/login" activeClassName="selected"
                                            activeStyle={{ color: '#00FFFF' }} >Login</NavHashLink>
                                    </li>
                            }
                        </ul>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;