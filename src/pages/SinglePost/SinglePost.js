import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Smoke1 from '../../img/smoke1.png';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
// import blackimg from '../../img/energy.png';
import Popup from '../../components/Popup/Popup';
import ContactForm from '../../components/EmailJS/ContactForm';
// import { Link } from 'react-router-dom';
import './SinglePost.css';
import { Context } from "../../components/context/Context"

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
    const [url, setIMG] = useState('')
    const [effect, setEffect] = useState('')
    const [changeMode, setChangeMode] = useState(false)
    const { user } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        fetchData(id).then(data => setPost(data))
    })

    const handleDeletePost = () => {
        axios.delete(`http://localhost:3004/posts/${id}`)
        document.location.href = '/catalog'
    }

    const handleChangePost = () => {
        setChangeMode(true)
        setTitle(post.postTitle)
        setDescr(post.postDescr)
        setPrice(post.postPrice)
        setTaste(post.postTaste)
        setUsage(post.postUsage)
        setEffect(post.postEffect)
        setIMG(post.posturl)
    }

    const handleUpdatePost = async () => {
        await axios.put(`http://localhost:3004/posts/${id}`, {
            postTitle: title,
            postDescr: descr,
            postPrice: price,
            postTaste: taste,
            postUsage: usage,
            postEffect: effect,
            posturl: url
        })
        document.location.href = `/singlepost/${post.id}`
        setTitle("")
        setDescr("")
        setPrice("")
        setTaste("")
        setUsage("")
        setEffect("")
        setIMG('')
        setChangeMode(false)
    }
    const [buttonPopup, setButtonPopup] = useState(false)
    return (

        <div className='singlepost'>
            <h1 className='about-title'>Nutriair {post.postTitle}</h1>
            <img className='smoke-main' src={Smoke1} alt="" />
            <div className='singlepost-container'>

                <div className='singlepost-card'>
                <img className='singlepost-img' src={`http://localhost:3000/${post.posturl}`} alt="" />
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
                        <h1>
                            {changeMode ?
                                <TextField
                                    value={url}
                                    onChange={e => setIMG(e.target.value)}
                                    id="post-title"
                                    label="Ссылка на картинку"
                                    variant="outlined" />
                                : ""}
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
                {user ?
                    <div className='change-buttons'>
                        {changeMode ? "" :
                            <button className='main-button' onClick={handleChangePost}>Редактировать</button>}
                        {changeMode ? "" :
                            <button className='main-button' onClick={handleDeletePost}>Удалить</button>}
                        {changeMode ?
                            <button className='main-button' onClick={handleUpdatePost} >Сохранить</button> : ""}
                    </div>
                    : ""}
                <div className='singlepost-descr'>
                    <h4>
                        Используйте когда вам необходим дополнительный заряд энергии, чтобы оставаться в тонусе.
                    </h4>
                    <div className='singlepost-descr-change'>
                        <div className='descr-change'>
                    <h2>Вкус:
                        </h2>
                            <h2>
                        {changeMode ?
                            <TextField
                                value={taste}
                                onChange={e => setTaste(e.target.value)}
                                id="post-feature"
                                label="Введите название"
                                variant="outlined" />
                                : post.postTaste}
                                </h2>   
                                </div>
                                <div className='descr-change'>

                        <h2>
                        Ресурс использования до
                        </h2>  
                        <h2>
                        {changeMode ?
                            <TextField
                            value={usage}
                            onChange={e => setUsage(e.target.value)}
                            id="post-feature"
                            label="Введите описание"
                            variant="outlined" />
                            : post.postUsage}
                            </h2>
                            </div>
                        <h2>
                        {changeMode ?
                            <TextField
                                value={effect}
                                onChange={e => setEffect(e.target.value)}
                                id="post-feature"
                                label="Введите действие"
                                variant="outlined" />
                            : post.postEffect}
                    </h2>
                                </div>
                    <h3>
                        Как использовать:<br></br>
                        - Снимите защитный колпачок;<br></br>
                        - Сделайте вдох в течение 3 секунд;<br></br>
                        - Повторять по мере необходимости или когда требуется заряд энергии.<br></br>
                    </h3>
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