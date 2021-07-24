import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Row, Col, message } from 'antd';

import './PhotoGallery.scss'


const PhotoGallery = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/photo-gallery')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])



    // Handle Form Submit

    const { register, handleSubmit} = useForm();

    const [imageURL, setImageURL] = useState(null);
    
    const onSubmit = data => {
        const photoData = {
            src: imageURL,
            width: data.width,
            height: data.height

        };
        const url = "https://enigmatic-fortress-83830.herokuapp.com/addPhoto";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(photoData)
        })
            .then(res => {
                if (res) {
                    message.success({
                        content: 'Photo has been uploaded successfully!',
                        className: 'message'
                    });

                    loadPhotos();
                }
                else {
                    message.error('Something went wrong!');
                }
            });
    };


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


    // Load Photos

    const [totalPhotos, setTotalPhots] = useState(null);
    const loadPhotos = () => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/photo-gallery')
            .then(res => res.json())
            .then(data => {
                setTotalPhots(data.length);
            });
    }
    loadPhotos();

    return (
        <div className='w-100'>

            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-5'
                justify='end'>
                <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                    <div className='rounded px-3'>
                        <h4 className='m-0 side-header'>Total Photos: {totalPhotos}</h4>
                    </div>
                </Col>
            </Row>

            {/* Add new photo */}

            <form onSubmit={handleSubmit(onSubmit)}>

                <Row gutter={[{ xs: 12, sm: 16, md: 24 }, { xs: 12, sm: 16, md: 24 }]}
                    className='mb-4'
                    justify='center'>
                    <Col className="gutter-row" xs={24} sm={12} lg={6} span={6}>
                        <div className='rounded custom-file-upload'>
                            <input className="form-control admin-input" type="file" id="formFile" required onChange={(event) => handleImageUpload(event)} />
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={12} lg={6} span={6}>
                        <div className='rounded p-0'>
                            <input name="width" type="number" min={1} max={4} className="form-control admin-input" id="width" placeholder="Enter Width" {...register('width')} required></input>
                        </div>
                    </Col>

                    <Col className="gutter-row" xs={12} sm={12} lg={6} span={6}>
                        <div className='rounded p-0'>
                            <input name="height" type="number" min={1} max={4} className="form-control admin-input" id="height" placeholder="Enter Height" {...register('height')} required></input>
                        </div>
                    </Col>
                </Row>

                <div className='rounded p-0 center mb-5'>
                    <input type="submit" className="btn btn-brand" value="Upload" />
                </div>

            </form>

            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

export default PhotoGallery;