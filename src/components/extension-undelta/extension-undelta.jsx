import React from 'react';
import './extension-undelta.css';
import headerImage from './header-undelta.jpg';


const Extension = () => {
  return (
    <div className="extension-undelta-container">
      <header className="extension-header">
        <img src={headerImage} alt="Extensión UNdelta" className="header-img" />
        <h1 className="header-title">EXTENSIÓN UNDELTA</h1>
        <div className="header-logo">
          <img src="path/to/undelta-logo.png" alt="UNDelta Logo" />
        </div>
      </header>

      <div className="news-section">
        <h2 className="section-title">NOTICIAS UNDELTA</h2>
        <div className="news-grid">
          <div className="main-news-item">
            <div className="news-text-overlay">
              <h3 className="news-title-overlay">COMENZÓ UNDELTA EN DEBATE</h3>
              <p className="news-description-overlay">
                LA UNIVERSIDAD NACIONAL DEL DELTA ABRE LAS PUERTAS A LOS
                ESTUDIANTES PARA LA UTILIZACIÓN DEL AUDITORIO DE LA UNIVERSIDAD
                PARA DEBATES.
              </p>
            </div>
          </div>

          <div className="side-news-container">
            <div className="side-news-item top-item">
              <div className="news-text-overlay">
                <h3 className="side-news-title">ABRIMOS LAS INSCRIPCIONES A NUESTRAS CARRERAS</h3>
              </div>
            </div>
            <div className="side-news-item bottom-item">
              <div className="news-text-overlay">
                <h3 className="side-news-title">ENTRE LAS 10 UNIVERSIDADES MÁS TRANSPARENTES DEL PAÍS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="debate-section">
        <h2 className="section-title">UNDELTA EN DEBATE</h2>
        <div className="debate-content">
          <div className="video-container">
            <div className="video-overlay">
              <div className="video-info">
                <span className="video-watch-later">Watch later</span>
                <span className="video-share">Share</span>
                <p className="video-title">Neurodiversidad y Escuela</p>
                <p className="video-subtitle">Herramientas para abordar la neurodivergencia en el aula</p>
              </div>
              <div className="video-presenters">
                {/* Asumo que los presentadores son imágenes, puedes reemplazarlas con div si son solo cajas de color */}
                <div className="presenter-card">
                  <img src="path/to/christian.jpg" alt="Christian" />
                  <p>CHRISTIAN</p>
                </div>
                <div className="presenter-card">
                  <img src="path/to/ian.jpg" alt="Ian" />
                  <p>IAN</p>
                </div>
                <div className="presenter-card">
                  <img src="path/to/luciana.jpg" alt="Luciana" />
                  <p>LUCIANA</p>
                </div>
                <div className="presenter-card">
                  <img src="path/to/marlen.jpg" alt="Marlén" />
                  <p>MARLÉN</p>
                </div>
              </div>
              <a href="https://www.youtube.com/watch?v=your-video-id" target="_blank" rel="noopener noreferrer" className="watch-on-youtube-btn">
                Watch on <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
          <div className="youtube-promo">
            <p>MIRA LO ÚLTIMO DE UNDELTA EN DEBATE EN NUESTRO CANAL DE YOUTUBE.</p>
            <button className="promo-button">PRÓXIMOS DEBATES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;