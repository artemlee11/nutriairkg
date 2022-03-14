import React, { useRef, useState } from 'react';
import Diet from '../../img/diet_image.png';
import Smoke1 from '../../img/smoke1.png';
import FAQ from '../../pages/FAQ/FAQ'
import Action from '../../pages/Action/Action'
import Gallery from '../../pages/Gallery/Gallery'
import Footer from '../../pages/Footer/Footer'
import Nutriair from '../../img/nutriair.png';
import blackimg from '../../img/energy.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import emailjs from '@emailjs/browser';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link, } from 'react-router-dom';
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

const Main = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [post, setPost] = useState({})
    return (

        <div className='main-wrapper'>
            <div className='main-block'>
                <div className='main-left'>
                    <h1 className='main-popular'>Популярное</h1>
                    <h1>Nutriair Diet <br></br>Будь всегда в тонусе!</h1>
                    <p className='main-descr'>Доставим в любую точку города в <br></br>короткие сроки!</p>
                    <div className='button-text'>
                        <button className='main-button'>Перейти в каталог</button>
                        <p className='button-descr'>9 различных <br></br>видов на выбор</p>
                    </div>
                </div>
                <img className='dieta' src={Diet} alt="" />
            </div>
            <img className='smoke-main' src={Smoke1} alt="" />
            <div className='mini-catalog'>
                <h1 className='mini-catalog-title'>Для любых событий и дорогих вам людей</h1>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                    ]}
                    autoplay={true}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={1}
                    slidesToShow={3}
                    scrollOnDevice={true}
                >
                    <div>
                        <div className='card'>
                            <img className='card-img' src={blackimg} alt="" />
                            <div className='card-text'>
                                <h1>Energy</h1>
                                <p>Описание</p>
                                <h3>850 сом</h3>
                                <Link to={`/singlepost/${post.id}`}>
                                    <button className='main-button' onClick={() => setButtonPopup(true)}>Подробнее</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='card'>
                        <img className='card-img' src={blackimg} alt="" />
                            <div className='card-text'>
                                <h1>Sleep</h1>
                                <p>Описание</p>
                                <h3>850 сом</h3>
                                <Link to={`/singlepost/${post.id}`}>
                                    <button className='main-button' onClick={() => setButtonPopup(true)}>Подробнее</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='card'>
                        <img className='card-img' src={blackimg} alt="" />
                            <div className='card-text'>
                                <h1>Diet</h1>
                                <p>Описание</p>
                                <h3>850 сом</h3>
                                <Link to={`/singlepost/${post.id}`}>
                                    <button className='main-button' onClick={() => setButtonPopup(true)}>Подробнее</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='card'>
                        <img className='card-img' src={blackimg} alt="" />
                            <div className='card-text'>
                                <h1>Immune</h1>
                                <p>Описание</p>
                                <h3>850 сом</h3>
                                <Link to={`/singlepost/${post.id}}`}>
                                    <button className='main-button' onClick={() => setButtonPopup(true)}>Подробнее</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </InfiniteCarousel>
            </div>
            <FAQ />
            <div className='Ad'>
                <div className='faq-block'>
                    <div className='ad-left'>
                        <h1 className='ad-popular'>Что это?</h1>
                        <div className='ad-text'>
                            <h1 className='ad-title'>Nutriair</h1>
                            <h1>витаминный ингалятор<br></br>помогающий улучшить<br></br>качество вашей жизни</h1>
                            <ul className='ad-list'>
                                <li>Не вредит вашему организму: не содержит табака и никотина</li>
                                <li>Оставляет привычный дым, заменяя его на пар</li>
                                <li>Останетесь в тренде при этом неся пользу организму</li>
                            </ul>
                        </div>
                        <div className='button-text'>
                            <button className='main-button'>Перейти в каталог</button>
                        </div>
                    </div>
                    <img className='phone-faq' src={Nutriair} alt="" />
                </div>
            </div>
            <Action />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Main;