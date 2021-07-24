import React from 'react';
import './Sponsor.scss'

import children from '../../../images/gallery/g12.jpg'
import volunteer from '../../../images/16.jpg'

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

const Sponsor = () => {
    return (
        <section className="d-flex justify-content-center position-relative bg-5 position-relative pb-5" style={{ minHeight: '50vh' }}>
            <div className="position-absolute top-0 start-50 translate-middle-x"><p className="box-title bg-2 color-1">Join Us</p></div>

            <div className="mt-5 pt-4 container-fluid bg-5">
                <Row
                    className='mt-5 px-4 px-md-5 mb-4 mb-md-0'
                    justify='center'
                >

                    <Col className="gutter-row" xs={24} lg={9}>
                        <div className='bg-2 sponsor-div shadow-sm'>
                            <img src={children} alt="" className='w-100 h-100 sponsor_children' />
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={24} lg={9}>
                        <div className='center bg-4 sponsor-div shadow-sm'>
                            <div className=''>
                                <h2 className='text-center flood-title'>Sponsor a children</h2>
                                <p className='px-5 text-center campaign-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias soluta perferendis, illo facilis tenetur nemo ipsa nobis possimus repudiandae?</p>

                                <Link to='/donate-cash' className='center mt-4'>
                                    <button className="btn btn-brand-bright">Sponsor</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row
                    className='mb-5 px-4 px-md-5'
                    justify='center'
                >

                    <Col className="gutter-row" md={{ order: 2 }} xs={24} lg={9}>
                        <div className='bg-2 sponsor-div shadow-sm'>
                            <img src={volunteer} alt="" className='w-100 h-100 sponsor_children' />
                        </div>
                    </Col>

                    <Col className="gutter-row" md={{ order: 1 }} xs={24} lg={9}>
                        <div className='center bg-4 sponsor-div shadow-sm'>
                            <div className=''>
                                <h2 className='text-center flood-title'>Become a volunteer</h2>
                                <p className='px-5 text-center campaign-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias soluta perferendis, illo facilis tenetur nemo ipsa nobis possimus repudiandae?</p>

                                <Link to='/become-volunteer' className='center mt-4'>
                                    <button className="btn btn-brand-bright">Join Now</button>
                                </Link>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

        </section>
    );
};

export default Sponsor;