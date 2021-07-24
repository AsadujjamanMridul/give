import React, { useState } from 'react';
import './CustomDonation.scss'

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { message } from 'antd';

import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';

const CustomDonation = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const [category, setCategory] = useState('clothes');
    const [donationInfo, setDonationInfo] = useState('');

    const onSubmit = data => {
        data.category = category;
        data.donationInfo = donationInfo;
        data.sampleImage = imageURL;

        const url = "https://enigmatic-fortress-83830.herokuapp.com/newDonationRequest";

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
                        content: 'Request has been recorded',
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

        console.log(data)
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd91d00e850c6752ba23118e0bcc8d162');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(imageURL);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='w-100 overflow-hidden'>
            <Navbar />

            <div className="row">
                <div className="col-md-6 custom-donation-bg"></div>
                <div className="col-md-6 bg-blue container d-flex justify-content-center align-items-center min-100vh m-0 p-0">
                    <div className=" py-5">
                        <form className='login-form' onSubmit={handleSubmit(onSubmit)} >
                            <h4 className="login-title">Custom Donation</h4>

                            < input className='input' name="name" {...register('name', { required: true })} placeholder="Your Name" />
                            {errors.name && <span className='error'>Name is required</span>}

                            < input className='input' type='tel' name="phone" {...register('phone', { required: true })} placeholder="Your Phone Number" />
                            {errors.phone && <span className='error'>Phone number is required</span>}

                            < input className='input' name="email" {...register('email', { required: true })} placeholder="Email" />
                            {errors.email && <span className='error'>Email is required</span>}

                            <div className='bg-transparent mt-5 pb-4 mb-1'>
                                <p className='label pb-0 mb-1'>Select a category</p>
                                <select id='select-category'
                                    defaultValue='clothes'
                                    className="form-select px-0 pt-0 mt-0 bg-transparent input-select"
                                    aria-label="Default select example"
                                    placeholder='Select a Category'
                                    onChange={(event) => setCategory(event.target.value)}>
                                    <option value="clothes">Clothes</option>
                                    <option value="food">Food</option>
                                    <option value="accessories">Accessories</option>
                                    <option value="educational materials">Educational Material</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <p className='label pb-0 mb-1'>What exactly do you want to donate?</p>
                            <input className='w-100 input px-0 mt-0 mb-4' type='text' name="donation-item" id="donation-item" placeholder='Your Message'
                                onChange={(event) => setDonationInfo(event.target.value)}></input>

                            <p className='label pb-0 mt-1'>Upload a sample picture</p>
                            <div className='rounded custom-file-upload mt-2 pt-0'>
                                <input className="form-control file-input mt-0 pt-0" type="file" id="formFile" required onChange={(event) => handleImageUpload(event)} />
                            </div>

                            <input className='submit-button' type="submit" value="Request for Donation" />
                        </form>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default CustomDonation;