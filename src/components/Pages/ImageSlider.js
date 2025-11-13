// src/ImageSlider.js
import React, { useState } from 'react';

const ImageSlider = () => {
    const images = [
        'https://via.placeholder.com/600x300?text=Imagen+1',
        'https://via.placeholder.com/600x300?text=Imagen+2',
        'https://via.placeholder.com/600x300?text=Imagen+3',
        'https://via.placeholder.com/600x300?text=Imagen+4',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <button onClick={prevSlide}>Anterior</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={nextSlide}>Siguiente</button>
        </div>
    );
};

export default ImageSlider;
