import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { Divider } from 'antd';


import Newsletter from '../SharedComponents/Newsletter/Newsletter';
import Navbar from '../SharedComponents/Navbar/Navbar';
import Footer from '../SharedComponents/Footer/Footer';
import './GalleryView.scss'

const GalleryView = () => {

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
        fetch('http://localhost:5000/photo-gallery')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])

    return (
        <div>
            <Navbar />


            {/* Gallery Section */}
            <section className='bg-4 py-5 w-100'>
                <Divider className='custom-divider'><span className='color-2'>Give</span> at a glance</Divider>
                <div className='py-5 container'>
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
            </section>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default GalleryView;