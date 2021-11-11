import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {

    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password1) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="my-auto col-12 col-lg-6">
                        <h2>Register Your Account!!!</h2>
                        {
                            !isLoading && <form onSubmit={handleLoginSubmit} className='mt-3'>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name :</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" name="name" onBlur={handleOnBlur} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" name="email" onBlur={handleOnBlur} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" name="password" onBlur={handleOnBlur} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Re-type Password :</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" name="password1" onBlur={handleOnBlur} required />
                                    </div>
                                </div>
                                <div className="ms-2 row mb-3">
                                    {/* {error} */}
                                </div>
                                <input type="submit" value="Register" className="bg-success px-3 py-2 rounded-3 text-white" />
                            </form>
                        }

                        {
                            isLoading && <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }

                        {
                            user?.email && <div className="alert alert-success mt-3" role="alert">
                                Successfully Registered!
                            </div>
                        }

                        {
                            authError && <div className="alert alert-danger mt-3" role="alert">
                                {authError}
                            </div>
                        }

                        {/* <h1 className="my-3 textColor fw-bold">or,</h1>

                        <button className="btn btn-danger" >Sign In With Google</button> */}

                        <p className="pt-3 text-dark fw-bold">If you already have An Account? <Link to="/login">Login</Link></p>
                    </div>
                    <div className="my-auto col-12 col-lg-6">
                        <img className='img-fluid' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;