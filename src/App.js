import './App.css';
import Footer from './components/Pages/Footer';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Settings from './components/Pages/Settings.js';
import FAQ from './components/Pages/FAQ.js';
import ArticleSearch from './components/Pages/ArticleSearch.js';
import Tutorials from './components/Pages/TutorialsPage.js';


function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/article' element={<ArticleSearch/>} />
        <Route path='/tutorials' element={<Tutorials/>} />
      </Routes>
      </Router>

      <FAQ/>
      <Footer />
    </div>

  );
}



export default App;
