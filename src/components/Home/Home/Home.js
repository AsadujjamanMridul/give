import React from 'react';
import './Home.css'
import Footer from '../../SharedComponents/Footer/Footer'
import RecentCampaigns from '../RecentCampaigns/RecentCampaigns';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Header from '../Header/Header';
import TakeActionSection from '../TakeActionSection/TakeActionSection';
import ActiveCampaign from '../ActiveCampaign/ActiveCampaign';
import Newsletter from '../../SharedComponents/Newsletter/Newsletter';
import RecentArticles from '../RecentArticles/RecentArticles';
import Sponsor from '../Sponsor/Sponsor';

import { BackTop } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    return (
        <div>
            <Navbar />

            {/* Header Carousel */}
            <Header />

            {/* Take Action section */}
            <TakeActionSection />

            <BackTop>
                <div className='container-fluid shadow-sm center rounded-circle'
                    style={{
                        height: 40, 
                        width: 40,
                        backgroundColor: 'rgba(42,222,146, .2)',
                        border: 'none'
                    }}>
                    <FontAwesomeIcon icon={faChevronUp} size={'md'} className='color-1' />
                </div>
            </BackTop>

            <RecentArticles />

            <Sponsor />

            {/* Active Campaign */}
            <ActiveCampaign />

            <Newsletter />

            <Footer />
        </div>
    );
};

export default Home;