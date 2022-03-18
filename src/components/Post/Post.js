import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import blackimg from '../../img/energy.png';

const fetchData = () => {
    return axios.get('http://localhost:3004/posts')
    .then(response => response.data)
}

const Post = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetchData().then(data => setPosts(data))
    })
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div>
        {posts.map(post => {
            return (
            // <div className="item">
            //     <h1><Link to={`/singlepost/${post.id}`}>{post.postTitle}</Link></h1>
            //     <p>{post.postDescr}</p>
            // </div>
            <div className='catalog-card'>
            <img className='card-img' src={blackimg} alt="" />
            <div className='card-text'>
            <h1><Link to={`/singlepost/${post.id}`}>{post.postTitle}</Link></h1>
                <h3>{post.postPrice}</h3>
                <Link to={`/singlepost/${post.id}`}>
                <button className='main-button' onClick={() => setButtonPopup(true)}>Подробнее</button>
                </Link>
            </div>
        </div>
            )
        })
        }
        </div>
    );
};

export default Post;