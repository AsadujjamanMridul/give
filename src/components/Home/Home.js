import React from 'react';
import './Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import RecentCampaigns from '../RecentCampaigns/RecentCampaigns';

const Home = () => {
    return (
        <div>
            <Header />

            {/* Carousel */}
            <section>
                <div id="carouselExampleIndicators" className="carousel slide panda-slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row carousel-1 d-flex align-items-center justify-content-center">
                                <div className="carousel-upper-layer bg-light-dark p-5  col-8 col-sm-8 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="px-2">
                                        <h1 className="text-white">Donate and Be a Super Hero</h1>
                                        <p className="text-white my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde id, nulla sunt doloremque sed atque ut reprehenderit adipisci cum!</p>
                                        <button className="submit-button my-2">Donate Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row carousel-2 d-flex align-items-center justify-content-center">
                                <div className="carousel-upper-layer bg-light-dark p-5  col-8 col-sm-8 col-md-6 d-flex align-items-center justify-content-center">
                                    <div className="px-2">
                                        <h1 className="text-white">Share the Warmth</h1>
                                        <p className="text-white my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam nam eligendi autem numquam culpa porro delectus minima voluptate distinctio!</p>
                                        <button className="submit-button my-2">Donate Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row carousel-3 d-flex align-items-center justify-content-center py-5">
                                <div className="carousel-upper-layer bg-light-dark p-5 col-8 col-sm-8 col-md-6 d-flex align-items-center justify-content-center rounded">
                                    <div className="px-2">
                                        <h1 className="text-white">Let's fight against Corona</h1>
                                        <p className="text-white my-2">Lend a hand to raise Public Awareness and to and take Preventive measures against the Corona Virus</p>
                                        <button className="submit-button my-2">Donate Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </section>

            {/* Take Action section */}

            <section id="take-action" className="d-flex justify-content-center position-relative">
                <div class="position-absolute top-0 start-50 translate-middle-x"><p className="box-title">Take Action</p></div>
                <div className="row container py-5">
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
                        <h3 className="take-action-title">Learn</h3>
                        <h5 className="take-action-description">Get the facts about this issue and how we’re helping.</h5>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
                        <h3 className="take-action-title">Volunteer</h3>
                        <h5 className="take-action-description">Find out about upcoming events that need your help.</h5>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
                        <h3 className="take-action-title">Share</h3>
                        <h5 className="take-action-description">Let your social media networks know about this important cause.</h5>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
                        <h3 className="take-action-title">Donate</h3>
                        <h5 className="take-action-description">Help us raise money to make a big difference with this issue.</h5>
                    </div>

                </div>
            </section>

            {/* Recent Campaigns */}
            <section>
                <RecentCampaigns />
            </section>

            <Footer />
        </div>
    );
};

export default Home;