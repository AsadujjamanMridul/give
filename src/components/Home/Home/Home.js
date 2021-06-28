import React from 'react';
import './Home.css'
import Footer from '../../SharedComponents/Footer/Footer'
import RecentCampaigns from '../RecentCampaigns/RecentCampaigns';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Header from '../Header/Header';
import TakeActionSection from '../TakeActionSection/TakeActionSection';
import ActiveCampaign from '../ActiveCampaign/ActiveCampaign';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';

const Home = () => {

    return (
        <div>
            <Navbar />

            {/* Header Carousel */}
            <Header />

            {/* Take Action section */}
            <TakeActionSection />

            {/* Recent Campaigns */}
            <RecentCampaigns />

            {/* Active Campaign */}
            <ActiveCampaign/>

            <Newsletter/>

            <Footer />
        </div>
    );
};

export default Home;