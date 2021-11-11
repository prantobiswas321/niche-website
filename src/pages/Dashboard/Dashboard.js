import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import DashboardHome from './DashboardHome/DashboardHome';
import Payment from './Payment/Payment';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import MakeAdmin from './MakeAdmin/MakeAdmin';
// import { Nav } from 'react-bootstrap';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    return (
        <div>
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
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to={`${url}`} activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} ></NavHashLink>
                                </li>

                                <li className="nav-item navLinks">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none" to={`${url}/myOrders`} activeClassName="selected"
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
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to={`${url}/review`} activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} >Review</NavHashLink>
                                </li>

                                <li className="nav-item">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to={`${url}/payment`} activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} >Payment</NavHashLink>
                                </li>

                                <li className="nav-item">
                                    <NavHashLink style={{ color: 'yellow' }} className="me-3 text-decoration-none navLinks" to={`${url}/makeAdmin`} activeClassName="selected"
                                        activeStyle={{ color: '#00FFFF' }} >Make Admin</NavHashLink>
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

            <h2>This is Dashboard</h2>

            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>

        </div>
    );
};

export default Dashboard;