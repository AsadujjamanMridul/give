import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App'
import './Dashboard.scss'

import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';

import { Row, Col, Divider, Collapse, Tooltip, Modal, message } from 'antd'
import { EditOutlined, CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';

const { Panel } = Collapse;
const { confirm } = Modal;

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userDonationData, setUserDonationData] = useState([]);
    const [isDonor, setIsDonor] = useState([]);

    useEffect(() => {
        fetch(`https://enigmatic-fortress-83830.herokuapp.com/userSpecificData?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setUserDonationData(data);
            });

        fetch(`https://enigmatic-fortress-83830.herokuapp.com/isDonor?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsDonor(result);
                }
            })
    }, [loggedInUser.email])


    const showDeleteConfirm = (id) => {
        confirm({
            title: <p className='custom-danger-modal'>Are you sure to remove this post?</p>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Remove',
            okType: 'danger primary',
            cancelText: 'Cancel',
            onOk() {

                fetch(`https://enigmatic-fortress-83830.herokuapp.com/deletePost/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            fetch('https://enigmatic-fortress-83830.herokuapp.com/posts')
                                .then(res => res.json())
                                .then(data => {
                                    setUserDonationData(data);
                                    message.success({
                                        content: 'Post has been removed successfully!',
                                        className: 'message'
                                    });
                                });
                        }
                    })
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }

    let keyCount = 0;

    return (
        <div className='' style={{ backgroundColor: '#C8EFE1' }}>
            <Navbar />

            <div className='container'>
                <div className='my-5 mx-3 mx-md-0'>
                    <Divider orientation='left' className='color-1 volunteer-divider'>
                        User Dashboard
                    </Divider>
                    <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                        className=''
                        justify='center'>
                        <Col className="gutter-row rounded-3 bg-2 pt-4 shadow-sm" xs={24} sm={12} lg={12} span={6}>

                            <div className='d-flex align-items-center dashboard-profile-header mb-4'>
                                <img src={isDonor[0] ? isDonor[0].photoURL : loggedInUser.imageURL} alt="" className='dashboard-user-img shadow-sm' />
                                <div className=''>
                                    <h2 className='dashboard-user-name color-1'>Name: <span>{isDonor[0] ? isDonor[0].name : loggedInUser.name}</span></h2>
                                    <h2 className='dashboard-user-email'>Email: <span>{loggedInUser.email}</span></h2>
                                    {
                                        userDonationData[0] ?
                                            <h2 className='dashboard-user-email'>Donor Id: <span className='fw-600'>{userDonationData[0].donorId}</span></h2> : ""
                                    }
                                </div>
                                <div className='ms-auto'>
                                    {
                                        userDonationData[0] ?
                                            <Tooltip title="Contact admins to update" color='#10375c' placement="bottomRight" className='color-1'>
                                                <a href="mailto:team.give@gmail.com?subject=Updating Give Donor Profile">
                                                    <EditOutlined className='color-1 dashboard-edit-icon' />
                                                </a>
                                            </Tooltip> : ""
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                        className=''
                        justify='center'>
                        <Col className="gutter-row rounded-3 my-2" xs={24} sm={12} lg={12} span={6}>
                            <Divider orientation='right' className='color-1 dashboard-divider'>
                                Total Donation: {userDonationData.length > 0 ? userDonationData.length : 0}
                            </Divider>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                        className=''
                        justify='center'>
                        <Col className="gutter-row rounded-3 my-2" xs={24} sm={12} lg={12} span={6}>
                            <Collapse
                                bordered={false}
                                expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                                className="site-collapse-custom-collapse custom-collapse bg-4"
                                expandIconPosition='right'
                            >

                                {
                                    userDonationData.map(donationDetail => {

                                        const { _id, donorId, description, donatedProduct, datePosted, donorImage, donorName, donorEmail, donorAddress } = donationDetail;

                                        return (
                                            <Panel
                                                header={<p className='m-0'>Post Id: <span className='ms-2 fw-600'>{_id}</span></p>}
                                                key={keyCount++}
                                                className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">


                                                <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                                                    className='my-2 mb-3'
                                                    justify='center'>
                                                    <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                                                        <div className='rounded mx-1'>
                                                            <img src={donatedProduct} alt="" className='w-100 rounded shadow-sm' />
                                                        </div>
                                                    </Col>
                                                    <Col className="gutter-row position-relative" xs={24} sm={12} lg={18} span={6}>
                                                        <div className='pb-5'>
                                                            <p className='my-1'><span className="fw-600 me-1">Description:</span> {description}</p>
                                                            <p className='my-1 mb-2'><span className="fw-600 me-1">Date Posted:</span> {datePosted}</p>
                                                        </div>
                                                        <div className='d-flex justify-content-end position-absolute bottom-0 end-0 pe-4'>
                                                            <button className="btn btn-brand py-2 px-3 fs-1"
                                                                onClick={() => showDeleteConfirm(_id)}>Delete</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                        )
                                    })
                                }
                            </Collapse>
                        </Col>
                    </Row>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default Dashboard;