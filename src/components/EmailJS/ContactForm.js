import { useEffect, useState } from "react"
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    amount:'',
    message: ''
  });
  const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_uumv9yp', 'template_ooshh1b', values, 'J48kemwNCVoQ94TFW')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          amount:'',
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
        <SelectField handleChange={handleChange} name="role" label="Выберите вид:" />
        <InputField value={values.amount} handleChange={handleChange} label="Количество" name="amount" type="amount" placeholder="jphn@example.com" />
        <TextareaField value={values.message} handleChange={handleChange} label="Сообщение" name="message" />
        <button type="submit"
          className="main-button">
          Отправить</button>
      </form>
    </div>
  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactForm
