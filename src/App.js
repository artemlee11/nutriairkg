import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './pages/Header/Header'
import Main from './components/Main/Main'
import FAQ from './pages/FAQ/FAQ';
import Action from './pages/Action/Action';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import PostForm from './components/PostForm/PostForm';
import SinglePost from './pages/SinglePost/SinglePost';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/action" element={<Action />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/createpost" element={<PostForm />} />
          <Route path="/singlepost/:id" element={<SinglePost />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        </Routes>
 
      </div>
    </div>
  );
}

export default App;
