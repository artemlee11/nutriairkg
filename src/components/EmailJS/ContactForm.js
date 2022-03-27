import { useEffect, useState } from "react"
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import axios from 'axios';
import '../Popup/Popup';

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
//   const fetchData = () => {
//     return axios.get('http://localhost:3004/posts')
//     .then(response => response.data)
// }
//   const [posts, setPosts] = useState([])
//   const [title, setTitle] = useState('')
//   useEffect(()=> {
//       fetchData().then(data => setPosts(data))
//   })
  return (
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form className="popup-input" onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">Офформить заявку</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Введите свое имя" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="Введите свой E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <InputField value={values.phone} handleChange={handleChange} label="Введите свой номер телефона" name="phone" type="phone" placeholder="jphn@example.com" />
        {/* <SelectField handleChange={handleChange} name="role" label="Выберите вид:" /> */}
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
  <Stack sx={{ width: '100%' }} spacing={2}>
  <Alert variant="filled" severity="success">
    Заявка отправлена!
  </Alert>
</Stack>
)

export default ContactForm
