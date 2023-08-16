import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App'
import logo from '../../../images/logo.png'
import './Navbar.scss'

import { Popover } from 'antd'


const Navbar = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDonor, setIsDonor] = useState([]);

    useEffect(() => {
        fetch(`https://give-server.vercel.app/isAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsAdmin(true);
                }
            })

        fetch(`https://give-server.vercel.app/isDonor?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsDonor(result);
                }
            })
    }, [loggedInUser.email])

    const clearUser = () => {
        setLoggedInUser({});
        localStorage.setItem('loggedInUser', JSON.stringify({}));
    }

    let loginButtonToggle;
    if (loggedInUser.name === undefined) {
        loginButtonToggle =
            <Link className="nav-link nav-login-btn px-4 text-center" to="/login/existing" tabIndex="-1">Login</Link>
    }
    else {
        loginButtonToggle =
            <div className='d-flex mx-auto'>
                <Popover
                    overlayInnerStyle={{
                        borderRadius: '.5em'
                    }}
                    placement="bottom"
                    color={'#E3F6F5'}
                    content={
                        <div className='d-block'>
                            {
                                isAdmin ?
                                    <Link to='/admin' className='btn btn-brand sign-out-btn me-3'>Admin</Link> :
                                    <Link to='/dashboard' className='btn btn-brand sign-out-btn me-3'>Dashboard</Link>
                            }

                            <button className='btn btn-brand-borderless sign-out-btn' onClick={() => clearUser()}>Sign Out</button>
                        </div>
                    }
                    trigger={'click'}
                >
                    <img src={isDonor[0] ? isDonor[0].photoURL : loggedInUser.imageURL } alt="..." className='img-fluid rounded-circle loggedIn-img ms-md-4 mt-2 mt-md-0' />
                </Popover>
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