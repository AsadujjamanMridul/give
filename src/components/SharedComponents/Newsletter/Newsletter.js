import React from 'react';
import './Newsletter.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

const Newsletter = () => {
    return (
        <section className='py-5 bg-2 w-100'>
            <div className="row justify-content-center p-5 w-100">
            <div className="col-12 col-md-6 col-sm-12 col-xs-12 py-5">
                <div className="card bg-1 p-3 p-md-4 text-white shadow">
                    <h6 className="my-4 color-4">
                        <span>
                            <FontAwesomeIcon icon={faEnvelopeOpen} className='me-2 fa-lg' />
                        </span> Subscribe to our newsletter </h6>
                    <div className="input-group mb-3 border-white d-flex">
                        <input type="email" className="form-control py-2" id="inp1" placeholder="Enter your email address" />
                        <input className='btn btn-subscribe rounded-end' type="submit" value="Subscribe" />
                    </div>
                </div>
            </div>
        </div>
        </section>

    );
};

export default Newsletter;