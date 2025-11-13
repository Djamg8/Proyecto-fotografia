import React, { useState } from 'react';

const PhotoSubmissionForm = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="container2">
      <div className="background-image2"></div>
      <div className="photo-submission-form">
        <h1>FORMULARIO DE ENVÍO DE FOTOS</h1>
        <p>Aquí pueden enviar fotos para que sean consideradas en futuras publicaciones de la revista.</p>
        <form>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
          
          Archivo de imagen:
          <input type="file" name="file" onChange={(event) => setFile(event.target.files[0])} />
          
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description"></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PhotoSubmissionForm;
