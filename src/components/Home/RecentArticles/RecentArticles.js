import React from 'react';
import './RecentArticles.scss'

import { Row, Col } from 'antd';

import img5 from '../../../images/13.jpg'
import img6 from '../../../images/11.JPG'
import img7 from '../../../images/14.jpg'
import img8 from '../../../images/15.jpg'


const RecentArticles = () => {
    return (
        <section className="d-flex justify-content-center position-relative bg-1 position-relative pb-5" style={{ minHeight: '50vh' }}>
            <div className="position-absolute top-0 start-50 translate-middle-x"><p className="box-title bg-4 color-1">Recent Articles</p></div>
            <div className="mt-5 container-fluid">
                <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                    className='my-5 py-3 px-2 px-md-5'
                    justify='center'
                >

                    <Col className="gutter-row" xs={12} lg={6}>
                        <div className="card rounded sponsor-card h-100 overflow-hidden">
                            <img src={img5} className="overflow-hidden rounded-top sponsor-card-img" alt="..." />
                            <div className="card-body bg-4 rounded-bottom px-4 pt-3">
                                <h5 className="card-title sponsor-card-title color-1">Being Independent!</h5>
                                <p className="card-text text-secondary pt-2 sponsor-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repud iandae quis maxime dicta..</p>
                            </div>
                            <div className='bg-4 pt-3 pb-4 d-flex justify-content-end px-4'>
                                <button className="btn btn-dark btn-brand px-3 py-2">Read More</button>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} lg={6}>
                        <div className="card rounded sponsor-card h-100 overflow-hidden">
                            <img src={img6} className="overflow-hidden rounded-top sponsor-card-img" alt="..." />
                            <div className="card-body bg-4 rounded-bottom px-4pt-3">
                                <h5 className="card-title sponsor-card-title color-1">Mother and child care hospital</h5>
                                <p className="card-text text-secondary pt-2 sponsor-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repud iandae quis maxime dicta..</p>
                            </div>
                            <div className='bg-4 pt-3 pb-4 d-flex justify-content-end px-4'>
                                <button className="btn btn-dark btn-brand px-3 py-2">Read More</button>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} lg={6}>
                        <div className="card rounded sponsor-card h-100 overflow-hidden">
                            <img src={img7} className="overflow-hidden rounded-top sponsor-card-img" alt="..." />
                            <div className="card-body bg-4 rounded-bottom px-4 pt-3">
                                <h5 className="card-title sponsor-card-title color-1">Zakat for Unemployed Muslims</h5>
                                <p className="card-text text-secondary pt-2 sponsor-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repud iandae quis maxime dicta..</p>
                            </div>
                            <div className='bg-4 pt-3 pb-4 d-flex justify-content-end px-4'>
                                <button className="btn btn-dark btn-brand px-3 py-2">Read More</button>
                            </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} lg={6}>
                        <div className="card rounded sponsor-card h-100 overflow-hidden">
                            <img src={img8} className="overflow-hidden rounded-top sponsor-card-img" alt="..." />
                            <div className="card-body bg-4 rounded-bottom px-4 pt-3">
                                <h5 className="card-title sponsor-card-title color-1">Volunteers lead sanitation survey across Bangladesh</h5>
                                <p className="card-text text-secondary pt-2 sponsor-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repud iandae quis maxime dicta..</p>
                            </div>
                            <div className='bg-4 pt-3 pb-4 d-flex justify-content-end px-4'>
                                <button className="btn btn-dark btn-brand px-3 py-2">Read More</button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </section>
    );
};

export default RecentArticles;