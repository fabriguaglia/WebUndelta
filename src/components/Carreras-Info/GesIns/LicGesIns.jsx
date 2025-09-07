import React from 'react';
import "../Carreras-Info.css"

const LicGesIns = () => {
  return (
    <div className="carreras-info-container">
      <div className="section-carreras-info">
        <div className="overlay-carreras container-fluid">
          <h1 className="title-carreras text-fluid">TECNICATURA EN CIENCIA DE DATOS</h1>
        </div>
      </div>
      <div className='green-bar-car'></div>

      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">¿POR QUÉ ESTUDIAR ESTA CARRERA?</h3>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="content-section">
        <div className="container">
          <div className="intro-content">
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <div className="intro-text">
              La <strong>Ciencia de Datos</strong> es una disciplina clave en la era digital: 
              permite transformar grandes volúmenes de datos en conocimiento útil para 
              tomar decisiones estratégicas en ámbitos como la salud, el comercio, la industria o el 
              gobierno. Estudiá esta carrera y convertite en un profesional capaz de dar 
              respuesta a las necesidades de nuestra sociedad, empresas y organismos a través de la construcción de modelos de <strong>Ciencia de 
              Datos</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">OBJETIVO GENERAL</h3>
        </div>
      </div>
      <section className="objective-section">
        <div className="container">
          <p className="objective-text">
            Formar profesionales capaces de investigar, diseñar, implementar y aplicar métodos analíticos y 
            computacionales para extraer conocimiento a partir de grandes volúmenes de datos, orientados a la 
            toma de decisiones en entornos multidisciplinarios.
          </p>
        </div>
      </section>

      {/* Information Grid */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="info-title">Título que otorga:</div>
              <div className="info-value">Técnico/a en Ciencia de Datos</div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="info-title">Duración:</div>
              <div className="info-value">4 años (8 cuatrimestres)</div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="info-title">Total de horas:</div>
              <div className="info-value">2.164 horas</div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="info-title">Modalidad:</div>
              <div className="info-value">Presencial</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-buttons">
            <button className="btn btn-primary">Inscribirse</button>
            <button className="btn btn-secondary">Plan de Estudio</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicGesIns;