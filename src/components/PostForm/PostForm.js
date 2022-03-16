import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import './PostForm.css';
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/posts", {
      postTitle: title,
      postDescr: descr,
      postPrice: price,
    });
    setTitle("");
    setDescr("");
    setPrice("");
    document.location.href = '/catalog'
  };

  return (
    <div className="form-container">
    <form className="change-form" onSubmit={handleSubmit}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="change-title"
        label="Введите название продукта"
        variant="outlined"
      />
      <TextField
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
        id="change-descr"
        label="Введите описание продукта"
        variant="outlined"
        />
      <TextField
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        id="change-price"
        label="Введите цену продукта"
        variant="outlined"
        />
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Опубликовать пост
      </Button>
    </form>
        </div>
  );
};

export default PostForm;
