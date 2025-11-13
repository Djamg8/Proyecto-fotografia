import React from 'react';

const About = () => {
  return (
    <>
      <div className="about-us" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="about-us-content" style={{ maxWidth: '1200px', width: '100%', padding: '0 20px' }}>
          <h1>Quiénes Somos</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ width: '45%', marginRight: '5%' }}>
              Somos un equipo creativo enfocado en desarrollar proyectos visuales modernos y funcionales. Esta plantilla está diseñada para servir como base a fotógrafos, artistas y creadores que desean presentar su trabajo de manera organizada y profesional.
            </p>
            <p style={{ width: '45%', textAlign: 'center' }}>
              Nuestro objetivo es ofrecer una estructura flexible, estética y fácil de personalizar. Todo el contenido mostrado, incluyendo textos e imágenes, es únicamente con fines demostrativos y puede ser reemplazado según las necesidades del usuario final.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
