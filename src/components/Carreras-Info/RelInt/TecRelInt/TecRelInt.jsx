import React, {useEffect} from 'react';
import "../../Carreras-Info.css";

const TecRelInt = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="carreras-info-container">
      {/* ... (el resto de tu componente se mantiene igual hasta la sección de información) ... */}
      
      <div className="section-carreras-info">
        <div className="overlay-carreras container-fluid">
          <h1 className="title-carreras text-fluid">TECNICATURA UNIVERSITARIA EN RELACIONES INTERNACIONALES Y ASUNTOS GLOBALES</h1>
        </div>
      </div>
      <div className='green-bar-car'></div>

      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">¿POR QUÉ ESTUDIAR ESTA CARRERA?</h3>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="intro-content">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
            </div>
            <div className="intro-text">
              En un mundo donde los desafíos <strong>sociales</strong>, 
              <strong> económicos</strong> y <strong>políticos</strong> cruzan fronteras,
              incorporá herramientas técnicas y prácticas
              para analizar y actuar en <strong>escenarios
              internacionales</strong>. Si te interesa la cooperación,
              el comercio internacional, las estrategias
              globales con impacto local y la diplomacia y
              sus nuevas dinámicas, <strong>esta es la tecnicatura
              para vos.</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">OBJETIVO GENERAL</h3>
        </div>
      </div>
      <section className="objective-section">
        <div className="container">
          <p className="objective-text">
            Formar técnicos/as con capacidades para
            analizar, planificar e implementar estrategias
            en el campo de las <strong>relaciones internacionales</strong>,
            promoviendo el desarrollo del país a través de
            una inserción global activa, crítica y <strong>orientada a
            los intereses del Sur Global.</strong>
          </p>
        </div>
      </section>

      {/* Information Grid Section - MODIFICADA CON BOOTSTRAP */}
      <section className="info-section">
        <div className="container">
          {/* Reemplazamos info-grid con la clase "row" de Bootstrap */}
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
                <div className="info-value">Técnico/a Universitario/a en Relaciones Internacionales</div>
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
                <div className="info-value">2 años (5 cuatrimestres)</div>
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
                <div className="info-value">1.280 horas</div>
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

      <section className="cta-section">
        <div className="container">
          <div className="cta-buttons">
            <button className="btn btn-primary">Inscribirse</button>
            <button 
              className="btn btn-secondary" 
              onClick={() => window.open('/carreras pdf/Tec.-en-Relaciones-Internacionales.pdf', '_blank')}
              >
                Plan de Estudio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TecRelInt;