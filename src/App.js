import './App.css';
import Footer from './components/Pages/Footer';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Profile from './components/Pages/Profile'
import Settings from './components/Pages/Settings.js';
import LandingPage from './components/Pages/LandingPage.js';
import ProtectedRoute from './components/Pages/ProtectedRoute.js';
import ProtectedPage from './components/Pages/ProtectedPage.js';
import Auth0ProviderWithHistory from './components/Pages/Auth0ProviderWithHistory';
import FAQ from './components/Pages/FAQ.js';
import ArticleSearch from './components/Pages/ArticleSearch.js';
import Tutorials from './components/Pages/TutorialsPage.js';


function App() {

  return (
    <div className="App">
      <Router>
      <Auth0ProviderWithHistory>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/article' element={<ArticleSearch/>} />
        <Route path='/tutorials' element={<Tutorials/>} />
      </Routes>
      </Auth0ProviderWithHistory>
      </Router>

      <FAQ/>
      <Footer />
    </div>

  );
}



export default App;
