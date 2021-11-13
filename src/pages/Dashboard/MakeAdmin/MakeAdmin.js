import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.preventDefault();
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminSuccess(true);
                }
                // console.log(data);
            })
        e.preventDefault();
    }
    return (
        <div className="mb-5 py-5">
            <h2 className="mt-5 fw-bold">Make admin</h2>
            <form onSubmit={handleAdminSubmit} className="mt-5 container mb-5 p">
                <div className="input-group mb-3 mx-auto w-50">
                    <input className="form-control"
                        placeholder="User Email"
                        type="email"
                        onBlur={handleOnBlur}
                    />
                    <button className="btn btn-success" type="submit" id="button-addon2">Submit</button>
                </div>
                {
                    adminSuccess && <div className="alert alert-success mt-5 mx-auto w-50" role="alert">
                        MAde Admin Successfully!
                    </div>
                }
            </form>
        </div>
    );
};

export default MakeAdmin;