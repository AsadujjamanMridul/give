import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <section>
            <div id="carouselExampleIndicators" className="carousel slide panda-slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row carousel-1 d-flex align-items-center justify-content-center">
                            <div className="carousel-upper-layer bg-light-dark p-5  col-8 col-sm-8 col-md-6 d-flex align-items-center justify-content-center rounded">
                                <div className="px-2">
                                    <h1 className="text-white header-title">Donate and Be a Super Hero</h1>
                                    <p className="text-white my-2 header-desc text-md-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde id, nulla sunt doloremque sed atque ut reprehenderit adipisci cum!</p>
                                    <Link to='/donate-cash' className='d-flex justify-content-center align-items-center'>
                                        <button className="btn mt-md-4 mb-md-3 my-3 btn-brand-bright shadow">Donate Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row carousel-2 d-flex align-items-center justify-content-center">
                            <div className="carousel-upper-layer bg-light-dark p-5  col-8 col-sm-8 col-md-6 d-flex align-items-center justify-content-center rounded">
                                <div className="px-2">
                                    <h1 className="text-white header-title">Share the Warmth</h1>
                                    <p className="text-white my-2 header-desc text-md-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam nam eligendi autem numquam culpa porro delectus minima voluptate distinctio!</p>
                                    <Link to='/donate-cash' className='d-flex justify-content-center align-items-center'>
                                        <button className="btn mt-md-4 mb-md-3 my-3 btn-brand-bright shadow">Donate Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row carousel-3 d-flex align-items-center justify-content-center">
                            <div className="carousel-upper-layer bg-light-dark p-5  col-8 col-sm-8 col-md-6 d-flex align-items-center justify-content-center rounded">
                                <div className="px-2">
                                    <h1 className="text-white header-title">Let's fight against Corona</h1>
                                    <p className="text-white my-2 header-desc text-md-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit id ipsam earum dicta, corporis eos laboriosam placeat, sapiente illo nulla quasi assumenda in recusandae magnam adipisci. Neque quia repudiandae et.</p>
                                    <Link to='/donate-cash' className='d-flex justify-content-center align-items-center'>
                                        <button className="btn mt-md-4 mb-md-3 my-3 btn-brand-bright shadow">Donate Now</button>
                                    </Link>
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
    );
};

export default Header;