import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App'
import logo from '../../../images/logo.png'
import './Navbar.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [navbar, setNavbar] = useState(false);

    let loginButtonToggle;
    if (loggedInUser.name === undefined) {
        loginButtonToggle =
            <Link className="nav-link nav-login-btn px-4 text-center" to="/login/new" tabIndex="-1">Login</Link>
    }
    else {
        loginButtonToggle =
        <div className='d-flex mx-auto'>
        <div>
            <img src={loggedInUser.imageURL} alt="..." className='img-fluid rounded-circle loggedIn-img ms-md-4 mt-2 mt-md-0' />
        </div>
    </div>
    }

    const changeNavbar = () => {

    }

    window.addEventListener('scroll', changeNavbar);


    return (
        <nav className="navbar navbar-expand-lg bg-1 navbar-dark shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className="header-logo m-1" src={logo} alt="..." /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav my-md-0 my-3">
                        <Link className="nav-link tog-nav px-2 text-center  my-md-0" to="/tog">ToG</Link>
                        <Link className="nav-link px-2 text-center my-md-0" to="/campaigns">Campaigns</Link>
                        <Link className="nav-link px-2 text-center mx-auto  my-md-0" to="/charity">Charity</Link>
                        <Link className="nav-link px-2 text-center  my-md-0" to="/gallery">Gallery</Link>
                        {
                            loginButtonToggle
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;