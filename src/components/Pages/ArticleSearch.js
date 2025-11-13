import React, { useState } from 'react';
import Modal from 'react-modal';
import './ArticleSearch.css';
import Retrato1 from '../images/retrato1.jpg';
import Retrato2 from '../images/retrato2.jpg';
import Montana1 from '../images/montana1.jpg';
import iluminacion from '../images/iluminacion.png';
import marino from '../images/marino.jpg';
import ecommerce from '../images/ecommerce.jpg';
import Retrato3 from '../images/retrato3.jpg';
import Montana2 from '../images/montana2.jpg'
import joyas1 from '../images/joyas1.jpg';
import playa1 from '../images/playa1.jpg';
import moda1 from '../images/moda1.jpg'
import desierto1 from '../images/desierto1.png';
import nocturno1 from '../images/nocturno1.jpg';
import comida1 from '../images/comida1.jpg';
import bn from '../images/bn.jpg';
import tecno1 from '../images/tecno1.jpg';
import rural from '../images/rural.jpg';
import moda2 from '../images/moda2.jpg';
import invierno1 from '../images/invierno1.jpg';
import Retrato4 from '../images/retrato4.jpg';
import Retrato5 from '../images/retrato5.jpg';
import bosque1 from '../images/bosque1.jpg';
import producto1 from '../images/producto1.jpg';
import Retrato6 from '../images/retrato6.jpg';
import urbano1 from '../images/urbano1.jpg';
import costero1 from '../images/costero1.jpg';
import Retrato7 from '../images/retrato7.jpg';
import moda3 from '../images/moda3.jpg';
import montana3 from '../images/montana3.jpg';
import producto2 from '../images/producto2.jpg';
import Retrato8 from '../images/retrato8.jpg';
import paisaje1 from '../images/paisaje1.jpg';
import moda4 from '../images/moda4.jpg';
import Montana4 from '../images/montana4.jpg';
import producto3 from '../images/producto3.jpg';
import Retrato9 from '../images/retrato9.jpg';
import Montana5 from '../images/montana5.jpg';
import moda5 from '../images/moda5.jpg';
import marino2 from '../images/marino2.jpg';
import producto4 from '../images/producto4.jpg';
import Retrato10 from '../images/retrato10.jpg';
import Montana6 from '../images/montana6.jpg';
import Retrato11 from '../images/retrato11.jpg';
import paisaje2 from '../images/paisaje2.jpg';
import producto5 from '../images/producto5.jpg';
import Retrato12 from '../images/retrato12.jpg';
import Navbar from './Navbar';

// Datos precargados de artículos
const articles = [
  {
    id: 1,
    title: "Retrato en la ciudad",
    category: "Retratos",
    design: "NewYork",
    imgSrc: Retrato1,
    fragment: "Descubre la magia de la fotografía urbana en la ciudad de Nueva York...",
    longSummary: "El artículo de Sony Alpha Universe se centra en la fotografía urbana, que se enfoca en capturar la vida y arquitectura de la ciudad. A diferencia de la fotografía callejera, que se centra en personas, la fotografía urbana puede incluir paisajes urbanos, retratos en entornos urbanos y fotografía abstracta. Se dan consejos sobre el uso de la luz natural y artificial, la importancia de los colores, y cómo las condiciones climáticas pueden influir en las tomas.También se subraya el respeto a los derechos de imagen de las personas.",
    link: "https://www.sony.com.ar/alphauniverse/stories/conoce-la-fotografia-urbana"
  },
  {
    id: 2,
    title: "Fotografía de paisaje en la montaña",
    category: "Paisajes",
    design: "Tokyo",
    imgSrc: Montana1,
    fragment: "Fotografiar montañas es tan natural para cualquier fotógrafo que se encuentre ante ellas como el respirar.",
    longSummary: "El artículo Cómo fotografiar montañas de Blog del Fotógrafo ofrece consejos para capturar montañas de manera efectiva. Destaca la importancia de la planificación previa, la elección del equipo adecuado (como lentes gran angular y teleobjetivos), y el uso de filtros polarizadores y de densidad neutra. También se recomienda prestar atención a la luz y las condiciones climáticas, aprovechar las diferentes estaciones y momentos del día, y considerar la composición para añadir profundidad y perspectiva a las imágenes.",
    link: "https://www.blogdelfotografo.com/fotografiar-montanas"
  },
  {
    id: 3,
    title: "Técnicas de iluminación para fotografía de productos",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: iluminacion,
    fragment: "Cuando vas a hacer fotografía de producto, antes de prender las luces y la cámara, debes tener muy clara la intención de tus imágenes. ",
    longSummary: "El artículo del Centro Ático de la Pontificia Universidad Javeriana ofrece consejos para la iluminación en la fotografía de productos. Se destacan cuatro tipos de luz: principal, de relleno, contraluz y suave, cada una con diferentes funciones. Recomienda usar luz artificial para mayor control y realizar múltiples tomas del producto en distintas posiciones y esquemas de iluminación. Además, sugiere dedicar tiempo exclusivo a la fotografía de producto y experimentar con la iluminación y los ángulos. El Centro Ático ofrece recursos como cámaras y luces para proyectos fotográficos.",
    link: "https://www.javeriana.edu.co/atico/w/iluminacion-fotografia?redirect=%2Fweb%2Fatico%2Fnovedades"
  },
  {
    id: 4,
    title: "Retrato al aire libre",
    category: "Retratos",
    design: "Arizona",
    imgSrc: Retrato2,
    fragment: "¿Quién no ha hecho retratos al aire libre alguna vez? Piénsalo, cuando sales de paseo por ahí con tu cámara y vas con familiares o amigos...",
    longSummary: "El artículo ofrece cinco consejos para mejorar los retratos al aire libre: Buscar sombra y evitar la luz solar directa para evitar sombras no deseadas en el rostro. Aprovechar los días nublados, ya que las nubes actúan como difusores naturales. Usar un reflector 5 en 1 para controlar la iluminación. Considerar el uso de un flash externo para suavizar contrastes. Utilizar reflectores naturales, como paredes blancas o la arena, para mejorar la iluminación.",
    link: "https://www.dzoom.org.es/5-buenos-consejos-para-hacer-retratos-al-aire-libre/"
  },
  {
    id: 5,
    title: "Paisajes marinos",
    category: "Paisajes",
    design: "Sydney",
    imgSrc: marino,
    fragment: "Alrededor de las costas del mundo, existe un valiosísimo patrimonio dejado por civilizaciones pasadas que afectaron los entornos costeros y marinos.",
    longSummary: "El artículo El Paisaje Marino: Las Distintas Caras del Mar explora cómo las costas y los mares forman un patrimonio cultural valioso, que afecta la identidad de las regiones. Se distinguen paisajes marinos superficiales (costas, playas) y submarinos. El artículo enfatiza la importancia de preservar estos paisajes debido a su biodiversidad y el impacto cultural. Destaca cómo la percepción del mar varía dependiendo del entorno y cómo la interacción humana con el mar ha evolucionado, ahora enfocándose más en el ocio y la sostenibilidad.",
    link: "https://www.landuum.com/historia-y-cultura/el-paisaje-marino-las-distintas-caras-del-mar/"
  },
  {
    id: 6,
    title: "Fotografía de productos para ecommerce",
    category: "Fotografía de productos",
    design: "Cairo",
    imgSrc: ecommerce,
    fragment: "¿Has tenido que fotografiar productos para tu comercio electrónico o tienda virtual y se ha complicado por el tipo de productos que son? ",
    longSummary: "El artículo de TecnoSoluciones discute la importancia de la fotografía de productos para el comercio electrónico, destacando cómo una buena imagen puede influir en la decisión de compra del cliente. Se enfoca en la necesidad de fotos de alta calidad y profesionalismo, describiendo aspectos técnicos como la iluminación y el ángulo. También menciona la relevancia de la edición fotográfica para mejorar la presentación del producto y su impacto en el marketing y las ventas.",
    link: "https://tecnosoluciones.com/fotografia-de-productos-para-comercio-electronico-o-tienda-virtual/" 
  },
  {
    id: 7,
    title: "Retrato en el parque",
    category: "Retratos",
    design: "Venezia",
    imgSrc: Retrato3,
    fragment: "Captura la belleza de los retratos al aire libre en parques urbanos...",
    longSummary: "El artículo de Retrato en el parque se centra en capturar retratos al aire libre en entornos verdes y naturales. Ofrece consejos sobre el uso de la luz natural, la elección de ubicaciones adecuadas y la interacción con el sujeto para obtener fotos naturales y espontáneas.",
    link: "https://www.canon.es/pro/stories/pro-portrait-photography-tips/"
  },
  {
    id: 8,
    title: "Montañas nevadas",
    category: "Paisajes",
    design: "Tokyo",
    imgSrc: Montana2,
    fragment: "Las montañas nevadas ofrecen un paisaje impresionante para cualquier fotógrafo...",
    longSummary: "El artículo Montañas nevadas de Blog del Fotógrafo ofrece consejos para capturar paisajes de montañas nevadas. Destaca la importancia de proteger el equipo fotográfico del frío, el uso de filtros para mejorar la calidad de las imágenes y la planificación para capturar la luz adecuada en condiciones invernales.",
    link: "https://www.dsigno.es/blog/fotografia/fotografia-de-montana-que-es-y-caracteristicas"
  },
  {
    id: 9,
    title: "Iluminación en fotografía de joyas",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: joyas1,
    fragment: "La iluminación adecuada es clave para resaltar la belleza de las joyas...",
    longSummary: "El artículo del Centro Ático de la Pontificia Universidad Javeriana ofrece consejos para la iluminación en la fotografía de joyas. Se destacan técnicas para resaltar los detalles y el brillo de las joyas, el uso de luz continua y difusores, y la importancia de un fondo limpio y neutro.",
    link: "https://www.iphotography.com/blog/how-to-photograph-jewelry/"
  },
  {
    id: 10,
    title: "Retratos en la playa",
    category: "Retratos",
    design: "Arizona",
    imgSrc: playa1,
    fragment: "Los retratos en la playa capturan momentos relajados y naturales...",
    longSummary: "El artículo ofrece cinco consejos para mejorar los retratos en la playa: aprovechar la luz dorada del amanecer y atardecer, usar reflectores para controlar la luz, evitar las sombras fuertes, considerar el uso de flash para rellenar, y elegir fondos naturales que complementen al sujeto.",
    link: "https://www.blogdelfotografo.com/consejos-fotos-playa/"
  },
  {
    id: 11,
    title: "Paisajes costeros",
    category: "Paisajes",
    design: "Sydney",
    imgSrc: marino,
    fragment: "Las costas ofrecen una variedad de paisajes dinámicos y cambiantes...",
    longSummary: "El artículo Paisajes costeros explora la diversidad de paisajes en las zonas costeras, desde acantilados y playas hasta dunas y estuarios. Se enfoca en técnicas para capturar la interacción entre el mar y la tierra, la importancia de las mareas y las condiciones climáticas, y la planificación para aprovechar la luz natural.",
    link: "https://elblogdelviajero.com/las-10-costas-mas-espectaculares-del-mundo/"
  },
  {
    id: 12,
    title: "Fotografía de moda en exteriores",
    category: "Moda",
    design: "Milan",
    imgSrc: moda1,
    fragment: "La fotografía de moda en exteriores combina la elegancia de la moda con la belleza natural...",
    longSummary: "El artículo ofrece consejos sobre cómo capturar imágenes de moda en exteriores, destacando la importancia de la elección del lugar, la hora del día, y el uso de la luz natural. También se menciona la coordinación entre el fotógrafo, el modelo y el equipo de moda para asegurar que la visión creativa se traduzca en imágenes impactantes.",
    link: "hhttps://mediamakerspro.com/fotografia-de-moda-conoce-sus-tipos-y-caracteristicas/"
  },
  {
    id: 13,
    title: "Paisajes desérticos",
    category: "Paisajes",
    design: "Cairo",
    imgSrc: desierto1,
    fragment: "Los desiertos ofrecen paisajes únicos y llenos de contrastes...",
    longSummary: "El artículo Paisajes desérticos de Blog del Fotógrafo ofrece consejos para fotografiar desiertos. Se enfoca en la importancia de la planificación para evitar las horas más calurosas, el uso de lentes adecuados para capturar la inmensidad del paisaje, y técnicas para proteger el equipo de la arena y el polvo.",
    link: "https://www.grupoalgalia.es/paisaje-desertico-fotos-impresionantes-y-gratis/"
  },
  {
    id: 14,
    title: "Fotografía de retratos en estudio",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato4,
    fragment: "La fotografía de retratos en estudio permite un control total de la iluminación y el ambiente...",
    longSummary: "El artículo ofrece una guía completa para la fotografía de retratos en estudio, destacando la importancia de la iluminación controlada, los fondos adecuados, y la dirección del sujeto para obtener retratos impactantes. Se mencionan diferentes esquemas de iluminación y técnicas para interactuar con el modelo.",
    link: "https://www.dzoom.org.es/retrato-de-estudio-un-genero-muy-versatil/"
  },
  {
    id: 15,
    title: "Paisajes urbanos nocturnos",
    category: "Paisajes",
    design: "NewYork",
    imgSrc: nocturno1,
    fragment: "La fotografía de paisajes urbanos nocturnos captura la magia de las ciudades iluminadas...",
    longSummary: "El artículo Paisajes urbanos nocturnos de Blog del Fotógrafo ofrece consejos para capturar la vida nocturna de las ciudades. Destaca la importancia del uso de trípode, la elección de la hora adecuada para evitar multitudes, y técnicas para manejar la exposición y el balance de blancos en condiciones de baja luz.",
    link: "https://www.interempresas.net/Iluminacion/Articulos/345949-Hablemos-de-paisajes-nocturnos.html"
  },
  {
    id: 16,
    title: "Fotografía de alimentos",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: comida1,
    fragment: "La fotografía de alimentos es un arte que combina la gastronomía con la fotografía...",
    longSummary: "El artículo del Centro Ático de la Pontificia Universidad Javeriana ofrece consejos para la fotografía de alimentos, destacando la importancia de la iluminación, el uso de colores vibrantes y la composición creativa. Se mencionan técnicas para hacer que los alimentos luzcan apetitosos y cómo evitar errores comunes.",
    link: "https://www.blogdelfotografo.com/fotografia-gastronomica-2/"
  },
  {
    id: 17,
    title: "Retratos en blanco y negro",
    category: "Retratos",
    design: "Venezia",
    imgSrc: bn,
    fragment: "La fotografía en blanco y negro añade un toque clásico y atemporal a los retratos...",
    longSummary: "El artículo ofrece consejos sobre cómo capturar retratos impactantes en blanco y negro, destacando la importancia del contraste, la textura y la iluminación. Se menciona la edición como una herramienta clave para resaltar los detalles y la emoción en las fotografías.",
    link: "https://www.blogdelfotografo.com/blanco-negro/"
  },
  {
    id: 18,
    title: "Fotografía de productos tecnológicos",
    category: "Fotografía de productos",
    design: "Tokyo",
    imgSrc: tecno1,
    fragment: "La fotografía de productos tecnológicos requiere atención al detalle y precisión...",
    longSummary: "El artículo ofrece consejos para capturar imágenes de productos tecnológicos, destacando la importancia de la iluminación controlada, el uso de fondos neutros y la necesidad de resaltar las características técnicas del producto. Se menciona la edición para eliminar reflejos y mejorar la presentación del producto.",
    link: "https://es.packshot-creator.com/industry/fotografia-producto-tecnicos/"
  },
  {
    id: 19,
    title: "Paisajes rurales",
    category: "Paisajes",
    design: "Sydney",
    imgSrc: rural,
    fragment: "Los paisajes rurales ofrecen una belleza tranquila y serena...",
    longSummary: "El artículo Paisajes rurales de Blog del Fotógrafo ofrece consejos para capturar la esencia de la vida rural, destacando la importancia de la luz natural, la elección de composiciones que incluyan elementos como campos, granjas y animales, y la paciencia para esperar el momento perfecto.",
    link: "https://www.blogdelfotografo.com/consejos-trucos-fotografia-paisaje/"
  },
  {
    id: 20,
    title: "Fotografía de moda en estudio",
    category: "Moda",
    design: "Milan",
    imgSrc: moda2,
    fragment: "La fotografía de moda en estudio permite un control total sobre todos los aspectos de la sesión...",
    longSummary: "El artículo ofrece una guía completa para la fotografía de moda en estudio, destacando la importancia de la iluminación, la elección de fondos y accesorios, y la dirección del modelo. Se mencionan diferentes esquemas de iluminación y técnicas para capturar imágenes impactantes que resalten la moda y el estilo.",
    link: "https://www.dsigno.es/blog/diseno-de-moda/la-fotografia-de-moda"
  },
  {
    id: 21,
    title: "Paisajes invernales",
    category: "Paisajes",
    design: "Cairo",
    imgSrc: invierno1,
    fragment: "Los paisajes invernales ofrecen una belleza única y desafiante para los fotógrafos...",
    longSummary: "El artículo Paisajes invernales de Blog del Fotógrafo ofrece consejos para capturar la belleza del invierno, destacando la importancia de proteger el equipo del frío, el uso de filtros para mejorar la calidad de las imágenes, y la planificación para aprovechar la luz adecuada en condiciones de nieve y hielo.",
    link: "https://www.blogdelfotografo.com/consejos-para-fotografiar-paisajes-invernales/"
  },
  {
    id: 22,
    title: "Fotografía de retratos con luz natural",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato5,
    fragment: "La luz natural ofrece una calidad única para la fotografía de retratos...",
    longSummary: "El artículo ofrece consejos sobre cómo utilizar la luz natural para capturar retratos impactantes, destacando la importancia de la hora del día, la dirección de la luz, y la elección de ubicaciones adecuadas. Se mencionan técnicas para suavizar la luz y evitar sombras no deseadas.",
    link: "https://www.blogdelfotografo.com/reto-semanal-43-retrato-luz-natural/"
  },
  {
    id: 23,
    title: "Paisajes de bosques",
    category: "Paisajes",
    design: "NewYork",
    imgSrc: bosque1,
    fragment: "Los bosques ofrecen un sinfín de oportunidades para la fotografía de paisajes...",
    longSummary: "El artículo Paisajes de bosques de Dzoom ofrece consejos para capturar la belleza de los bosques, destacando la importancia de la luz natural, la elección de composiciones que incluyan elementos como árboles, caminos y ríos, y la paciencia para esperar el momento perfecto.",
    link: "https://www.dzoom.org.es/8-buenas-ideas-para-hacer-fotos-en-un-bosque/"
  },
  {
    id: 24,
    title: "Fotografía de productos para catálogos",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: producto1,
    fragment: "La fotografía de productos para catálogos requiere atención al detalle y consistencia...",
    longSummary: "El artículo del Centro Ático de la Pontificia Universidad Javeriana ofrece consejos para la fotografía de productos para catálogos, destacando la importancia de la iluminación controlada, el uso de fondos neutros y la necesidad de resaltar las características del producto. Se menciona la edición para eliminar reflejos y mejorar la presentación del producto.",
    link: "https://catalogosparaempresas.com/blog/fotografia-de-producto/"
  },
  {
    id: 25,
    title: "Retratos de estudio con luz artificial",
    category: "Retratos",
    design: "Venezia",
    imgSrc: Retrato6,
    fragment: "La luz artificial ofrece un control total para la fotografía de retratos en estudio...",
    longSummary: "El artículo ofrece una guía completa para la fotografía de retratos en estudio con luz artificial, destacando la importancia de la iluminación controlada, los fondos adecuados, y la dirección del sujeto para obtener retratos impactantes. Se mencionan diferentes esquemas de iluminación y técnicas para interactuar con el modelo.",
    link: "https://www.blogdelfotografo.com/fotografiar-interior-luz/"
  },
  {
    id: 26,
    title: "Paisajes de montaña en otoño",
    category: "Paisajes",
    design: "Tokyo",
    imgSrc: Montana1,
    fragment: "El otoño ofrece colores vibrantes y una luz suave perfecta para la fotografía de paisajes de montaña...",
    longSummary: "El artículo Paisajes de montaña en otoño de Blog del Fotógrafo ofrece consejos para capturar la belleza del otoño en las montañas, destacando la importancia de la planificación para aprovechar los colores de la temporada, el uso de filtros polarizadores para mejorar el contraste, y la elección de composiciones que incluyan elementos como árboles, ríos y caminos.",
    link: "https://www.blogdelfotografo.com/ajustes-otono/"
  },
  {
    id: 27,
    title: "Fotografía de moda en exteriores urbanos",
    category: "Moda",
    design: "Milan",
    imgSrc: urbano1,
    fragment: "La fotografía de moda en exteriores urbanos combina la elegancia de la moda con la energía de la ciudad...",
    longSummary: "El artículo ofrece consejos sobre cómo capturar imágenes de moda en exteriores urbanos, destacando la importancia de la elección del lugar, la hora del día, y el uso de la luz natural. También se menciona la coordinación entre el fotógrafo, el modelo y el equipo de moda para asegurar que la visión creativa se traduzca en imágenes impactantes.",
    link: "https://www.sony.com.hn/alphauniverse/stories/como-hacer-fotografias-de-moda-en-locaciones"
  },
  {
    id: 28,
    title: "Paisajes costeros al atardecer",
    category: "Paisajes",
    design: "Cairo",
    imgSrc: costero1,
    fragment: "El atardecer ofrece una luz cálida y dorada perfecta para la fotografía de paisajes costeros...",
    longSummary: "El artículo Paisajes costeros al atardecer de Blog del Fotógrafo ofrece consejos para capturar la belleza de las costas al atardecer, destacando la importancia de la planificación para aprovechar la luz dorada, el uso de trípode para evitar movimientos, y la elección de composiciones que incluyan elementos como rocas, agua y cielos.",
    link: "https://www.format.com/es/magazine/resources/photography/sunset-photography"
  },
  {
    id: 29,
    title: "Fotografía de productos con fondo blanco",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: ecommerce,
    fragment: "El fondo blanco es ideal para resaltar los productos en la fotografía de ecommerce...",
    longSummary: "El artículo del Bambu light box ofrece consejos para la fotografía de productos con fondo blanco, destacando la importancia de la iluminación controlada, el uso de fondos neutros y la necesidad de resaltar las características del producto. Se menciona la edición para eliminar reflejos y mejorar la presentación del producto.",
    link: "https://bambulightbox.com/fotos-fondo-blanco/"
  },
  {
    id: 30,
    title: "Retratos con luz de ventana",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato7,
    fragment: "La luz de ventana ofrece una calidad suave y difusa ideal para la fotografía de retratos...",
    longSummary: "El artículo ofrece consejos sobre cómo utilizar la luz de ventana para capturar retratos impactantes, destacando la importancia de la dirección de la luz, la elección de ubicaciones adecuadas, y técnicas para suavizar la luz y evitar sombras no deseadas.",
    link: "https://www.blogdelfotografo.com/ventanas-retrato/"
  },
  {
    id: 31,
    title: "Paisajes de montaña en invierno",
    category: "Paisajes",
    design: "NewYork",
    imgSrc: Montana2,
    fragment: "El invierno ofrece paisajes de montaña cubiertos de nieve y hielo perfectos para la fotografía...",
    longSummary: "El artículo Paisajes de montaña en invierno de Blog del Fotógrafo ofrece consejos para capturar la belleza del invierno en las montañas, destacando la importancia de proteger el equipo del frío, el uso de filtros para mejorar la calidad de las imágenes, y la planificación para aprovechar la luz adecuada en condiciones de nieve y hielo.",
    link: "https://www.sony.es/alphauniverse/stories/cool-shots-winter-landscapes"
  },
  {
    id: 32,
    title: "Fotografía de moda en exteriores naturales",
    category: "Moda",
    design: "Milan",
    imgSrc: moda3,
    fragment: "La fotografía de moda en exteriores naturales combina la elegancia de la moda con la belleza del paisaje...",
    longSummary: "El artículo ofrece consejos sobre cómo capturar imágenes de moda en exteriores naturales, destacando la importancia de la elección del lugar, la hora del día, y el uso de la luz natural. También se menciona la coordinación entre el fotógrafo, el modelo y el equipo de moda para asegurar que la visión creativa se traduzca en imágenes impactantes.",
    link: "https://workshopexperience.com/fotografia-moda-exteriores/"
  },
  {
    id: 33,
    title: "Paisajes de montaña al amanecer",
    category: "Paisajes",
    design: "Tokyo",
    imgSrc: montana3,
    fragment: "El amanecer ofrece una luz suave y colores vibrantes perfectos para la fotografía de paisajes de montaña...",
    longSummary: "El artículo Paisajes de montaña al amanecer de Blog del Fotógrafo ofrece consejos para capturar la belleza del amanecer en las montañas, destacando la importancia de la planificación para aprovechar la luz dorada, el uso de trípode para evitar movimientos, y la elección de composiciones que incluyan elementos como árboles, ríos y cielos.",
    link: "https://www.blogdelfotografo.com/fotografia-montanas/"
  },
  {
    id: 34,
    title: "Fotografía de productos con luz natural",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: producto2,
    fragment: "La luz natural ofrece una calidad única para la fotografía de productos...",
    longSummary: "El artículo de Shopify ofrece consejos para la fotografía de productos con luz natural, destacando la importancia de la hora del día, la dirección de la luz, y la elección de ubicaciones adecuadas. Se mencionan técnicas para suavizar la luz y evitar sombras no deseadas.",
    link: "https://www.shopify.com/es/blog/fotografia-de-productos-con-buena-iluminacion-natural"
  },
  {
    id: 35,
    title: "Retratos en exteriores con luz natural",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato8,
    fragment: "La luz natural ofrece una calidad única para la fotografía de retratos en exteriores...",
    longSummary: "El artículo ofrece consejos sobre cómo utilizar la luz natural para capturar retratos impactantes en exteriores, destacando la importancia de la hora del día, la dirección de la luz, y la elección de ubicaciones adecuadas. Se mencionan técnicas para suavizar la luz y evitar sombras no deseadas.",
    link: "https://www.blogdelfotografo.com/fondos-retratos-exteriores/"
  },
  {
    id: 36,
    title: "Paisajes de montaña en primavera",
    category: "Paisajes",
    design: "NewYork",
    imgSrc: paisaje1,
    fragment: "La primavera ofrece colores vibrantes y una luz suave perfecta para la fotografía de paisajes de montaña...",
    longSummary: "El artículo Paisajes de montaña en primavera de Forum sport ofrece consejos para capturar la belleza de la primavera en las montañas, destacando la importancia de la planificación para aprovechar los colores de la temporada, el uso de filtros polarizadores para mejorar el contraste, y la elección de composiciones que incluyan elementos como árboles, ríos y caminos.",
    link: "https://www.forumsport.com/es-es/blogs/montana/fotografia-de-paisajes-de-montana-como-lograr-foto-perfecta/"
  },
  {
    id: 37,
    title: "Fotografía de moda en exteriores al aire libre",
    category: "Moda",
    design: "Milan",
    imgSrc: moda4,
    fragment: "La fotografía de moda en exteriores al aire libre combina la elegancia de la moda con la belleza natural...",
    longSummary: "El artículo ofrece consejos sobre cómo capturar imágenes de moda en exteriores al aire libre, destacando la importancia de la elección del lugar, la hora del día, y el uso de la luz natural. También se menciona la coordinación entre el fotógrafo, el modelo y el equipo de moda para asegurar que la visión creativa se traduzca en imágenes impactantes.",
    link: "https://www.crehana.com/blog/estilo-vida/fotografia-de-moda/"
  },
  {
    id: 38,
    title: "Paisajes montañosos en verano",
    category: "Paisajes",
    design: "Tokyo",
    imgSrc: Montana4,
    fragment: "El verano ofrece paisajes montañosos vibrantes y llenos de vida perfectos para la fotografía...",
    longSummary: "El artículo Paisajes montañosos en verano de Blog del Fotógrafo ofrece consejos para capturar la belleza del verano en las montañas, destacando la importancia de la planificación para aprovechar los colores de la temporada, el uso de filtros polarizadores para mejorar el contraste, y la elección de composiciones que incluyan elementos como árboles, ríos y caminos.",
    link: "https://lastrafoto.com/la-fotografia-en-la-montana"
  },
  {
    id: 39,
    title: "Fotografía de productos con luz artificial",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: producto3,
    fragment: "La luz artificial permite un control total para la fotografía de productos...",
    longSummary: "El artículo del Centro Ático de la Pontificia Universidad Javeriana ofrece consejos para la fotografía de productos con luz artificial, destacando la importancia de la iluminación controlada, el uso de fondos neutros y la necesidad de resaltar las características del producto. Se menciona la edición para eliminar reflejos y mejorar la presentación del producto.",
    link: "https://www.javeriana.edu.co/atico/w/fotografia-de-productos-con-luz-artificial?redirect=%2Fweb%2Fatico%2Fnovedades"
  },
  {
    id: 40,
    title: "Retratos con luz de atardecer",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato9,
    fragment: "La luz de atardecer ofrece una calidad cálida y suave ideal para la fotografía de retratos...",
    longSummary: "El artículo ofrece consejos sobre cómo utilizar la luz de atardecer para capturar retratos impactantes, destacando la importancia de la dirección de la luz, la elección de ubicaciones adecuadas, y técnicas para suavizar la luz y evitar sombras no deseadas.",
    link: "https://www.dzoom.org.es/claves-retrato-atardecer/"
  },
  {
    id: 41,
    title: "Paisajes de montaña al mediodía",
    category: "Paisajes",
    design: "NewYork",
    imgSrc: Montana5,
    fragment: "El mediodía ofrece una luz intensa y colores brillantes perfectos para la fotografía de paisajes de montaña...",
    longSummary: "El artículo Paisajes de montaña al mediodía de Blog del Fotógrafo ofrece consejos para capturar la belleza del mediodía en las montañas, destacando la importancia de la planificación para aprovechar la luz intensa, el uso de filtros para mejorar la calidad de las imágenes, y la elección de composiciones que incluyan elementos como árboles, ríos y cielos.",
    link: "https://www.blogdelfotografo.com/fotografia-montanas/"
  },
  {
    id: 42,
    title: "Fotografía de moda en interiores",
    category: "Moda",
    design: "Milan",
    imgSrc: moda5,
    fragment: "La fotografía de moda en interiores permite un control total sobre todos los aspectos de la sesión...",
    longSummary: "El artículo ofrece una guía completa para la fotografía de moda en interiores, destacando la importancia de la iluminación, la elección de fondos y accesorios, y la dirección del modelo. Se mencionan diferentes esquemas de iluminación y técnicas para capturar imágenes impactantes que resalten la moda y el estilo.",
    link: "https://www.blogdelfotografo.com/consejos-iniciacion-fotografia-moda/"
  },
  {
    id: 43,
    title: "Paisajes costeros en primavera",
    category: "Paisajes",
    design: "Cairo",
    imgSrc: marino2,
    fragment: "La primavera ofrece una luz suave y colores vibrantes perfectos para la fotografía de paisajes costeros...",
    longSummary: "El artículo Paisajes costeros en primavera de Blog del Fotógrafo ofrece consejos para capturar la belleza de las costas en primavera, destacando la importancia de la planificación para aprovechar la luz adecuada, el uso de trípode para evitar movimientos, y la elección de composiciones que incluyan elementos como rocas, agua y cielos.",
    link: "https://www.photopills.com/es/articulos/guia-fotografia-paisaje-de-costa"
  },
  {
    id: 44,
    title: "Fotografía de productos con fondo negro",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: producto4,
    fragment: "El fondo negro es ideal para resaltar los productos en la fotografía de ecommerce...",
    longSummary: "El artículo del Dzoom ofrece consejos para la fotografía de productos con fondo negro, destacando la importancia de la iluminación controlada, el uso de fondos neutros y la necesidad de resaltar las características del producto. Se menciona la edición para eliminar reflejos y mejorar la presentación del producto.",
    link: "https://www.dzoom.org.es/como-conseguir-realizar-fotografias-con-un-fondo-completamente-negro/"
  },
  {
    id: 45,
    title: "Retratos con luz de estudio",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato10,
    fragment: "La luz de estudio ofrece un control total para la fotografía de retratos...",
    longSummary: "El artículo ofrece una guía completa para la fotografía de retratos con luz de estudio, destacando la importancia de la iluminación controlada, los fondos adecuados, y la dirección del sujeto para obtener retratos impactantes. Se mencionan diferentes esquemas de iluminación y técnicas para interactuar con el modelo.",
    link: "https://www.sony.com.bo/alphauniverse/stories/conoce-los-mejores-esquemas-de-iluminacion-para-retratos"
  },
  {
    id: 46,
    title: "Paisajes de montaña en otoño",
    category: "Paisajes",
    design: "NewYork",
    imgSrc: Montana6,
    fragment: "El otoño ofrece colores vibrantes y una luz suave perfecta para la fotografía de paisajes de montaña...",
    longSummary: "El artículo Paisajes de montaña en otoño de National Geographic ofrece consejos para capturar la belleza del otoño en las montañas, destacando la importancia de la planificación para aprovechar los colores de la temporada, el uso de filtros polarizadores para mejorar el contraste, y la elección de composiciones que incluyan elementos como árboles, ríos y caminos.",
    link: "https://www.nationalgeographic.com.es/fotografia/paisaje-color-otono-desmontando-fotografia_20902"
  },
  {
    id: 47,
    title: "Fotografía de moda en exteriores urbanos nocturnos",
    category: "Moda",
    design: "Milan",
    imgSrc: Retrato11,
    fragment: "La fotografía de moda en exteriores urbanos nocturnos combina la elegancia de la moda con la energía de la ciudad...",
    longSummary: "El artículo ofrece consejos sobre cómo capturar imágenes de moda en exteriores urbanos nocturnos, destacando la importancia de la elección del lugar, la hora del día, y el uso de la luz artificial. También se menciona la coordinación entre el fotógrafo, el modelo y el equipo de moda para asegurar que la visión creativa se traduzca en imágenes impactantes.",
    link: "https://www.blogdelfotografo.com/fondos-retratos-exteriores/"
  },
  {
    id: 48,
    title: "Paisajes costeros en invierno",
    category: "Paisajes",
    design: "Cairo",
    imgSrc: paisaje2,
    fragment: "El invierno ofrece una luz suave y una atmósfera única perfecta para la fotografía de paisajes costeros...",
    longSummary: "El artículo Paisajes costeros en invierno de Blog del Fotógrafo ofrece consejos para capturar la belleza de las costas en invierno, destacando la importancia de la planificación para aprovechar la luz adecuada, el uso de trípode para evitar movimientos, y la elección de composiciones que incluyan elementos como rocas, agua y cielos.",
    link: "https://www.blogdelfotografo.com/consejos-para-fotografiar-paisajes-invernales/"
  },
  {
    id: 49,
    title: "Fotografía de productos con fondo de colores",
    category: "Fotografía de productos",
    design: "Bangkok",
    imgSrc: producto5,
    fragment: "El fondo de colores es ideal para resaltar los productos en la fotografía de ecommerce...",
    longSummary: "El artículo del Bruma creativa ofrece consejos para la fotografía de productos con fondo de colores, destacando la importancia de la iluminación controlada, el uso de fondos neutros y la necesidad de resaltar las características del producto. Se menciona la edición para eliminar reflejos y mejorar la presentación del producto.",
    link: "https://www.brumacreativa.com/2024/04/01/descubre-por-que-usar-fondos-de-colores-con-luz-es-la-clave-para-destacar-tus-productos/"
  },
  {
    id: 50,
    title: "Retratos con luz natural en interiores",
    category: "Retratos",
    design: "Paris",
    imgSrc: Retrato12,
    fragment: "La luz natural en interiores ofrece una calidad única ideal para la fotografía de retratos...",
    longSummary: "El artículo ofrece consejos sobre cómo utilizar la luz natural en interiores para capturar retratos impactantes, destacando la importancia de la dirección de la luz, la elección de ubicaciones adecuadas, y técnicas para suavizar la luz y evitar sombras no deseadas.",
    link: "https://www.blogdelfotografo.com/trucos-retrato-luz-interior/"
  }
];

const categories = ["Todas las categorias", "Retratos", "Paisajes", "Fotografía de productos"];
const designs = ["Todos los diseños", "NewYork", "Bangkok", "Tokyo", "Arizona", "Cairo", "Sydney", "Venezia"];

Modal.setAppElement('#root');

const ArticleSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorias");
  const [selectedDesign, setSelectedDesign] = useState("Todos los diseños");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterArticles(category, selectedDesign, searchTerm);
  };

  const handleDesignChange = (design) => {
    setSelectedDesign(design);
    filterArticles(selectedCategory, design, searchTerm);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterArticles(selectedCategory, selectedDesign, term);
  };

  const filterArticles = (category, design, term) => {
    let filtered = articles;
    if (category !== "Todas las categorias") {
      filtered = filtered.filter(article => article.category === category);
    }
    if (design !== "Todos los diseños") {
      filtered = filtered.filter(article => article.design === design);
    }
    if (term !== "") {
      filtered = filtered.filter(article => article.title.toLowerCase().includes(term.toLowerCase()));
    }
    setFilteredArticles(filtered);
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedArticle(null);
  };

  return (
    <><Navbar />
    <div className="article-search">
      <h1>Buscador de Artículos</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar" />
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} className="filter-dropdown">
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select value={selectedDesign} onChange={(e) => handleDesignChange(e.target.value)} className="filter-dropdown">
          {designs.map(design => (
            <option key={design} value={design}>{design}</option>
          ))}
        </select>
      </div>
      <div className="article-list">
        {filteredArticles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.imgSrc} alt={article.title} />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.fragment}</p>
              <button onClick={() => openModal(article)} className="read-more-button">Leer más</button>
            </div>
          </div>
        ))}
      </div>
      {selectedArticle && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Artículo"
          className="article-modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedArticle.title}</h2>
          <img src={selectedArticle.imgSrc} alt={selectedArticle.title} className="modal-img" />
          <p>{selectedArticle.longSummary}</p>
          <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer">Leer más en la fuente</a>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      )}
    </div></>
  );
};

export default ArticleSearch;
