import React from 'react';
import { Row, Col, Divider } from 'antd';
import { Avatar } from 'antd';

const ArticleCard = ({detail}) => {
    return (
        <Row className='rounded shadow-sm mx-md-0 mb-4 overflow-hidden bg-4' style={{ minHeight: 200 }}>
            <Col className="gutter-row" xs={24} lg={8}>
                <div className='h-100'>
                    <img src={detail.donatedProduct} alt="" className='w-100 article-card-img' />
                </div>
            </Col>
            <Col className="gutter-row" xs={24} lg={16}>
                <div className='h-100'>

                    <div className='d-flex'>
                        <Avatar src={detail.donorImage} size={45} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} className='m-3 ms-md-4'>U</Avatar>
                        <div className='mt-3'>
                            <p className='m-0 p-0 article-card-donor-name'>{detail.donorName}</p>
                            <small className='m-0 p-0 article-card-donor-desc'>{detail.donorAddress}</small>
                        </div>
                    </div>

                    <Divider className='m-0' />

                    <div className='mx-3 mb-3 m-md-4'>
                        <p className='article-card-donor-desc'>{detail.description}</p>
                    </div>

                </div>
            </Col>
        </Row>
    );
};

export default ArticleCard;