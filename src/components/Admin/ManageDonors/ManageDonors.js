import React, { useState, useEffect } from "react";
import './ManageDonors.scss'

import { Row, Col, Divider, Tooltip, BackTop } from 'antd';
import { message, Collapse, Modal } from 'antd';
import { CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { useForm } from 'react-hook-form';
import axios from 'axios';

const { Panel } = Collapse;
const { confirm } = Modal;

const ManageDonors = () => {

    const showDeleteConfirm = (name, id) => {
        confirm({
            title: <p className='custom-danger-modal'>Are you sure remove <span className='color-1 fw-600'>{name}</span>?</p>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Remove',
            okType: 'danger primary',
            cancelText: 'Cancel',
            onOk() {

                fetch(`https://enigmatic-fortress-83830.herokuapp.com/deleteDonor/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            fetch('https://enigmatic-fortress-83830.herokuapp.com/donors')
                                .then(res => res.json())
                                .then(data => {
                                    setDonors(data);
                                    message.success({
                                        content: 'Donor has been removed successfully!',
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


    // Handle Form Submit

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = newDonorData => {

        newDonorData.photoURL = imageURL;

        const url = "https://enigmatic-fortress-83830.herokuapp.com/addDonor";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDonorData)
        })
            .then(res => {
                if (res) {
                    reloadData();
                    message.success({
                        content: 'Donor has been added successfully!',
                        className: 'message'
                    });
                }
                else {
                    message.error('Something went wrong!');
                }
            });
    };

    const [donors, setDonors] = useState([]);
    let keyCount = 1;

    useEffect(() => {
        reloadData();
    }, [])

    const reloadData = () => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/donors')
            .then(res => res.json())
            .then(data => {
                setDonors(data);
            });
    }

    // Handle Image Upload

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd91d00e850c6752ba23118e0bcc8d162');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div className='w-100'>

            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-5'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Total Donors: {donors.length}</h4>
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
                <Divider orientation='left' className='volunteer-divider color-1'>Add New Donor</Divider>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter name' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="name" type="text" className="form-control admin-input" id="name" placeholder="John Doe" {...register('name')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter age' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="age" type="text" className="form-control admin-input" id="age" placeholder="18" {...register('age')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter email' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="email" type="email" className="form-control admin-input" id="email" placeholder="name@example.com" {...register('email')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter phone number' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="phone" type="tel" className="form-control admin-input" id="phone" placeholder="01712345678" {...register('phone')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter facebook profile url' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="facebook" type="text" className="form-control admin-input" id="facebook" placeholder="https://www.facebook.com/Demo-Account-476428495744561/" {...register('facebook')}></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter your address' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="address" type="text" className="form-control admin-input" id="address" placeholder="Dhaka, Bangladesh" {...register('address')}></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Upload your photo' color='#10375c' placement="bottomLeft">
                                <div className='rounded custom-file-upload'>
                                    <input className="form-control admin-input" type="file" id="formFile" required onChange={(event) => handleImageUpload(event)} />
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} >
                            <div className='rounded d-flex justify-content-end p-0 mb-5'>
                                <input type="submit" className="btn btn-brand mx-md-0 mx-auto" value="Add" />
                            </div>
                        </Col>
                    </Row>

                </form>
            </div>

            <div className='container'>
                <Divider orientation='left' className='volunteer-divider color-1'>Donors</Divider>
                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                    className="site-collapse-custom-collapse custom-collapse"
                    expandIconPosition='right'
                >

                    {
                        donors.map(donor => {

                            const { _id, name, age, email, phone, address, facebook, photoURL } = donor;

                            return (
                                <Panel
                                    header={<span className='fw-600'>{name}</span>}
                                    extra={<p className='m-0 me-3 color-1 my-auto'><FontAwesomeIcon icon={faPhoneAlt} className='me-2 color-2' /> {phone} </p>}
                                    key={keyCount++}
                                    className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">
                                    <img src={photoURL} alt="" className='rounded shadow-sm panel-image mt-3 mb-2' />
                                    <p className='my-1'><span className="fw-600 me-1">Id:</span> {_id}</p>
                                    <p className='my-1'><span className="fw-600 me-1">Age:</span> {age}</p>
                                    <p className='my-1'><span className="fw-600 me-1">Email:</span> {email}</p>
                                    <p className='my-1'><span className="fw-600 me-1">Phone:</span> {phone}</p>
                                    <p className='my-1 mb-2'><span className="fw-600 me-1">Address:</span> {address}</p>
                                    <a href={facebook}>Facebook Profile</a>

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

export default ManageDonors;