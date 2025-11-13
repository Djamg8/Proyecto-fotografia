import React, { useState } from 'react';
import '../Pages/FAQ.css'

// Datos codificados de preguntas frecuentes organizadas por temas
const faqData = {
  "Técnicas Fotográficas": [
    {
      question: '¿Qué es la exposición en fotografía?',
      answer: 'La exposición es la cantidad de luz que llega al sensor de la cámara. Se controla a través de la apertura del diafragma, la velocidad de obturación y la sensibilidad ISO.'
    },
    {
      question: '¿Cómo puedo mejorar la composición de mis fotos?',
      answer: 'Utiliza la regla de los tercios, busca líneas guía y asegúrate de que el sujeto esté bien encuadrado. También considera la perspectiva y el uso del espacio negativo.'
    },
    {
      question: '¿Qué es la profundidad de campo?',
      answer: 'La profundidad de campo es la distancia entre los objetos más cercanos y más lejanos en una foto que aparecen nítidos. Se controla mediante la apertura del diafragma.'
    },
    {
      question: '¿Cómo puedo tomar buenas fotos en condiciones de poca luz?',
      answer: 'Usa una apertura amplia, incrementa el ISO y utiliza un trípode para evitar el movimiento de la cámara. También considera el uso de iluminación artificial.'
    }
  ],
  "Equipo Fotográfico": [
    {
      question: '¿Cuál es la diferencia entre una cámara réflex y una cámara sin espejo?',
      answer: 'Las cámaras réflex utilizan un espejo para redirigir la luz al visor óptico, mientras que las cámaras sin espejo utilizan un visor electrónico o la pantalla LCD para mostrar la imagen en tiempo real.'
    },
    {
      question: '¿Qué tipo de lentes debo usar para retratos?',
      answer: 'Para retratos, los lentes de 50mm o 85mm con una apertura amplia (f/1.8 o menor) son ideales para obtener un fondo desenfocado y resaltar el sujeto.'
    },
    {
      question: '¿Qué accesorios son esenciales para un fotógrafo principiante?',
      answer: 'Algunos accesorios esenciales incluyen un trípode, una bolsa de cámara, tarjetas de memoria adicionales y un kit de limpieza para el lente.'
    },
    {
      question: '¿Cómo elijo una cámara adecuada para fotografía de viajes?',
      answer: 'Elige una cámara compacta y ligera con buena calidad de imagen, como una cámara sin espejo o una cámara compacta avanzada.'
    }
  ],
  "Edición de Fotografías": [
    {
      question: '¿Qué software es mejor para la edición de fotografías?',
      answer: 'Algunos de los software más populares para la edición de fotografías son Adobe Lightroom, Photoshop y GIMP.'
    },
    {
      question: '¿Cómo puedo corregir el balance de blancos en mis fotos?',
      answer: 'Puedes corregir el balance de blancos en la mayoría de los editores de fotos ajustando la temperatura y el tinte para que los colores se vean más naturales.'
    },
    {
      question: '¿Qué es la edición no destructiva?',
      answer: 'La edición no destructiva es una técnica en la que los cambios realizados en una foto no alteran los datos originales de la imagen, permitiendo revertirlos o ajustarlos sin pérdida de calidad.'
    },
    {
      question: '¿Cómo puedo mejorar el color y el contraste en mis fotos?',
      answer: 'Utiliza herramientas como curvas, niveles y ajustes de exposición para mejorar el color y el contraste. También puedes utilizar filtros y ajustes de tono.'
    }
  ],
  "Inspiración y Creatividad": [
    {
      question: '¿Dónde puedo encontrar inspiración para mis fotos?',
      answer: 'Puedes encontrar inspiración en sitios web como Instagram, Pinterest, y en galerías de fotografía en línea. También puedes inspirarte en la naturaleza, la arquitectura, y las personas que te rodean.'
    },
    {
      question: '¿Cómo puedo desarrollar mi propio estilo fotográfico?',
      answer: 'Para desarrollar tu propio estilo, experimenta con diferentes técnicas y temas, revisa y analiza tus fotos favoritas, y sigue a fotógrafos que admiras para entender qué te gusta de su trabajo.'
    },
    {
      question: '¿Qué proyectos fotográficos puedo hacer para mejorar mis habilidades?',
      answer: 'Intenta proyectos como 365 días de fotos, retratos de extraños, fotografía de objetos cotidianos desde nuevas perspectivas y fotos temáticas basadas en colores.'
    },
    {
      question: '¿Cómo puedo superar un bloqueo creativo en la fotografía?',
      answer: 'Cambia de entorno, prueba una técnica nueva, colabora con otros fotógrafos o toma un descanso para revitalizar tu creatividad.'
    }
  ],
  "Soporte": [
    {
      question: '¿Cómo puedo contactar a los administradores de la página?',
      answer: 'Para contactarnos puedes acceder en la sección contacto y tendrás nuestros datos'
    },
    {
      question: '¿Qué debo hacer si mi cámara no funciona correctamente?',
      answer: 'Revisa el manual de usuario para solucionar problemas comunes, y si no puedes resolverlo, contacta al soporte técnico o lleva la cámara a un centro de servicio autorizado.'
    },
    {
      question: '¿Cómo puedo actualizar el firmware de mi cámara?',
      answer: 'Visita el sitio web del fabricante de tu cámara, descarga la última actualización de firmware y sigue las instrucciones proporcionadas para instalarla en tu cámara.'
    }
  ]
};

const FAQ = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicChange = (topic) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
  };

  return (
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-topics">
        {Object.keys(faqData).map((topic, index) => (
          <div key={index} className="faq-topic">
            <button 
              className="faq-topic-button"
              onClick={() => handleTopicChange(topic)}
            >
              {topic}
            </button>
            {selectedTopic === topic && (
              <div className="faq-answers">
                {faqData[topic].map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-section {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-topics {
          list-style: none;
          padding: 0;
        }
        .faq-topic {
          margin-bottom: 10px;
          border: 1px solid #ddd
        }
        .faq-topic-button {
          background: #000000;
          border: none;
          padding: 10px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          font-size: 16px;
          border-radius: 4px;
        }
        .faq-answers {
          padding: 10px;
          background: #000000;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .faq-item {
          margin-bottom: 10px;
        }
        .faq-question {
          font-size: 18px;
          margin: 0 0 5px;
        }
        .faq-answer {
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
