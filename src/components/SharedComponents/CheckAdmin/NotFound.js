import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Newsletter from '../Newsletter/Newsletter';

const NotFound = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-vh-100 center'>
                <h2 className='volunteer-divider'>You do not have permission to access this page</h2>
            </div>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default NotFound;