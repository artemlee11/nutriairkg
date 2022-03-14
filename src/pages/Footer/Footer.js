import React, { useState } from 'react';
import Smoke2 from '../../img/smoke2.png';
import useFormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Popup from '../../components/Popup/Popup';
import CallbackForm from '../../components/EmailJS/CallbackForm'
import './Footer.css';
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
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className='footer'>
      <img className='smoke-main' src={Smoke2} />
      <div className='footer-container'>
        <h1>Чтобы сделать заказ заполните данные</h1>
        <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <CallbackForm />
        </Popup>
        <button className='main-button' onClick={() => setButtonPopup(true)}>Оформить заказ</button>

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