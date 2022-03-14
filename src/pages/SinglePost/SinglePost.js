import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Smoke1 from '../../img/smoke1.png';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import blackimg from '../../img/energy.png';
import Popup from '../../components/Popup/Popup';
import ContactForm from '../../components/EmailJS/ContactForm';
import './SinglePost.css';
const fetchData = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`)
        .then(response => response.data)
}
const SinglePost = () => {

    const [post, setPost] = useState({})
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [price, setPrice] = useState('')
    const [taste, setTaste] = useState('')
    const [usage, setUsage] = useState('')
    const [effect, setEffect] = useState('')
    const [changeMode, setChangeMode] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        fetchData(id).then(data => setPost(data))
    })

    const handleDeletePost = () => {
        axios.delete(`http://localhost:3004/posts/${id}`)
    }

    const handleChangePost = () => {
        setChangeMode(true)
        setTitle(post.postTitle)
        setDescr(post.postDescr)
        setPrice(post.postPrice)
        setTaste(post.postTaste)
        setUsage(post.postUsage)
        setEffect(post.postEffect)
    }

    const handleUpdatePost = async () => {
        await axios.put(`http://localhost:3004/posts/${id}`, {
            postTitle: title,
            postDescr: descr,
            postPrice: price,
            postTaste: taste,
            postUsage: usage,
            postEffect: effect
        })
        setTitle("")
        setDescr("")
        setPrice("")
        setTaste("")
        setUsage("")
        setEffect("")
        setChangeMode(false)
    }
    const [buttonPopup, setButtonPopup] = useState(false)
    return (

        <div className='singlepost'>
            <h1 className='about-title'>{post.postTitle}</h1>
            <img className='smoke-main' src={Smoke1} alt="" />
            <div className='singlepost-container'>

                <div className='singlepost-card'>
                    <img className='singlepost-img' src={blackimg} alt="" />
                    <div className='singlepost-text'>

                        <h1>
                            {changeMode ?
                                <TextField
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    id="post-title"
                                    label="Введите название продукта"
                                    variant="outlined" />
                                : post.postTitle}
                        </h1>
                        <p>
                            {changeMode ?
                                <TextField
                                    value={descr}
                                    onChange={e => setDescr(e.target.value)}
                                    id="post-descr"
                                    label="Введите описание продукта"
                                    variant="outlined" />
                                : post.postDescr}
                        </p>
                        <h1>
                            {changeMode ?
                                <TextField
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    id="post-descr"
                                    label="Введите цену продукта"
                                    variant="outlined" />
                                : post.postPrice}
                        </h1>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <ContactForm />
                        </Popup>
                        <button className='main-button' onClick={() => setButtonPopup(true)}>Оформить заказ</button>
                    </div>
                </div>
                {changeMode ? "" :
                    <button onClick={handleDeletePost}>Удалить</button>}
                {changeMode ? "" :
                    <button onClick={handleChangePost}>Редактировать</button>}
                {changeMode ?
                    <button onClick={handleUpdatePost}>Сохранить</button> : ""}
                <div className='singlepost-descr'>
                    <h3>
                    Используйте когда вам необходим дополнительный заряд энергии, чтобы оставаться в тонусе.
                    </h3>
                    <h2>Вкус: 
                            {changeMode ?
                            <TextField
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                id="post-feature"
                                label="Введите описание"
                                variant="outlined" />
                            : post.postPrice}
                            <br></br>
                        Ресурс использования до 
                        {changeMode ?
                            <TextField
                                value={usage}
                                onChange={e => setUsage(e.target.value)}
                                id="post-feature"
                                label="Введите описание"
                                variant="outlined" />
                            : post.postUsage}
                        <br></br>
                        {changeMode ?
                            <TextField
                                value={effect}
                                onChange={e => setEffect(e.target.value)}
                                id="post-feature"
                                label="Введите описание"
                                variant="outlined" />
                            : post.postEffect}
                    </h2>
                    <h2>
                        Как использовать:<br></br>
                        - Снимите защитный колпачок;<br></br>
                        - Сделайте вдох в течение 3 секунд;<br></br>
                        - Повторять по мере необходимости или когда требуется заряд энергии.<br></br>
                    </h2>
                    <h4>** Рекомендуется 20 ингаляций в час **<br></br>
                        ** Не рекомендуется лицам до 18 лет без согласия родителей**<br></br>
                        **Не рекомендуется беременным женщинам без консультации с врачом**
                    </h4>
                </div>

            </div>
            <FAQ />
            <Footer />
        </div>
    );
};

export default SinglePost;