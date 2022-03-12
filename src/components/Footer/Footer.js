import React from 'react';
import Smoke2 from '../../img/smoke2.png';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import FormHelperText from '@mui/material/FormHelperText';
function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'Пример: +996500000000';
      }
  
      return '';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }
const Footer = () => {
    return (
        <div className='footer'>
            <img className='smoke-main'src={ Smoke2 }/>
            <div className='footer-container'>
                <h1>Чтобы сделать заказ, укажите ваш телефон</h1>
                <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
                <FormControl sx={{ width: '26ch' }}>
  <OutlinedInput placeholder="Введите номер телефона" />
  <MyFormHelperText />
</FormControl><button className='main-button'>Сделать заказ!</button> 
            </div>
            <div className='footer-descr-container'>
                <div className='footer-descr'>
            <p>Согласие на обработку данных</p>
            <p>Cлужба поддержки</p>
            <p>Политика конфиденциальности</p>    
                    </div>
            <p>© Nutriair Kyrgyzstan</p>
            </div>
        </div>
    );
};

export default Footer;