import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <div class="container-fluid pb-0 mb-0 justify-content-center text-light body">


            <div class="row justify-content-center bg-light-green p-5">
                <div class="col-12 col-md-6 col-sm-12 col-xs-12 py-5">
                    <div class="card p-3 p-md-4 text-white">
                        <h6 class="my-4">
                            <span>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='me-2 fa-lg' />
                            </span> Subscribe to our newsletter </h6>
                        <div class="input-group mb-3 border-white d-flex">
                            <input type="email" class="form-control py-2" id="inp1" placeholder="Enter your email address" />
                            <input className='submit-button rounded-end' type="submit" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <footer>
                <div class="row my-5 justify-content-center py-5">
                    <div class="col-11">
                        <div class="row pe-5">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 class="text-muted mb-md-0 mb-5 bold-text h3">Give.</h3>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li className="py-1"><Link className="footer-link" to="/">Home</Link></li>
                                    <li className="py-1">ToG</li>
                                    <li className="py-1">Charity</li>
                                    <li className="py-1">Campaigns</li>
                                    <li className="py-1">About Us</li>
                                </ul>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p class="mb-1">605, RATAN ICON BUILDING</p>
                                <p>SEAWOODS SECTOR</p>
                            </div>
                        </div>
                        <div class="row pe-5">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">

                                <p class="social text-muted mb-0 pb-0 bold-text">
                                    <span class="mx-2">
                                        <FontAwesomeIcon icon={faFacebookF} className='me-3' />
                                    </span>
                                    <span class="mx-2">
                                        <FontAwesomeIcon icon={faLinkedin} className='me-3' />
                                    </span>
                                    <span class="mx-2">
                                        <FontAwesomeIcon icon={faTwitter} className='me-3' />
                                    </span>
                                    <span class="mx-2">
                                        <FontAwesomeIcon icon={faInstagram} className='me-3' />
                                    </span>
                                </p>

                                <small class="rights small"><span>&#174;</span> Team GIVE. All Rights Reserved.</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>Team Give</b></h6><small> <span><i
                                    class="fa fa-envelope small" aria-hidden="true"></i></span> team.give@gmail.com</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted bold-text"><b>Asadujjaman Mridul</b></h6><small><span><i
                                    class="fa fa-envelope small" aria-hidden="true"></i></span> asadujjaman.mridul@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Footer;