import React from 'react';

const SubscriptionForm = () => {
  return (
    <div className="container1">
      <div className="background-image"></div>
      <div className="subscription-form">
        <h1>SUSCRÍBETE A NUESTRO BOLETÍN SEMANAL</h1>
        <p>Recibe los mejores artículos y noticias fotográficas directamente en tu correo.</p>
        <form>
          <label htmlFor="email">Enter your email here *</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
