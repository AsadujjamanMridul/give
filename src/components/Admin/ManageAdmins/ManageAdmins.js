import React, { useState, useEffect } from "react";
import './ManageAdmins.scss'

import { Row, Col, Divider, Tooltip } from 'antd';
import { message, Collapse, Modal } from 'antd';
import { CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { useForm } from 'react-hook-form';

const { Panel } = Collapse;
const { confirm } = Modal;


const ManageAdmins = () => {

    const showDeleteConfirm = (name, id) => {
        confirm({
            title: <p className='custom-danger-modal'>Are you sure remove <span className='color-1 fw-600'>{name}</span>?</p>,
            icon: <ExclamationCircleOutlined />,
            okText: 'Remove',
            okType: 'danger primary',
            cancelText: 'Cancel',
            onOk() {

                fetch(`https://enigmatic-fortress-83830.herokuapp.com/deleteAdmin/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            fetch('https://enigmatic-fortress-83830.herokuapp.com/admins')
                                .then(res => res.json())
                                .then(data => {
                                    setAdmins(data);
                                    message.success({
                                        content: 'Admin has been removed successfully!',
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


    const onSubmit = newAdminData => {

        const url = "https://enigmatic-fortress-83830.herokuapp.com/addAdmin";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdminData)
        })
            .then(res => {
                if (res) {
                    reloadData();
                    message.success({
                        content: 'Admin has been added successfully!',
                        className: 'message'
                    });
                }
                else {
                    message.error('Something went wrong!');
                }
            });
    };

    const [admins, setAdmins] = useState([]);
    let keyCount = 1;

    useEffect(() => {
        reloadData();
    }, [])

    const reloadData = () => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => {
                setAdmins(data);
            });
    }


    return (
        <div className='w-100'>

            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-5'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Admins: {admins.length}</h4>
                    </div>
                </Col>
            </Row>

            <div className='container'>
                <Divider orientation='left' className='volunteer-divider color-1'>Add New Admin</Divider>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter name' color='#10375c' placement="bottomLeft">
                                <div className='rounded custom-file-upload'>
                                    <input name="name" type="text" className="form-control admin-input" id="name" placeholder="John Doe" {...register('name')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter email' color='#10375c' placement="bottomLeft">
                                <div className='rounded custom-file-upload'>
                                    <input name="email" type="email" className="form-control admin-input" id="email" placeholder="name@example.com" {...register('email')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter password' color='#10375c' placement="bottomLeft">
                                <div className='rounded custom-file-upload'>
                                    <input name="password" type="password" min={1} max={4} className="form-control admin-input" id="width" placeholder="123456" {...register('password')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter phone number' color='#10375c' placement="bottomLeft">
                                <div className='rounded custom-file-upload'>
                                    <input name="phone" type="tel" className="form-control admin-input" id="width" placeholder="01712345678" {...register('phone')} required></input>
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
                <Divider orientation='left' className='volunteer-divider color-1'>Admins</Divider>
                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                    className="site-collapse-custom-collapse custom-collapse"
                    expandIconPosition='right'
                >

                    {
                        admins.map(admin => {

                            const { _id, name, email, password, phone } = admin;

                            return (
                                <Panel
                                    header={<span className='fw-600'>{name}</span>}
                                    extra={<p className='m-0 me-3 color-1'><FontAwesomeIcon icon={faPhoneAlt} className='me-2 color-2' /> {phone} </p>}
                                    key={keyCount++}
                                    className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">
                                    <p>Id: {_id}</p>
                                    <p>Email: {email}</p>
                                    <p>Phone: {phone}</p>

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

export default ManageAdmins;