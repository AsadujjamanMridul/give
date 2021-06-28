import React from 'react';
import ActiveCampaign from '../../Home/ActiveCampaign/ActiveCampaign';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';

const Campaigns = () => {
    return (
        <section id='campaigns' className='w-100'>

            <Navbar />

            {/* Active Campaign */}
            <ActiveCampaign />

            <Newsletter />
            <Footer />

        </section>
    );
};

export default Campaigns;