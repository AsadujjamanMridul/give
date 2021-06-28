import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';
import Newsletter from '../SharedComponents/Newsletter/Newsletter';
import ArticleCard from './ArticleCard';
import './ToG.scss'

const ToG = () => {
    return (
        <section>
            <Navbar/>

            <header className='center tog-header'>
                <h2 className='m-0 p-0'>Timeline of Genorosity</h2>
            </header>

            <section className='article-section min-vh-100 bg-4 mx-auto'>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </section>

            <Newsletter/>

            <Footer/>
        </section>
    );
};

export default ToG;