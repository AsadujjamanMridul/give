import React, { useState, useEffect } from "react";
import './TogPost.scss'

import { Row, Col, Divider, Tooltip } from 'antd';
import { message, Collapse, Modal } from 'antd';
import { CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { useForm } from 'react-hook-form';
import axios from 'axios';

const { Panel } = Collapse;
const { confirm } = Modal;

const TogPost = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [posts, setPosts] = useState([]);
    const [donorData, setDonorData] = useState({});

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
                                    setPosts(data);
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

    const onSubmit = postDetails => {

        postDetails.donatedProduct = imageURL;
        postDetails.datePosted = new Date().toString('dd/MM/yyyy')
        const donorId = postDetails.donorId;

        fetch(`https://enigmatic-fortress-83830.herokuapp.com/getDonorData/${donorId}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setDonorData(data[0]);
                    addPost(postDetails, data[0]);
                }
                else {
                    message.error('Something went wrong!');
                }
            });
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = () => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    }

    const addPost = (newPost, forcedData) => {

        newPost.donorImage = forcedData.photoURL;
        newPost.donorName = forcedData.name;
        newPost.donorAddress = forcedData.address;
        newPost.datePosted = new Date().toUTCString();
        newPost.donorEmail = forcedData.email;

        const url = "https://enigmatic-fortress-83830.herokuapp.com/addPost";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => {
                if (res) {
                    message.success({
                        content: 'Post has been added successfully!',
                        className: 'message'
                    });
                    fetchPosts();
                }
                else {
                    message.error('Something went wrong!');
                }
            });
    }



    // Handle Image Upload

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd91d00e850c6752ba23118e0bcc8d162');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                message.success({
                    content: 'Image has been uploaded successfully!',
                    className: 'message'
                });
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    let keyCount = 0;

    return (
        <div className='w-100'>
            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-5'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Total Posts: {posts.length}</h4>
                    </div>
                </Col>
            </Row>

            <div className='container'>
                <Divider orientation='left' className='volunteer-divider color-1'>Add New Post</Divider>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title="Enter donor's id" color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <input name="donorId" type="text" className="form-control admin-input" id="name" placeholder="60acdc9a909948823936b048" {...register('donorId')} required></input>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Enter description' color='#10375c' placement="bottomLeft">
                                <div className='rounded'>
                                    <textarea name="description" type="text" className="form-control admin-input" id="age" placeholder="lorem ipsum" {...register('description')} required></textarea>
                                </div>
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                        className='mb-3'
                        justify='center'>
                        <Col className="gutter-row" xs={24} lg={12} span={6}>
                            <Tooltip title='Donated product' color='#10375c' placement="bottomLeft">
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
                                <input type="submit" className="btn btn-brand mx-md-0 mx-auto" value="Post" />
                            </div>
                        </Col>
                    </Row>

                </form>
            </div>

            <div className='container'>
                <Divider orientation='left' className='volunteer-divider color-1'>Posts</Divider>
                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
                    className="site-collapse-custom-collapse custom-collapse"
                    expandIconPosition='right'
                >

                    {
                        posts.map(post => {

                            const { _id, donorId, donatedProduct, description, donorName, donorAddress, datePosted } = post;

                            return (
                                <Panel
                                    header={<p>Post Id: <span className='ms-2 fw-600'>{_id}</span></p>}
                                    key={keyCount++}
                                    className="rounded shadow-sm bg-4 site-collapse-custom-panel custom-panel">


                                    <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                                        className='my-2 mb-3'
                                        justify='center'>
                                        <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                                            <div className='rounded mx-3'>
                                                <img src={donatedProduct} alt="" className='w-100 rounded shadow-sm' />
                                            </div>
                                        </Col>
                                        <Col className="gutter-row position-relative" xs={24} sm={12} lg={18} span={6}>
                                            <div className='pb-5'>
                                                <p className='my-1'><span className="fw-600 me-1">Donor's Name:</span> {donorName}</p>
                                                <p className='my-1'><span className="fw-600 me-1">Donor's Id:</span> {donorId}</p>
                                                <p className='my-1'><span className="fw-600 me-1">Donor's Address:</span> {donorAddress}</p>
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
            </div>

        </div>
    );
};

export default TogPost;