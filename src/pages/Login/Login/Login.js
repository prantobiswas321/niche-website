import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="my-auto col-12 col-lg-6">
                    <h2>Login Your Account!!!</h2>
                    <form onSubmit="" className='mt-3'>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" onBlur="" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" onBlur="" required />
                            </div>
                        </div>
                        <div className="ms-2 row mb-3">
                            {/* {error} */}
                        </div>
                        <input type="submit" value="Login" className="bg-success px-3 py-2 rounded-3 text-white" />
                    </form>
                    <h1 className="my-3 textColor fw-bold">or you can,</h1>

                    <button onClick="" className="btn btn-danger" >Sign In With Google</button>

                    <p className="pt-3 text-dark fw-bold">New to RetroCycle!! <Link to="/register">Create an account</Link></p>
                </div>
                <div className="my-auto col-12 col-lg-6">
                    <img className='img-fluid' src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;