import React, { useState } from 'react';
import Phone from '../../img/phone1.png';
import Smoke1 from '../../img/smoke1.png';
import Smoke2 from '../../img/smoke2.png';
import Popup from '../../components/Popup/Popup';
import CallbackForm from '../../components/EmailJS/CallbackForm'

import './FAQ.css';
const FAQ = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className='FAQ'>
        <img className='smoke-faq1'src={ Smoke2 }/>
        <div className='faq-block'>
        <img className='phone-faq' src={ Phone }/>
        <div className='main-left'>
        <h1 className='main-popular'>Не нашли то что нужно?</h1>
        <h1>Подскажем какой вид<br></br>вам больше всего<br></br>пойдет на пользу</h1>
        <p className='main-descr'>Нажмите на кнопку для<br></br>подробной консультации</p>
        <div className='button-text'>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <CallbackForm />
        </Popup>
        <button className='main-button' onClick={() => setButtonPopup(true)}>Помогите мне!</button>
        </div>
        </div>
        </div>
        <img className='smoke-faq'src={ Smoke1 }/>
        </div>
    );
};

export default FAQ;