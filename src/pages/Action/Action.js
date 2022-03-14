import React from 'react';
import Smoke1 from '../../img/smoke1.png';
import Smoke2 from '../../img/smoke2.png';
import ActionIMG from '../../img/action-img.png'
import './Action.css';
const Action = () => {
    return (
        <div className='Action'>
        <img className='smoke-action'src={ Smoke2 }/>
        <h2 className='action-title'>Действующие акции</h2>
        <div className='faq-block'>
        <img className='action-img'src={ ActionIMG }/>
        <div className='main-left'>
        <h1>Акция!<br></br>В честь 8 марта<br></br>8% скидка</h1>
        </div>
        </div>
        <img className='smoke-action'src={ Smoke1 }/>
        </div>
    );
};

export default Action;