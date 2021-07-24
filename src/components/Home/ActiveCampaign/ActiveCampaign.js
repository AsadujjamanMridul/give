import React from 'react';
import './ActiveCampaign.scss'
import floodAffected from '../../../images/flood.jpg'

import { Progress } from 'antd';
import {Link} from 'react-router-dom';

const ActiveCampaign = () => {
    return (
        <section id="active-campaign" className="d-flex justify-content-center position-relative bg-4 position-relative pb-5"
            style={{ minHeight: "50vh" }}>
            <div className="position-absolute top-0 start-50 translate-middle-x"><p className="box-title bg-1 color-5">Active Campaign</p></div>
            <div className="mt-5">
                <h2 className='flood-title mt-5 mb-0'>Donation for Flood Affected People</h2>
                <p className='container py-2 text-center px-5 px-md-5 campaign-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quam libero ut mollitia? Facilis unde eveniet ut aperiam minima non praesentium voluptates adipisci aliquam maxime animi a doloribus, labore voluptatibus, qui quia molestias commodi recusandae debitis nemo rem consequuntur. Rerum, officiis similique. Beatae magnam optio ullam nobis minima. Temporibus illo rem quas, a veritatis quod optio illum culpa. Porro sit illo magnam. Consectetur error, doloremque adipisci esse eligendi itaque rem.</p>
                <div className="row w-100">
                    <div className="col-lg-6 d-none d-lg-block my-md-5">
                        <div className='w-100 h-100 m-auto d-flex justify-content-center align-items-center'>
                            <img src={floodAffected} alt="" style={{ marginLeft: "8em" }} className='w-100 rounded' />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 pe-lg-4">
                        <div className='mx-5 my-4 m-md-5'>
                            <div className="row mb-4 mb-md-5 mx-5 mx-md-0">
                                <div className="col">
                                    <p className='flood-desc color-1 bg-4 py-2 shadow-sm rounded'>Target: ৳ 1,00,000</p>

                                </div>
                                <div className="col">
                                    <p className='flood-desc color-1 bg-4 py-2 shadow-sm rounded'>Raised: ৳ 70,000</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center align-items-center mb-5'>
                                <Progress
                                    type="circle"
                                    percent={70}
                                    status="active"
                                    strokeColor="#29de92"
                                    trailColor="#BAE8E8"
                                    width={150}
                                    strokeWidth={8} />
                            </div>

                            <Link className='d-flex justify-content-center align-items-center' to='/support-campaign'>
                                <button className="btn btn-dark btn-brand shadow-sm">
                                    Donate Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActiveCampaign;