import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageGallery.css';

import foto1 from '../images/foto1.jpg';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import foto5 from '../images/foto5.jpg';
import foto6 from '../images/foto6.jpg';
import foto7 from '../images/foto7.jpg';
import foto8 from '../images/foto8.jpg';
import foto9 from '../images/foto9.jpg';
import foto10 from '../images/foto10.jpg';
import foto11 from '../images/foto11.jpg';
import foto12 from '../images/foto12.jpg';
import foto13 from '../images/foto13.jpg';
import foto14 from '../images/foto14.jpg';
import foto15 from '../images/foto15.jpeg';
import foto16 from '../images/foto16.jpg';
import foto17 from '../images/foto17.jpg';
import foto18 from '../images/foto18.jpg';
import foto19 from '../images/foto19.jpg';
import foto20 from '../images/foto20.jpg';
import foto21 from '../images/foto21.jpg';
import foto22 from '../images/foto22.jpg';
import foto23 from '../images/foto23.jpg';
import foto24 from '../images/foto24.jpeg';
import foto25 from '../images/foto25.jpg';
import foto26 from '../images/foto26.jpg';
import foto27 from '../images/foto27.jpeg';
import foto28 from '../images/foto28.jpg';
import foto29 from '../images/foto29.jpg';
import foto30 from '../images/foto30.jpg';
import foto31 from '../images/foto31.jpg';
import foto32 from '../images/foto32.jpg';
import foto33 from '../images/foto33.jpg';
import foto34 from '../images/foto34.jpg';
import foto35 from '../images/foto35.jpg';
import foto36 from '../images/foto36.jpg';
import foto37 from '../images/foto37.jpg';
import foto38 from '../images/foto38.jpg';
import foto39 from '../images/foto39.jpg';
import foto40 from '../images/foto40.jpg';
import foto41 from '../images/foto41.jpg';
import foto42 from '../images/foto42.jpg';
import foto43 from '../images/foto43.jpg';
import foto44 from '../images/foto44.jpg';
import foto45 from '../images/foto45.jpg';
import foto46 from '../images/foto46.jpg';
import foto47 from '../images/foto47.jpg';
import foto48 from '../images/foto48.jpg';
import foto49 from '../images/foto49.jpg';
import foto50 from '../images/foto50.jpg';
import foto51 from '../images/foto51.jpg';
import foto52 from '../images/foto52.jpg';
import foto53 from '../images/foto53.jpg';
import foto54 from '../images/foto54.jpg';
import foto55 from '../images/foto55.jpg';
import foto56 from '../images/foto56.jpg';
import foto57 from '../images/foto57.jpg';
import foto58 from '../images/foto58.jpg';
import foto59 from '../images/foto59.jpg';
import foto60 from '../images/foto60.jpg';
import foto61 from '../images/foto61.jpg';
import foto62 from '../images/foto62.jpg';
import foto63 from '../images/foto63.jpg';
import foto64 from '../images/foto64.jpg';
import foto65 from '../images/foto65.jpg';
import foto66 from '../images/foto66.jpg';
import foto67 from '../images/foto67.jpg';
import foto68 from '../images/foto68.jpg';
import foto69 from '../images/foto69.jpg';
import foto70 from '../images/foto70.jpg';
import foto71 from '../images/foto71.jpg';
import foto72 from '../images/foto72.jpg';
import foto73 from '../images/foto73.jpg';
import foto74 from '../images/foto74.jpg';
import foto75 from '../images/foto75.jpg';
import foto76 from '../images/foto76.jpg';
import foto77 from '../images/foto77.jpg';
import foto78 from '../images/foto78.jpg';
import foto79 from '../images/foto79.jpg';
import foto80 from '../images/foto80.jpg';
import foto81 from '../images/foto81.jpg';
import foto82 from '../images/foto82.jpg';
import foto83 from '../images/foto83.jpg';
import foto84 from '../images/foto84.jpg';
import foto85 from '../images/foto85.jpg';
import foto86 from '../images/foto86.jpg';
import foto87 from '../images/foto87.jpg';
import foto88 from '../images/foto88.jpg';
import foto89 from '../images/foto89.jpg';
import foto90 from '../images/foto90.jpg';
import foto91 from '../images/foto91.jpg';
import foto92 from '../images/foto92.jpg';
import foto93 from '../images/foto93.jpg';
import foto94 from '../images/foto94.jpg';
import foto95 from '../images/foto95.jpg';
import foto96 from '../images/foto96.jpg';
import foto97 from '../images/foto97.jpg';
import foto98 from '../images/foto98.jpg';
import foto99 from '../images/foto99.jpg';
import foto100 from '../images/foto100.jpg';


const themes = [
  {
    name: '',
    styles: [
      { name: 'Paisajes Naturales', images: ([{ src: foto1, photographer: 'Ansel Adams' }, { src: foto2, photographer: 'Galen Rowell' }, { src: foto3, photographer: 'Frans Lanting' }, { src: foto4, photographer: 'Art Wolfe' }, { src: foto5, photographer: 'David Muench' }, { src: foto6, photographer: 'Timothy Hogan' }, { src: foto7, photographer: 'Michael Kenna' }, { src: foto8, photographer: 'Trey Ratcliff' }, { src: foto9, photographer: 'Charlie Waite' }, { src: foto10, photographer: 'Thomas Heaton' }, { src: foto11, photographer: 'Marc Adamus' }, { src: foto12, photographer: 'Guy Tal' }, { src: foto13, photographer: 'Michael Frye' }, { src: foto14, photographer: 'Christian Fletcher' }, { src: foto15, photographer: 'Daniel Kordan' }, { src: foto16, photographer: 'Chris Burkard' }, { src: foto17, photographer: 'Ryan Dyar' }, { src: foto18, photographer: 'Adam Gibbs' }, { src: foto19, photographer: 'Rachael Talibart' }, { src: foto20, photographer: 'Iurie Belegurschi' }]) },
      { name: 'Paisajes Variados', images: ([{ src: foto21, photographer: 'Steve McCurry' }, { src: foto22, photographer: 'Paul Nicklen' }, { src: foto23, photographer: 'David Yarrow' }, { src: foto24, photographer: 'Ami Vitale' }, { src: foto25, photographer: 'Jimmy Chin' }, { src: foto26, photographer: 'Joel Sartore' }, { src: foto27, photographer: 'Chris Burkard' }, { src: foto28, photographer: 'Paul Zizka' }, { src: foto29, photographer: 'Alex Strohl' }, { src: foto30, photographer: 'Daniel Kordan' }, { src: foto31, photographer: 'Max Rive' }, { src: foto32, photographer: 'Ted Gore' }, { src: foto33, photographer: 'Michael Shainblum' }, { src: foto34, photographer: 'Kilian Schönberger' }, { src: foto35, photographer: 'Mikko Lagerstedt' }, { src: foto36, photographer: 'Hans Strand' }, { src: foto37, photographer: 'John Barclay' }, { src: foto38, photographer: 'Colby Brown' }, { src: foto39, photographer: 'Erin Babnik' }, { src: foto40, photographer: 'Isabella Tabacchi' }]) },
      { name: 'Costas,ciudades, y montañas', images: ([{ src: foto41, photographer: 'William Neill' }, { src: foto42, photographer: 'Jack Dykinga' }, { src: foto43, photographer: 'Bruce Percy' }, { src: foto44, photographer: 'Elia Locardi' }, { src: foto45, photographer: 'Peter Lik' }, { src: foto46, photographer: 'Gavin Hardcastle' }, { src: foto47, photographer: 'Aaron Reed' }, { src: foto48, photographer: 'Scott Kelby' }, { src: foto49, photographer: 'Sean Bagshaw' }, { src: foto50, photographer: 'Nick Page' }, { src: foto51, photographer: 'Michael Bollino' }, { src: foto52, photographer: 'Erin Babnik' }, { src: foto53, photographer: 'Alex Noriega' }, { src: foto54, photographer: 'Enrico Fossati' }, { src: foto55, photographer: 'Joshua Cripps' }, { src: foto56, photographer: 'David Thompson' }, { src: foto57, photographer: 'Kah Kit Yoong' }, { src: foto58, photographer: 'David Maimó' }, { src: foto59, photographer: 'Kai Hornung' }, { src: foto60, photographer: 'Darren White' }]) },
      { name: 'Minimalismo', images: ([{ src: foto61, photographer: 'Albert Dros' }, { src: foto62, photographer: 'Ken Kaminesky' }, { src: foto63, photographer: 'Daniel Greenwood' }, { src: foto64, photographer: 'Cory Richards' }, { src: foto65, photographer: 'Scott Rinckenberger' }, { src: foto66, photographer: 'Paul Reiffer' }, { src: foto67, photographer: 'David Brookover' }, { src: foto68, photographer: 'Benjamin Everett' }, { src: foto69, photographer: 'Gareth Codd' }, { src: foto70, photographer: 'Sarel Van Staden' }, { src: foto71, photographer: 'Nick Carver' }, { src: foto72, photographer: 'Nathaniel Smalley' }, { src: foto73, photographer: 'John Paul Caponigro' }, { src: foto74, photographer: 'Iurie Belegurschi' }, { src: foto75, photographer: 'Jay Patel' }, { src: foto76, photographer: 'Varina Patel' }, { src: foto77, photographer: 'Dylan Toh' }, { src: foto78, photographer: 'Marianne Lim' }, { src: foto79, photographer: 'Florence Goupil' }, { src: foto80, photographer: 'Oleg Ershov' }]) },
      { name: 'Fotografia de comida', images: ([{ src: foto81, photographer: 'Max Foster' }, { src: foto82, photographer: 'David Burdeny' }, { src: foto83, photographer: 'Mikko Lagerstedt' }, { src: foto84, photographer: 'Kilian Schönberger' }, { src: foto85, photographer: 'Ryan Smith' }, { src: foto86, photographer: 'David Kingham' }, { src: foto87, photographer: 'Sarah Marino' }, { src: foto88, photographer: 'Matt Payne' }, { src: foto89, photographer: 'Brian Rueb' }, { src: foto90, photographer: 'Thomas Shahan' }, { src: foto91, photographer: 'Rachel Jones Ross' }, { src: foto92, photographer: 'Erez Marom' }, { src: foto93, photographer: 'Ted Gore' }, { src: foto94, photographer: 'Nick Page' }, { src: foto95, photographer: 'Michael Bollino' }, { src: foto96, photographer: 'Ryan Dyar' }, { src: foto97, photographer: 'Alex Noriega' }, { src: foto98, photographer: 'David Thompson' }, { src: foto99, photographer: 'David Maimó' }, { src: foto100, photographer: 'Kai Hornung' }]) },
    ],
  },
  
];

const ImageGallery = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [selectedStyle, setSelectedStyle] = useState(selectedTheme.styles[0]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPhotographer, setSelectedPhotographer] = useState('');

  const openModal = (image) => {
    setSelectedImage(image.src);
    setSelectedPhotographer(image.photographer); // Configurar el nombre del fotógrafo
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
    setSelectedPhotographer('');
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <><div>
    </div><div style={{ width: '80%', margin: 'auto', color: 'white' }}>
        <h2 className="gallery-title">GALERIA DE FOTOS DESTACADAS</h2>
        <p>Aquí se muestra la galeria de fotos</p>

        <div className="style-selector">
          <h3>Selecciona un estilo:</h3>
          {selectedTheme.styles.map((style, index) => (
            <button key={index} onClick={() => setSelectedStyle(style)}>
              {style.name}
            </button>
          ))}
        </div>


        <Slider {...settings}>
        {selectedStyle.images.map((image, index) => (
          <div key={index} onClick={() => openModal(image)} className="image-container">
            <img src={image.src} alt={`Imagen ${index}`} />
            <div className="image-title">
              <h3>{`Imagen ${index}`}</h3>
            </div>
          </div>
        ))}
        </Slider>

        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 
          contentLabel="Image Description"
        >
          {selectedImage && (
        <div>
        <h2 className="modal-custom-title">Imagen seleccionada</h2>
        <img 
          src={selectedImage} 
          alt="Imagen seleccionada" 
          style={{ width: '100%' }} 
        />
        <p className="modal-custom-description">{selectedPhotographer && <p>Fotógrafo: {selectedPhotographer}</p>}</p>
        <button onClick={closeModal} className="modal-custom-button">Cerrar</button>
        </div>
          )}
        </Modal>
      </div></>
  );
};

export default ImageGallery;
