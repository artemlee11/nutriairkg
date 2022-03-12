import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import FAQ from './components/FAQ/FAQ'
import Action from './components/Action/Action'
import Gallery from './components/Gallery/Gallery'
function App() {
  return (
    <div className="App">
 <Header />
        <div className='content'>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<FAQ />} />
          <Route path="/" element={<Action />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/" element={<Footer />} />
          </Routes>
        </div>
        
    </div>

  );
}

export default App;
