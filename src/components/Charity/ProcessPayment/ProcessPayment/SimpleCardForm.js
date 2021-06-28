import React, { useState } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom";

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(false);
        } else {
            setPaymentSuccess(true);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style : {
                        base : {
                            color : '#ffffff',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontSize: 10,
                            '::placeholder' : {
                                color : '#A1A8B7'
                            }
                        }
                    }
                }
                } 
                className='mt-2 my-3 input pb-3 text-white'/>
            {
                paymentError &&
                <p className='payment-error-msg text-danger py-2'>{paymentError}</p>
            }
            {
                paymentSuccess &&
                <p className='payment-error-msg color-2 py-2'>Your Payment has been recorded</p>
            }
            <button type="submit" disabled={!stripe} className='btn submit-button my-3 w-100'>
                Donate
            </button>
        </form>
    );
};

export default SimpleCardForm;