import React, { useState } from 'react';
import backgroundImage from '../images/img1.jpg'; // ajusta la ruta si es necesario

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes añadir la lógica para enviar el formulario, por ejemplo, usando fetch o axios
  };

  return (
    <div className="contact-form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>SOLICITUD DE ENTREVISTA</h2>
        <p>Si quiere ser entrevistado para ganar reconocimiento y compartir su trabajo con una audiencia más amplia.</p>
        <label>
          Nombre Completo
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email *
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Portfolio URL *
          <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} required />
        </label>
        <label>
          Mensaje
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
