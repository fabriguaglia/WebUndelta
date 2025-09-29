import { useEffect, useState } from "react";
import "../Carreras-Info.css"

const LicGesIns = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="carreras-info-container">
      <div className="section-carreras-info">
        <div className="overlay-carreras container-fluid">
          <h1 className="title-carreras text-fluid">LICENCIATURA EN GESTIÓN DE LAS INSTITUCIONES EDUCATIVAS</h1>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
              </svg>
            </div>
            <div className="intro-text">
              Gestionar instituciones educativas implica
mucho más que administrar: es también
<strong>liderar con compromiso y visión crítica</strong>.
Para eso, aprendé cómo incidir activamente
en la mejora del sistema educativo,
acompañar procesos de cambio, promover
la inclusión, la participación democrática y el
derecho a la educación desde una mirada
situada y transformadora.
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
            Formar profesionales con capacidad
crítica y compromiso social, que
asuman la gestión educativa como un
campo político-pedagógico orientado a
transformar instituciones y en diálogo
con las demandas y realidades locales,
regionales y nacionales.
          </p>
        </div>
      </section>

      {/* Information Grid con Bootstrap */}
      <section className="info-section">
        <div className="container">
          <div className="row justify-content-center">

            {/* Tarjeta 1 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="info-card h-100">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="info-title">Título que otorga:</div>
                <div className="info-value">Licenciado/a en Gestión de las Instituciones Educativas</div>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="info-card h-100">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="info-title">Duración:</div>
                <div className="info-value">2 años (4 cuatrimestres)</div>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="info-card h-100">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="info-title">Total de horas:</div>
                <div className="info-value">1.216 horas</div>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="info-card h-100">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => window.open('/Inscripcion', '_blank')}>Inscribirse</button>
            <button 
              className="btn btn-secondary" 
              onClick={() => window.open('/carreras pdf/Lic_Educacion.pdf', '_blank')}
              >
                Plan de Estudio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicGesIns;
