import { useEffect, useState } from "react"
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_uumv9yp', 'template_ahh9yjt', values, 'J48kemwNCVoQ94TFW')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">Офформить заявку</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Введите свое имя" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="Введите свой E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <InputField value={values.phone} handleChange={handleChange} label="Введите свой номер телефона" name="phone" type="phone" placeholder="jphn@example.com" />
        <TextareaField value={values.message} handleChange={handleChange} label="Сообщение" name="message" />
        <button type="submit"
          className="main-button">
          Отправить</button>
      </form>
    </div>
  )
}

const renderAlert = () => (
  <Stack sx={{ width: '100%' }} spacing={2}>
  <Alert variant="filled" severity="success">
    Заявка отправлена!
  </Alert>
</Stack>
)

export default ContactForm
