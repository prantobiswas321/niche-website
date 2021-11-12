import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [addSuccess, setAddSuccess] = useState(false);

    const onSubmit = data => {

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    setAddSuccess(true);
                    reset();
                }
            })
    }
    return (
        <div className='add-service mt-5 mb-5'>
            <h1 className='mb-5'>Please add a place</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input {...register("image")} placeholder='Image url' />
                <textarea {...register("description")} placeholder='Description' />
                {/* <input type="submit" /> */}
                <button className='btn btn-success'>Submit</button>
                {
                    addSuccess && <div className="alert alert-success mt-3" role="alert">
                        Product added Successfully!
                    </div>
                }
            </form>

        </div>
    );
};

export default AddProduct;