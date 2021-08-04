import React, { useState, useEffect } from "react";
import './DonationRequests.scss'

import { Row, Col, Divider, BackTop } from 'antd';
import { message, Collapse, Modal } from 'antd';
import { CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faHandHoldingHeart, faMars, faPhoneAlt, faStream, faTransgender, faVenus } from "@fortawesome/free-solid-svg-icons";

const { Panel } = Collapse;
const { confirm } = Modal;


const DonationRequests = () => {

    let keyCount = 1;
    const [requests, setRequests] = useState([]);

    const deleteDonationRequest = id => {
        fetch(`https://enigmatic-fortress-83830.herokuapp.com/deleteDonationRequest/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('https://enigmatic-fortress-83830.herokuapp.com/donationRequest')
                        .then(res => res.json())
                        .then(data => {
                            setRequests(data);
                            message.success({
                                content: 'Deleted successfully!',
                                className: 'message'
                            });
                        });

                }
            })
    }

    const showDeleteConfirm = (name, id) => {
        confirm({
            title: <p className='custom-danger-modal'>Are you sure remove <span className='color-1 fw-600'>{name}</span>'s request?</p>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Remove',
            okType: 'danger primary',
            cancelText: 'Cancel',
            onOk() {
                deleteDonationRequest(id);
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }

    useEffect(() => {
        reloadScreen();
    }, [])

    const reloadScreen = () => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/donationRequest')
            .then(res => res.json())
            .then(data => {
                setRequests(data);
            });
    }

    return (
        <div className='w-100'>
            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-2'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Requests: {requests.length}</h4>
                    </div>
                </Col>
            </Row>

            <BackTop>
                <div className='container-fluid shadow-sm center rounded-circle'
                    style={{
                        height: 40, 
                        width: 40,
                        backgroundColor: 'rgba(42,222,146, .2)',
                        border: 'none'
                    }}>
                    <FontAwesomeIcon icon={faChevronUp} size={'md'} className='color-1' />
                </div>
            </BackTop>

            <div className='container'>
                <Divider orientation='left' className='volunteer-divider color-1'>Donation Requested</Divider>
                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                    className="site-collapse-custom-collapse custom-collapse"
                    expandIconPosition='right'
                >

                    {
                        requests.map(request => {

                            const { _id, name, email, phone, category, donationInfo, sampleImage } = request;

                            return (
                                <Panel
                                    header={<span className='fw-600'>{name}</span>}
                                    extra={<p className='m-0 me-3 color-1'><FontAwesomeIcon icon={faHandHoldingHeart} className='me-2 color-1' /> {category} </p>}
                                    key={keyCount++}
                                    className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">


                                    <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                                        className='my-2 mb-3'
                                        justify='center'>
                                        <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                                            <div className='rounded mx-3'>
                                                <img src={sampleImage} alt="" className='w-100 rounded shadow-sm' />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row position-relative" xs={24} sm={12} lg={18} span={6}>
                                            <div className=''>
                                                <p className='my-1'><span className="fw-600 me-1">Id:</span> {_id}</p>
                                                <p className='my-1'><span className="fw-600 me-1">Email:</span> {email}</p>
                                                <p className='my-1'><span className="fw-600 me-1">Phone:</span> {phone}</p>
                                                <p className='my-1 mb-2'><span className="fw-600 me-1">Message:</span> {donationInfo}</p>
                                            </div>
                                            <div className='d-flex justify-content-end position-absolute bottom-0 end-0 pe-4'>
                                                <button className="btn btn-brand py-2 px-3 fs-1"
                                                    onClick={() => showDeleteConfirm(name, _id)}>Delete</button>
                                            </div>
                                        </Col>
                                    </Row>



                                </Panel>
                            )
                        })
                    }
                </Collapse>
            </div>
        </div>
    );
};

export default DonationRequests;