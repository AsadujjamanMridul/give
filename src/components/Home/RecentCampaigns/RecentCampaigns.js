import React from 'react';
import './RecentCampaigns.css'

import img5 from '../../../images/13.jpg'
import img6 from '../../../images/11.JPG'
import img7 from '../../../images/14.jpg'

const RecentCampaigns = () => {
    return (
        <div className="bg-dark-blue p-5">
            <div className="container p-md-5">
            <h2 className="recent-camp-title py-3 px-3 px-md-5 mb-5">Recent Campaigns</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card sponsor-card h-100">
                            <img src={img5} className="card-img-top overflow-hidden rounded-top sponsor-card-img" alt="..." />
                            <div className="card-body px-5 pb-5 pt-3">
                                <h5 className="card-title sponsor-card-title">Being Independent!</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repudiandae quis maxime dicta..</p>

                                <button className="btn btn-dark sponsor-card-button px-3 py-2">Read More ...</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card sponsor-card h-100">
                            <img src={img6} className="card-img-top overflow-hidden sponsor-card-img" alt="..." />
                            <div className="card-body px-5 pb-5 pt-3">
                                <h5 className="card-title sponsor-card-title">Mother and child care hospital</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repudiandae quis maxime dicta..</p>

                                <button className="btn btn-dark sponsor-card-button px-3 py-2">Read More ...</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card sponsor-card h-100 bg-white border-none">
                            <img src={img7} className="card-img-top sponsor-card-img" alt="..." />
                            <div className="card-body px-5 pb-5 pt-3">
                                <h5 className="card-title sponsor-card-title">Zakat for Unemployed Muslims</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil porro ipsum dolores laboriosam dolore fuga, repudiandae quis maxime dicta..</p>

                                <button className="btn btn-dark sponsor-card-button px-3 py-2">Read More ...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentCampaigns;