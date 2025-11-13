import React from 'react';
import './Contact.css';
import logo from '../images/Logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const contacts = [
  {
    id: 1,
    name: 'Your Name/Company Name',
    email: 'example@mail.com',
    photo: logo,
  },
];

const Contacts = () => {
  return (
    <>
      <footer>
        <h3>¡SÍGUEME!</h3>
        <p>@username</p>
        <p><i className="fa fa-envelope"></i> example@email.com</p>
        <p><i className="fa fa-phone"></i> +000 0000-0000</p>
        <p><a href="/legal">Aviso Legal</a> | <a href="/privacy">Política de privacidad</a></p>
      </footer>
    </>
  );
};

export default Contacts;
