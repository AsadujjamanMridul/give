import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'

import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let loginButtonToggle;
    if (loggedInUser.name === undefined) {
        loginButtonToggle =
            <Link className="nav-link nav-login-btn" to="/login/new" tabIndex="-1" aria-disabled="true">Login</Link>
    }
    else {
        loginButtonToggle =
            <a className="nav-link userName" href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Sign-Out">{loggedInUser.name}</a>
    }


    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-blue bg-header shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img className="header-logo m-1" src={logo} alt="..." /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link px-4 tog-nav" aria-current="page" href="#">ToG</a>
                            <a className="nav-link px-4" href="#">Campaigns</a>
                            <a className="nav-link px-4" href="#">Charity</a>
                            <a className="nav-link px-4" href="#">Gallery</a>
                            {
                                loginButtonToggle
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;