import React from 'react';
import './extension-undelta.css';
import { useNavigate } from 'react-router-dom';


const Extension = () => {
  const navigate = useNavigate();

  const handleEventosClick = () => {
    navigate('/eventos');
  };

  const handleNoticia1Click = () => {
    navigate('/ext-noticias/noticia1');
  };

  const handleNoticia2Click = () => {
    navigate('/ext-noticias/noticia2'); 
  };

  const handleNoticia3Click = () => {
    navigate('/ext-noticias/noticia3'); 
  };

  return (
    <div className="extension-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay">
          <h1 className="main-title">EXTENSIÓN UNDELTA</h1>
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <div className='green-bar'></div>
        <div className="news-header">
          <h2>NOTICIAS UNDELTA</h2>
        </div>

        <div className="news-grid">
          {/* Card 1 - Debate */}
          <div className="news-card card-large" onClick={handleNoticia1Click} style={{ cursor: 'pointer' }} >
            <div className="card-overlay">
              <div className="card-content">
                <h3>PRIMER DIA DE CLASES EN LA UNDELTA</h3>
                <p>Más de 1000 estudiantes comenzaron a cursar las primeras carreras universitarias.</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Inscripciones */}
          <div className="news-card card-medium" onClick={handleNoticia2Click} style={{cursor: 'pointer'}}>
            <div className="card-overlay">
              <div className="card-content">
                <h3>CUANDO LOS JOVENES LLEGAN AL RECINTO</h3>
                <p>Nueva edición de UNDelta en Debate junto a la Cámara de Diputados de la Provincia.</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Universidades */}
          <div className="news-card card-medium" onClick={handleNoticia3Click} style={{cursor: 'pointer'}}>
            <div className="card-overlay">
              <div className="card-content">
                <h3>¿CELULARES EN LAS ESCUELAS?</h3>
                <p>La UNDelta convocó a estudiantes secundarios a debatir sobre un tema clave.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="debate-section">
        <h2 className="debate-title">UNDELTA EN DEBATE</h2>
      </div>
      <div className="debate-body">
        <div className="debate-content">
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/6AZwCDv1m7I?si=oJZDJrwpcUEev6IY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="debate-info">
            <div className="debate-text">
              <h3>MIRA LO ÚLTIMO DE UNDELTA EN DEBATE EN NUESTRO CANAL DE YOUTUBE.</h3>
              <button className="proximos-debates-btn" onClick={handleEventosClick}>
                PRÓXIMOS DEBATES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;