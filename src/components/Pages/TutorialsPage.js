import React, { useState } from 'react';
import '../Pages/TutorialsPage.css';
import Navbar from './Navbar';


const tutorials = [
    {
        id: 1,
        title: 'Introducción a la Fotografía',
        category: 'Básico',
        difficulty: 'Fácil',
        description: 'Aprende los conceptos básicos de la fotografía.',
        youtubeLink: 'https://www.youtube.com/watch?v=Ar_h-uwUvDs&t=1s'
    },
    {
        id: 2,
        title: 'Técnicas Avanzadas de Iluminación',
        category: 'Iluminación',
        difficulty: 'Difícil',
        description: 'Domina técnicas avanzadas para controlar la iluminación en tus fotos.',
        youtubeLink: 'https://www.youtube.com/watch?v=4PXwTagNNUI'
    },
    {
        id: 3,
        title: 'Balance de Blancos',
        category: 'Colores',
        difficulty: 'Fácil',
        description: 'Cómo usar el BALANCE DE BLANCOS y la TEMPERATURA DE COLOR en la FOTOGRAFÍA y el VIDEO',
        youtubeLink: 'https://www.youtube.com/watch?v=GBDlNxIqqmI&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=3'
    },
    {
        id: 4,
        title: 'Tipos de Iluminación',
        category: 'Iluminación',
        difficulty: 'Intermedio',
        description: '6 Tipos de iluminación con 1 sola luz',
        youtubeLink: 'https://www.youtube.com/watch?v=s7T3N_mAcWY&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=6'
    },
    {
        id: 5,
        title: 'Fotografía de moda',
        category: 'Básico',
        difficulty: 'Fácil',
        description: 'Guía para PRINCIPIANTES sobre FOTOGRAFÍA DE MODA y colaborar con modelos.',
        youtubeLink: 'https://www.youtube.com/watch?v=L6us6hIyl3c&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=36'
    },
    {
        id: 6,
        title: 'Lightroom',
        category: 'Iluminación',
        difficulty: 'Fácil',
        description: 'LIGHTROOM PARA PRINCIPIANTES - Todo lo básico en 15 minutos!',
        youtubeLink: 'https://www.youtube.com/watch?v=TExX4lYiJ4s&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=13'
    },
    {
        id: 7,
        title: 'Filtros',
        category: 'Colores',
        difficulty: 'Intermedio',
        description: 'Para esto sirven los FILTROS en las cámaras',
        youtubeLink: 'https://www.youtube.com/watch?v=maQg56AY8JA&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=3'
    },
    {
        id: 8,
        title: 'Poses para fotos',
        category: 'Poses',
        difficulty: 'Fácil',
        description: '8 POSES PARA FOTOS │Como posar y guiar para siempre verse perfecto!',
        youtubeLink: 'https://www.youtube.com/watch?v=AFIFmnebUpQ&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=4'
    },
    {
        id: 9,
        title: 'Poses para Hombres',
        category: 'Poses',
        difficulty: 'Fácil',
        description: '6 POSES PARA HOMBRES │ Como posar y guiar para siempre verse perfecto en las fotos!',
        youtubeLink: 'https://www.youtube.com/watch?v=YJTTGo_IQqg&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=27'
    },
    {
        id: 10,
        title: 'Editar Piel',
        category: 'Edicion',
        difficulty: 'Fácil',
        description: 'Como editar y retocar piel fácil y rápido!',
        youtubeLink: 'https://www.youtube.com/watch?v=3JNGNF0-nKw&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=5'
    },
    {
        id: 11,
        title: 'Edicion movil',
        category: 'Retratos',
        difficulty: 'Fácil',
        description: 'Como EDITAR FOTOS en tu TELÉFONO (Lightroom Mobile)',
        youtubeLink: 'https://www.youtube.com/watch?v=8pN14_n5LT0&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=8'
    },
    {
        id: 12,
        title: 'Lentes fotograficos',
        category: 'Lentes',
        difficulty: 'Intermedio',
        description: 'Qué significan los NÚMEROS y LETRAS en los LENTES?',
        youtubeLink: 'https://www.youtube.com/watch?v=9qfyF-lBUXs&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=9'
    },
    {
        id: 13,
        title: 'Fotografia movil',
        category: 'Movil',
        difficulty: 'Intermedio',
        description: 'Como hacer FOTOS PRO con el TELÉFONO MÓVIL!',
        youtubeLink: 'https://www.youtube.com/watch?v=MDxql_q7zZs&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=10'
    },
    {
        id: 14,
        title: 'Autoretratos en casa',
        category: 'Retratos',
        difficulty: 'Intermedio',
        description: 'COMO HACERTE FOTOS EN CASA (autorretrato)',
        youtubeLink: 'https://www.youtube.com/watch?v=-XtQwdgA36s&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=11'
    },
    {
        id: 15,
        title: 'Planos fotograficos',
        category: 'Configuración',
        difficulty: 'Intermedio',
        description: '13 PLANOS de la FOTOGRAFÍA que debes conocer!',
        youtubeLink: 'https://www.youtube.com/watch?v=vqxgn8IbNa4&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=11'
    },
    {
        id: 16,
        title: 'Primera camara',
        category: 'Configuracion',
        difficulty: 'Difícil',
        description: 'GUÍA para elegir tu PRIMERA CÁMARA como principiante',
        youtubeLink: 'https://www.youtube.com/watch?v=IJWbO3z0AEE&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=12'
    },
    {
        id: 17,
        title: 'Flash o luz continua',
        category: 'Iluminacion',
        difficulty: 'Intermedio',
        description: '¿Qué es mejor FLASH ó LUZ CONTINUA? (Godox fv150)',
        youtubeLink: 'https://www.youtube.com/watch?v=rP9ELgP59gg&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=14'
    },
    {
        id: 18,
        title: 'Introducción a la fotografía de paisajes',
        category: 'Basico',
        difficulty: 'Fácil',
        description: 'Como FOTOGRAFIAR ESTRELLAS y la Via Láctea!',
        youtubeLink: 'https://www.youtube.com/watch?v=iQ7I7DknJ64&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=15'
    },
    {
        id: 19,
        title: 'Consejos para fotografía de calle',
        category: 'Técnicas',
        difficulty: 'Intermedio',
        description: 'Diferencias entre Raw y JPG',
        youtubeLink: 'https://www.youtube.com/watch?v=MtF9AnBA6fY&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=16'
    },
    {
        id: 20,
        title: 'Sensor de camara',
        category: 'Configuracion',
        difficulty: 'Fácil',
        description: 'Como LIMPIAR EL SENSOR de tu cámara!',
        youtubeLink: 'https://www.youtube.com/watch?v=eVgLybQtIkM&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=17'
    },
    {
        id: 21,
        title: 'Estilo Cyber-Punk',
        category: 'Edicion',
        difficulty: 'Fácil',
        description: 'Editar una foto estilo: CYBER PUNK - BLADE RUNNER - NEON - Tutorial Photoshop',
        youtubeLink: 'https://www.youtube.com/watch?v=EBwLiIc7Zgg&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=19'
    },
    {
        id: 22,
        title: 'Lentes Fotograficos',
        category: 'Configuracion',
        difficulty: 'Intermedio',
        description: '¿PARA QUÉ SIRVE ESTO?',
        youtubeLink: 'https://www.youtube.com/watch?v=M6AV3nfU6Eg&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=19'
    },
    {
        id: 23,
        title: 'Ideas creativas',
        category: 'Básico',
        difficulty: 'Intermedio',
        description: '5 IDEAS CREATIVAS para FOTOS en 2 MINUTOS!',
        youtubeLink: 'https://www.youtube.com/watch?v=zQFB44MdN-U&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=20'
    },
    {
        id: 24,
        title: 'Trucos en instagram',
        category: 'Movil',
        difficulty: 'Fácil',
        description: '4 Trucos INCREIBLES que NO CONOCES en INSTAGRAM',
        youtubeLink: 'https://www.youtube.com/watch?v=ivT6N-NsF2M&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=21'
    },
    {
        id: 25,
        title: 'Composicion',
        category: 'Iluminacion',
        difficulty: 'Fácil',
        description: 'MEJORA TUS FOTOS Y VIDEOS con este simple TRUCO (composición)',
        youtubeLink: 'https://www.youtube.com/watch?v=Cu9ocpe0SrY&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=23'
    },
    {
        id: 26,
        title: 'Exposicion',
        category: 'Iluminacion',
        difficulty: 'Fácil',
        description: 'Como hacer FOTOS de LARGA EXPOSICIÓN o DE NOCHE',
        youtubeLink: 'https://www.youtube.com/watch?v=4Ny_rc4aGDw&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=24'
    },
    {
        id: 27,
        title: 'Bokeh',
        category: 'Básico',
        difficulty: 'Intermedio',
        description: 'Qué es un BOKEH??? y como hacerlo!!! (fondo borroso)',
        youtubeLink: 'https://www.youtube.com/watch?v=zdi8KifNHFU&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=25'
    },
    {
        id: 28,
        title: 'MM en los Lentes',
        category: 'Configuracion',
        difficulty: 'Intermedio',
        description: 'Qué son los MM en los lentes y cual es la diferencia?',
        youtubeLink: 'https://www.youtube.com/watch?v=WjIYMRIjJI4&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=26'
    },
    {
        id: 29,
        title: 'Accesorios',
        category: 'Básico',
        difficulty: 'Intermedio',
        description: '10 Accesorios ESCENCIALES PARA FOTOS Y VIDEOS│Por Menos De 15$',
        youtubeLink: 'https://www.youtube.com/watch?v=oY93MSpr0Ug&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=28'
    },
    {
        id: 30,
        title: 'Look cinematografico',
        category: 'Técnicas',
        difficulty: 'Intermedio',
        description: 'Así creas un LOOK CINEMATOGRÁFICO con un simple filtro.',
        youtubeLink: 'https://www.youtube.com/watch?v=c8nXqxOo-pY&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=29'
    },
    {
        id: 31,
        title: 'Truco para mejorar las fotos',
        category: 'Básico',
        difficulty: 'Fácil',
        description: 'Usa una BOTELLA DE AGUA para hacer MEJORES FOTOS!',
        youtubeLink: 'https://www.youtube.com/watch?v=dVxg3jS6Yhk&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=30'
    },
    {
        id: 32,
        title: 'Ideas virales',
        category: 'Edición',
        difficulty: 'Intermedio',
        description: 'Instagram NO quiere TUS FOTOS! | Ideas VIRALES para FOTÓGRAFOS',
        youtubeLink: 'https://www.youtube.com/watch?v=omzf4I4Ii4I&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=31'
    },
    {
        id: 33,
        title: 'Megapixeles',
        category: 'Técnicas',
        difficulty: 'Intermedio',
        description: '¿MÁS MEGAPIXELES SON MEJOR? | ¿Mito o Realidad?🤔',
        youtubeLink: 'https://www.youtube.com/watch?v=BAHFEeUE1aE&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=32'
    },
    {
        id: 34,
        title: 'Resolucion',
        category: 'Configuracion',
        difficulty: 'Fácil',
        description: 'Esta Inteligencia Artificial aumenta la RESOLUCIÓN de cualquier FOTO!',
        youtubeLink: 'https://www.youtube.com/watch?v=WLnmdrO61AE&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=33'
    },
    {
        id: 35,
        title: 'Haz que tus historias de instagram destaquen',
        category: 'Movil',
        difficulty: 'Intermedio',
        description: '5 Mejores Apps para Crear Historias Originales en INSTGARAM | Haz que tus Historias Destaquen',
        youtubeLink: 'https://www.youtube.com/watch?v=Bn-AO6uT9r0&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=34'
    },
    {
        id: 36,
        title: 'Mejora el Audio',
        category: 'Iluminación',
        difficulty: 'Difícil',
        description: 'Mejora CUALQUIER AUDIO con este TRUCO!',
        youtubeLink: 'https://www.youtube.com/watch?v=U_mdSTb4RLg&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=35'
    },
    {
        id: 37,
        title: 'Mosaico en instagram',
        category: 'Movil',
        difficulty: 'Fácil',
        description: 'Como hacer un MOSAICO para INSTAGRAM Super FÁCIL',
        youtubeLink: 'https://www.youtube.com/watch?v=GYWweUdFWx4&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=37'
    },
    {
        id: 38,
        title: 'Sincronizar Audio',
        category: 'Técnicas',
        difficulty: 'Fácil',
        description: 'Como SINCRONIZAR Audio y ARREGLAR DESINCRONIZACIÓN',
        youtubeLink: 'https://www.youtube.com/watch?v=msBJSTTno0M&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=38'
    },
    {
        id: 39,
        title: 'Ejemplo de equipos escenciales para fotografia',
        category: 'Configuracion',
        difficulty: 'Difícil',
        description: 'Mis Equipos Esenciales Para FOTÓS y VIDEOS De EVENTOS!',
        youtubeLink: 'https://www.youtube.com/watch?v=dy5rzf_WZc8&list=PLmdpPVXJPqlWE4rc2j2rpDhssNE0woGZl&index=39'
    },
    {
        id: 40,
        title: 'Trucos para mejores fotos',
        category: 'Configuracion',
        difficulty: 'Difícil',
        description: '10 TRUCOS PARA HACER MEJORES FOTOS',
        youtubeLink: 'https://www.youtube.com/watch?v=p0Flq5_lyvo'
    },
];

const getYoutubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
};

const getYoutubeThumbnail = (url) => {
    const videoId = getYoutubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : 'default_thumbnail.jpg';
};

const Tutorials = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [difficultyFilter, setDifficultyFilter] = useState('');

    const filteredTutorials = tutorials.filter(tutorial => {
        return (
            (tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (categoryFilter === '' || tutorial.category === categoryFilter) &&
            (difficultyFilter === '' || tutorial.difficulty === difficultyFilter)
        );
    });

    return (
        <><Navbar />
        <div className="tutorials-container">
            <h1>Tutoriales de Fotografía</h1>
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Buscar tutoriales..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} 
                    className='search-bar' />
                <select className='filter-dropdown'
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    <option value="Básico">Básico</option>
                    <option value="Iluminación">Iluminación</option>
                    <option value="Colores">Colores</option>
                    <option value="Poses">Poses</option>
                    <option value="Edicion">Edicion</option>
                    <option value="Retratos">Retratos</option>
                    <option value="Movil">Movil</option>
                    <option value="Configuracion">Configuracion</option>
                    <option value="Técnicas">Técnicas</option>
                    {/* Agrega más opciones de categoría aquí */}
                </select>
                <select className='filter-dropdown'
                    value={difficultyFilter}
                    onChange={e => setDifficultyFilter(e.target.value)}
                >
                    <option value="">Todos los niveles</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Difícil">Difícil</option>
                </select>
            </div>
            <div className="tutorials-grid">
                {filteredTutorials.map(tutorial => (
                    <div key={tutorial.id} className="tutorial-card">
                        <img
                            src={getYoutubeThumbnail(tutorial.youtubeLink)}
                            alt={tutorial.title}
                            className="tutorial-image" />
                        <div className="tutorial-info">
                            <h2>{tutorial.title}</h2>
                            <p>Categoría: {tutorial.category}</p>
                            <p>Dificultad: {tutorial.difficulty}</p>
                            <p>{tutorial.description}</p>
                            <a href={tutorial.youtubeLink} target="_blank" rel="noopener noreferrer">
                                Ver tutorial en YouTube
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div></>
    );
};

export default Tutorials;
