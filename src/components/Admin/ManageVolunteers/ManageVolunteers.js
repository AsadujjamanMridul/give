import React, { useState, useEffect } from "react";
import './ManageVolunteers.scss'

import { Row, Col, Divider } from 'antd';
import { message, Collapse, Modal } from 'antd';
import { CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faPhoneAlt, faTransgender, faVenus } from "@fortawesome/free-solid-svg-icons";

const { Panel } = Collapse;
const { confirm } = Modal;


const ManageVolunteers = () => {

    const showDeleteConfirm = (name, id) => {
        confirm({
            title: <p className='custom-danger-modal'>Are you sure remove <span className='color-1 fw-600'>{name}</span>?</p>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Remove',
            okType: 'danger primary',
            cancelText: 'Cancel',
            onOk() {

                fetch(`https://enigmatic-fortress-83830.herokuapp.com/deleteVolunteer/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            fetch('https://enigmatic-fortress-83830.herokuapp.com/volunteers')
                                .then(res => res.json())
                                .then(data => {
                                    setVolunteers(data);
                                    message.success({
                                        content: 'Member has been deleted successfully!',
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


    const addVolunteer = volunteerDetails => {

        const {name, age, gender, email, phone, facebook} = volunteerDetails;
        const newVolunteer = {name, age, gender, email, phone, facebook};

        const url = "https://enigmatic-fortress-83830.herokuapp.com/addVolunteer";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => {
                if (res) {
                    deleteVolunteerRequest(volunteerDetails._id);
                    reloadScreen();
                    message.success({
                        content: 'Volunteer has been added successfully!',
                        className: 'message'
                    });
                }
                else {
                    message.error('Something went wrong!');
                }
            });
    }


    const deleteVolunteerRequest = id => {
        fetch(`https://enigmatic-fortress-83830.herokuapp.com/deleteVolunteerRequest/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('https://enigmatic-fortress-83830.herokuapp.com/volunteer-requests')
                        .then(res => res.json())
                        .then(data => {
                            setRequested(data);
                            message.success({
                                content: 'Request has been deleted successfully!',
                                className: 'message'
                            });
                        });

                }
            })
    }

    const [requested, setRequested] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    let keyCount = 1;

    useEffect(() => {
        reloadScreen();
    }, [])

    const reloadScreen = () => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/volunteer-requests')
            .then(res => res.json())
            .then(data => {
                setRequested(data);
            });

        fetch('https://enigmatic-fortress-83830.herokuapp.com/volunteers')
            .then(res => res.json())
            .then(data => {
                setVolunteers(data);
            });
    }

    return (
        <div className='w-100'>
            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-2'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Volunteers: {volunteers.length}</h4>
                    </div>
                </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-5'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Requests: {requested.length}</h4>
                    </div>
                </Col>
            </Row>


            <div className='container'>
                <Divider orientation='left' className='volunteer-divider color-1'>Requested</Divider>
                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                    className="site-collapse-custom-collapse custom-collapse"
                    expandIconPosition='right'
                >

                    {
                        requested.map(request => {

                            const { _id, name, age, gender, email, phone, facebook } = request;

                            return (
                                <Panel
                                    header={<span className='fw-600'>{name}</span>}
                                    extra={gender === 'Male' ? <FontAwesomeIcon icon={faMars} className='me-3 color-1' />
                                        : gender === 'Female' ? <FontAwesomeIcon icon={faVenus} className='me-3 color-1' />
                                            : <FontAwesomeIcon icon={faTransgender} className='me-3 color-1' />}
                                    key={keyCount++}
                                    className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">
                                    <p>Id: {_id}</p>
                                    <p>Age: {age}</p>
                                    <p>Email: {email}</p>
                                    <p>Phone: {phone}</p>
                                    <p> <a href={facebook} target='_blank' rel="noreferrer"> Facebook Profile</a></p>

                                    <div className='d-flex justify-content-end'>
                                        <button className="btn btn-brand-borderless py-1 px-3 me-2 fs-1"
                                            onClick={() => deleteVolunteerRequest(_id)}>Delete</button>

                                        <button className="btn btn-brand py-2 px-3 fs-1"
                                            onClick={() => addVolunteer(request)}>Add</button>

                                    </div>
                                </Panel>
                            )
                        })
                    }
                </Collapse>
            </div>



            <div className='container mt-5'>
                <Divider orientation='left' className='volunteer-divider color-1'>Members</Divider>
                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                    className="site-collapse-custom-collapse custom-collapse"
                    expandIconPosition='right'
                >
                    {
                        volunteers.map(volunteer => {

                            const { _id, name, age, gender, email, phone, facebook } = volunteer;

                            return (
                                <Panel
                                    header={<span className='fw-600'>{name}</span>}
                                    extra={<p className='m-0 me-3 color-1'><FontAwesomeIcon icon={faPhoneAlt} className='me-2 color-2' /> {phone} </p>}
                                    key={keyCount++}
                                    className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">
                                    <p>Id: {_id}</p>
                                    <p>Age: {age}</p>
                                    <p>Email: {email}</p>
                                    <p>Phone: {phone}</p>
                                    <p> <a href={facebook} target='_blank' rel="noreferrer"> Facebook Profile</a></p>

                                    <div className='d-flex justify-content-end'>
                                        <button className="btn btn-brand py-2 px-3 fs-1"
                                            onClick={() => showDeleteConfirm(name, _id)}>Remove</button>
                                    </div>
                                </Panel>
                            )
                        })
                    }
                </Collapse>
            </div>
        </div>
    );
};

export default ManageVolunteers;