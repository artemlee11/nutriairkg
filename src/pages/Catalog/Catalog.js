import React, { useState } from 'react';
import Smoke1 from '../../img/smoke1.png';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Post from '../../components/Post/Post';
import './Catalog.css';
const Catalog = () => {
    return (
        <div className='catalog'>
            <h1 className='about-title'>Каталог</h1>
            <img className='smoke-main' src={Smoke1} alt="" />
            <div className='catalog-container'>
                <div className='catalog-cards'>
                    <Post />
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
};

export default Catalog;