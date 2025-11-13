import React, { useRef } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import backgroundImage from '../images/img-home.jpg';
import Navbar from './Navbar';
import ImageGallery from './ImageGallery';
import About from './About';

const Home = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="home-content">
          <Fade direction="up">
            <h1>UN VIAJE VISUAL: PAISAJES QUE DELEITARÁN TUS SENTIDOS</h1>
          </Fade>
          <Slide direction="up">
            <button className="explore-button" onClick={scrollToSection}>Explorar Galerias</button>
          </Slide>
        </div>
      </div>
      <div className="component-wrapper">
        <Fade direction="left">
          <About />
        </Fade>
      </div>
      <div ref={sectionRef} id="section" className="component-wrapper">
        <Fade direction="right">
          <ImageGallery />
        </Fade>
      </div>
    </div>
  );
};

export default Home;
