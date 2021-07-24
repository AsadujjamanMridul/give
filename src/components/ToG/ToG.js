import React, { useState, useEffect } from "react";
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';
import Newsletter from '../SharedComponents/Newsletter/Newsletter';
import ArticleCard from './ArticleCard';
import './ToG.scss'

import { Row, Col } from 'antd';

const ToG = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-fortress-83830.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    }, [])



    return (
        <section className='bg-5'>
            <Navbar />

            <header className='center tog-header mb-4'>
                <h2 className='m-0 p-0'>Timeline of Genorosity</h2>
            </header>

            <Row gutter={[{ xs: 8, sm: 16, md: 24 }, { xs: 8, sm: 16, md: 24 }]}
                className='mb-5 px-4'
                justify='center'>

                <Col className="gutter-row " xs={24} lg={6} span={6}>
                    <div className='article-card-ad container-fluid mb-3 mb-md-0 rounded bg-3 shadow-sm'>
                        <h2>Ad</h2>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} lg={12}>
                    <section className='article-section min-vh-100 article-card-container'>
                        {
                            posts.map(post => <ArticleCard detail={post}/>)
                        }
                    </section>
                </Col>
                <Col className="gutter-row" xs={24} lg={6} span={6}>
                    <div className='article-card-ad container-fluid rounded bg-3 shadow-sm'>
                        <h2>Ad</h2>
                    </div>
                </Col>
            </Row>

            <Newsletter />
            <Footer />

        </section>
    );
};

export default ToG;