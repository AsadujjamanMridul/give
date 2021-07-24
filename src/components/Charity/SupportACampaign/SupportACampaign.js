import React, { useState } from 'react';
import './SupportACampaign.scss'

import { useForm } from 'react-hook-form';
import { message } from 'antd';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';

import ProcessPayment from '../ProcessPayment/ProcessPayment/ProcessPayment';

const SupportACampaign = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [donationData, setDonationData] = useState({
        name: '',
        phone: '',
        email: '',
        campaign: 'Donation for Flood Affected People',
        amount: '',
        paymentId: '',
        date: new Date().toString('dd/MM/yyyy')
    });

    const handlePayment = paymentId => {

        donationData.paymentId = paymentId;

        const url = `https://enigmatic-fortress-83830.herokuapp.com/addCampaignDonation`;

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donationData)
        })
            .then(res => {
                if (res) {
                    message.success({
                        content: 'Donation has been recorded',
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
    }


    return (
        <div className='w-100 overflow-hidden'>
            <Navbar />

            <div className="row">
                <div className="col-md-6 support-campaign-bg"></div>
                <div className="col-md-6 bg-blue container d-flex justify-content-center align-items-center min-100vh m-0 p-0">
                    <div className="">
                        <form className='login-form' onSubmit={handleSubmit(handlePayment)} >
                            <h4 className="login-title">Support A Campaign</h4>

                            < input className='input' name="name" {...register('name', { required: true })} placeholder="Your Name" onChange={(event) => donationData.name = event.target.value} />
                            {errors.name && <span className='error'>Name is required</span>}

                            < input className='input' type='tel' name="phone" {...register('phone', { required: true })} placeholder="Your Phone Number" onChange={(event) => donationData.phone = event.target.value} />
                            {errors.phone && <span className='error'>Phone number is required</span>}

                            < input className='input' name="email" {...register('email', { required: true })} placeholder="Email" onChange={(event) => donationData.email = event.target.value} />
                            {errors.email && <span className='error'>Email is required</span>}

                            <div className='bg-transparent my-3'>
                                <select className="form-select px-0 bg-transparent input-select"
                                    aria-label="Default select example"
                                    onChange={(event) => donationData.campaign = event.target.value}>
                                    <option value="Donation for Flood Affected People" selected>Donation for Flood Affected People</option>
                                    <option value="Support A Orphan">Support A Orphan</option>
                                </select>
                            </div>

                            < input className='input' type='number' name="amount" {...register('amount', { required: true })} placeholder="Enter Amounts" onChange={(event) => donationData.amount = event.target.value} />
                            {errors.amount && <span className='error'>Amount is required</span>}
                        </form>

                        <div className='px-5'>
                            <ProcessPayment handlePayment={handlePayment} />
                        </div>

                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />

        </div>
    );
};

export default SupportACampaign;