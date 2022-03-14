import React from 'react';
import Smoke1 from '../../img/smoke1.png';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import { Link, } from 'react-router-dom';
import './About.css';
const About = () => {
    return (
        <div className='about'>
            <h1 className='about-title'>О нас</h1>
            <img className='smoke-main' src={Smoke1} alt="" />
            <div className='contacts-card'>
                <div className='about-descr'>
                <p>Nutriаir — современное портативное устройство ингаляции, революционная, безопасная и 
                    эффективная система доставки витаминов и активных веществ в организм человека через 
                    испарение, посредством вдыхания пара.
                    </p>
                    <p>
                    Nutriair — индивидуальный электронный ингалятор для активного и здорового образа жизни.
                    Без никотина и табака. Только здоровый пар. Только органические ингредиенты. Сделано в США.
                    Nutriair произведен в лаборатории, аккредитованной FDA США.
                    </p>
                    <p>
                    Nutri Аir создал американец Джош Мацкин. Именно он стоит у истоков создания индустрии 
                    витаминных ингаляторов. Всю жизнь Джош был спортсменом и здоровый образ жизни всегда был 
                    очень важен для него. Джош придумал Nutriair потому что общепринятые принципы здорового и 
                    активного образа жизни имели большой недостаток: слишком большое потребление энергетических 
                    напитков и синтетических витаминов. Он хотел заряжаться чистой энергией и настоящими витаминами, 
                    которые можно легко получить, без тяжелых последствий для организма. Тогда Джош объединил свои 
                    усилия со специалистом по органической химии, и вместе они придумали Nutriair — первый в 
                    мире функциональный витаминный ингалятор!
                    </p>
                    Миссия компании — создать образ жизни, в котором вы сможете безопасно контролировать свое 
                    самочувствие, и с Nutriair это становится возможным.
                </div>
            </div>
            <FAQ />
            <div className='contacts-container'>
            <div className='contacts-card-text'>
                    <p>Эксклюзивный представитель<br></br>"Nutriair" в Бишкеке</p>
                    <p>Instagram: @nutriairkg<br></br>TikTok: @nutriairkg</p>
                    <p>W/P,Telegram: +996 (500) 79-79-93<br></br>Email: nutriairkg@gmail.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;