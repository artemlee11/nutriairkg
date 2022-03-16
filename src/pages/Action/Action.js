import React from 'react';
import Smoke1 from '../../img/smoke1.png';
import Smoke2 from '../../img/smoke2.png';
import ActionIMG from '../../img/actionimg.jpg'
import './Action.css';
const Action = () => {
    return (
        <div className='Action'>
        <img className='smoke-action'src={ Smoke2 }/>
        <h2 className='action-title'>Действующие акции</h2>
        <div className='action-block'>
        <img className='action-img'src={ ActionIMG }/>
        <div className='action-left'>
        <h1>Успей купить наборы:<br></br>"Здоровье" и "Любовь"<br></br>
        по выгодной цене!</h1>
        <h4>Акция длится до 25 марта</h4>
        </div>
        </div>
        <img className='smoke-action'src={ Smoke1 }/>
        </div>
    );
};

export default Action;