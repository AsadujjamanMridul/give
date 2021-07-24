import React, { useState } from 'react';
import './BecomeAVolunteer.scss'

import { useForm } from 'react-hook-form';
import { message } from 'antd';

import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';

const BecomeAVolunteer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.gender = gender;
        console.log(data)

        const url = `https://enigmatic-fortress-83830.herokuapp.com/newVolunteerRequest`;

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    message.success({
                        content: 'Registration Successful',
                        className: 'message',
                        style : {
                            marginTop: '10vh',
                        }
                    });
                }
                else {
                    message.error('Something went wrong!');
                }
            });

    };

    const [gender, setGender] = useState('Male');

    return (
        <div className='w-100 overflow-hidden'>

            <Navbar />
            <div className="row">
                <div className="col-md-6 become-volunteer-bg"></div>
                <div className="col-md-6 bg-blue container d-flex justify-content-center align-items-center min-100vh m-0 p-0">
                    <div className="">
                        <form className='login-form' onSubmit={handleSubmit(onSubmit)} >
                            <h4 className="login-title">Become A Volunteer</h4>

                            < input className='input' name="name" {...register('name', { required: true })} placeholder="Your Name" />
                            {errors.name && <span className='error'>Name is required</span>}

                            <div className='bg-transparent my-3'>
                                <select className="form-select px-1 bg-transparent input-select"
                                    aria-label="Default select example"
                                    onChange={(event) => setGender(event.target.value)}>
                                    <option value="Male" selected>Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            < input className='input' type='number' name="age" {...register('age', { required: true })} placeholder="Your Age" />
                            {errors.age && <span className='error'>Age is required</span>}

                            < input className='input' type='tel' name="phone" {...register('phone', { required: true })} placeholder="Your Phone Number" />
                            {errors.phone && <span className='error'>Phone number is required</span>}

                            < input className='input' name="email" {...register('email', { required: true })} placeholder="Your Email" />
                            {errors.email && <span className='error'>Email is required</span>}

                            < input className='input' name="facebook" {...register('facebook', { required: true })} placeholder="Enter Facebook Account Link" />
                            {errors.facebook && <span className='error'>Facebook Link is required</span>}

                            <input className='submit-button' type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer />

        </div>
    );
};

export default BecomeAVolunteer;