import React from 'react';
import './LandingPage.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Fade } from 'react-awesome-reveal';
import Captura3 from '../images/Captura3.png';
import GalleryImage from '../images/Captura1.png';
import ArticlesImage from '../images/Captura2.png';

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="landing-page">
      <div className="header">
        <h1 className="logo-text">Un Viaje Visual</h1>
        <button className="sign-in-btn" onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      </div>
        <div className="content">
          <h1>UN VIAJE VISUAL: PAISAJES QUE DELEITARÁN TUS SENTIDOS</h1>
          <p>Explora nuestros servicios</p>
          <p>Inicia sesión para ver todo nuestro contenido fotográfico</p>
          <form>
            <input type="email" placeholder="Email address" className="email-input" />
            <button type="submit" className="get-started-btn" onClick={(e) => { e.preventDefault(); loginWithRedirect(); }}>
              Get Started
            </button>
          </form>
        </div>

      <div className="tv-section">
        <Fade direction="up">
          <div className="tv-text">
            <h2>Mira tutoriales de fotografia</h2>
            <p>En nuestra pagina podras encontrar tutoriales para aprender sobre fotografia.</p>
          </div>
        </Fade>
        <div className="tv-image">
          <img src={GalleryImage} alt="Disfruta en tu TV" />
        </div>
      </div>

      <div className="gallery-section">
        <Fade direction="up">
          <div className="gallery-text">
            <h2>Explora la Naturaleza</h2>
            <p>Descubre la belleza de la naturaleza a través de nuestras imágenes cuidadosamente seleccionadas.</p>
          </div>
        </Fade>
        <div className="gallery-image">
          <img src={Captura3} alt="Explora la Naturaleza" />
        </div>
      </div>

      <div className="articles-section">
        <Fade direction="up">
          <div className="articles-text">
            <h2>Artículos Fotográficos</h2>
            <p>Lee nuestros artículos sobre técnicas fotográficas, equipo y más para mejorar tus habilidades.</p>
          </div>
        </Fade>
        <div className="articles-image">
          <img src={ArticlesImage} alt="Artículos Fotográficos" />
        </div>
      </div>

      <div className="footer">
        <p>Revista Fotográfica</p>
        <a href="#" className="learn-more">Learn More</a>
      </div>
    </div>
  );
};

export default LandingPage;
