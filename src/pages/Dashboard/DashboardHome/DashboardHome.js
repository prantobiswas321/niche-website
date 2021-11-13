import React from 'react';
import admin from '../../../images/admin.png'

const DashboardHome = () => {
    return (
        <div>
            <h2 className="fw-bold my-4">Dashboard</h2>
            <div className="row g-3 justify-content-md-center">
                <div className="col-12 col-lg-5">
                    <img className="img-fluid" src={admin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;