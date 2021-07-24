import React from 'react';
import './Charity.scss'
import { Row, Col } from 'antd';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Footer from '../../SharedComponents/Footer/Footer';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';
import { Link } from 'react-router-dom';

const Charity = () => {
    return (
        <div>

            <Navbar />

            <Row style={{ height: "90vh" }}>
                <Col xs={24} md={12} className='center charity-card-1'>
                    <Link className='center' to='/donate-cash'>
                        <h2 className='m-0 volunteer-divider'>Donate Cash</h2>
                    </Link>
                </Col>
                <Col xs={24} md={12} className='center charity-card-2'>
                    <Link className='center' to='/custom-donation'>
                        <h2 className='m-0 volunteer-divider'>Custom Donataion</h2>
                    </Link>
                </Col>
                <Col xs={24} md={12} className='center charity-card-3'>
                    <Link className='center' to='/support-campaign'>
                        <h2 className='m-0 volunteer-divider'>Support a Campaign</h2>
                    </Link>
                </Col>
                <Col xs={24} md={12} className='center charity-card-4'>
                    <Link className='center' to='become-volunteer'>
                        <h2 className='m-0 volunteer-divider'>Become a Volunteer</h2>
                    </Link>
                </Col>
            </Row>

            <Newsletter/>

            <Footer />
        </div>
    );
};

export default Charity;