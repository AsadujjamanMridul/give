import React from 'react';

import './ProcessPayment.css'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IhELPAWDfvNNrHNCZBaOLlP0aOEI8jMTo1RujkWpuh1wZorAP28b4Qf0cBApFECZUa3CLYMIeR7qd5QmBMfw9WG00rETMN2Vg');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default ProcessPayment;