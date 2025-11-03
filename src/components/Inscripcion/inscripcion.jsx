import React, { useState, useEffect } from 'react';
import { Monitor, Users, GraduationCap, ChevronRight, Play, X } from 'lucide-react';
import './inscripcion.css';
import Video from "./preinscripcion.mp4";

// Componente de video flotante
const FloatingVideoComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setIsPlaying(false);
    }
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  const floatingButtonStyle = {
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    zIndex: 1050,
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #003B55, #69932D)',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    border: 'none'
  };

  const pulseStyle = {
    position: 'absolute',
    inset: '0',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #69932D, #22c55e)',
    opacity: '0.3',
    animation: 'pulse 2s infinite',
  };

  const panelStyle = {
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    zIndex: 1050,
    width: '320px',
    maxWidth: '90vw',
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    overflow: 'hidden'
  };

  const headerStyle = {
    background: 'linear-gradient(90deg, #003B55, #69932D)',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const videoAreaStyle = {
    width: '100%',
    height: '180px',
    backgroundColor: '#f8f9fa',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '1rem',
    position: 'relative'
  };

  return (
    <>
      <div>
        {/* Botón flotante colapsado */}
        {!isExpanded && (
          <div onClick={toggleExpanded} style={floatingButtonStyle}>
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
              <Play size={24} color="#0ea5e9" style={{marginLeft: '2px'}} />
            </div>
            <div style={pulseStyle}></div>
          </div>
        )}

        {/* Panel expandido */}
        {isExpanded && (
          <div style={panelStyle}>
            {/* Header */}
            <div style={headerStyle}>
              <h5 className="text-white mb-0 fw-semibold">Video Tutorial</h5>
              <div className="d-flex gap-2">
                <button 
                  onClick={toggleExpanded}
                  className="btn btn-sm"
                >
                  <X size={20}color='white'></X>
                </button>
              </div>
            </div>

            {/* Contenido del video */}
            <div className="p-4">
              <div 
                style={videoAreaStyle}
                className="video-hover"
                onClick={playVideo}
              >
                {!isPlaying ? (
                  <>
                    <div className="play-button">
                      <Play size={32} color="white" style={{marginLeft: '4px'}} />
                    </div>
                    <div></div>
                  </>
                ) : (
                  <video 
                    width="100%" 
                    height="100%" 
                    controls 
                    autoPlay
                    style={{
                      borderRadius: '0.5rem',
                      backgroundColor: 'black'
                    }}
                  >
                    <source src={Video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                )}
              </div>

              <div className="mb-3">
                <h6 className="fw-semibold text-dark mb-2">Guía de Inscripción SIU</h6>
                <p className="text-muted small mb-3">
                  Aprende paso a paso cómo completar tu inscripción en el sistema SIU Guaraní de la UNDelta.
                </p>
                
                <div className="d-flex align-items-center mb-3">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #003B55, #22c55e)',
                    borderRadius: '50%',
                    marginRight: '0.5rem'
                  }}></div>
                  <small className="text-muted">Duración: 5:45 min</small>
                </div>

                <button 
                  onClick={playVideo}
                  className="btn w-100 d-flex align-items-center justify-content-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #003B55, #22c55e)',
                    border: 'none',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #003B55, #69932D)'}
                  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #003B55, #69932D)'}
                >
                  <Play size={16} />
                  {isPlaying ? 'Reproduciendo...' : 'Ver Tutorial'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};


// Componente del popup para el Paso 2
const Paso2Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="popup-title">
          PASO 2 - Documentación Presencial
        </h3>
        
        <div className="content-section">
          <h4 className="section-title">
            Recordá que para poder completar tu inscripción necesitás:
          </h4>
          
          <ul className="requirements-list">
            <li className="requirement-item">
              • DNI (original y copia)
            </li>
            <li className="requirement-item">
              • Título secundario, certificado de título en trámite o certificado de alumno regular, según corresponda (original y copia)
            </li>
            <li className="requirement-item">
              • Formulario de SIU Guaraní (impreso)
            </li>
          </ul>
        </div>
        
        <div className="info-box">
          <p className="info-text">
            <strong>La documentación debe entregarse de manera presencial en Avenida Avellaneda 2370, Virreyes, de 9:30 a 19:00 horas.</strong>
          </p>
        </div>
        
        <div className="button-container">
          <button onClick={onClose} className="confirm-button">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};


const InscripcionPage = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [showPaso2Popup, setShowPaso2Popup] = useState(false);

  const steps = [
    {
      id: 'paso1',
      title: 'PASO 1 - Virtual',
      subtitle: 'Pre-inscripción que se realiza a través de SIU Preinscripción a Carreras.',
      icon: Monitor,
      color: 'step-blue',
      buttonText: 'INSCRIPCIÓN',
      buttonColor: 'btn-blue'
    },
    {
      id: 'paso2',
      title: 'PASO 2 - Presencial',
      subtitle: 'Presentación y validación de la documentación original.',
      icon: Users,
      color: 'step-green-dark',
      buttonText: 'MAS INFORMACIÓN',
      buttonColor: 'btn-green-dark'
    },
    {
      id: 'paso3',
      title: 'Si ya sos estudiante de la UNDelta',
      subtitle: 'Realizá tu inscripción a través de Autogestión SIU - Guaraní.',
      icon: GraduationCap,
      color: 'step-green',
      buttonText: 'INICIAR SESIÓN',
      buttonColor: 'btn-green'
    }
  ];

  const handleStepButtonClick = (stepId) => {
    if (stepId === 'paso1') {
      window.open('https://guarani.undelta.edu.ar/guarani_preinscripcion/?__o=', '_blank');
    } else if (stepId === 'paso2') {
      setShowPaso2Popup(true);
    } else if (stepId === 'paso3') {
      window.open('https://guarani.undelta.edu.ar/g3w3/', '_blank');
    }
  };

  return (
    <div className="inscripcion-page">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="header-container">
            <h1 className="header-title">
              ¿CÓMO INSCRIBIRME?
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="green-bar"></div>
        <div className="section-title-ins">
        <h2>INSCRÍBITE</h2>
      </div>   
      <div className="main-content">

        {/* Description */}
        <div className="description">
          <p>
            Preinscripción virtual a través del sistema SIU, validación presencial de la documentación original y, 
            si ya sos estudiante, inscripción mediante Autogestión SIU-Guaraní.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="step-card">
                {/* Icon Section */}
                <div className={`step-icon-section ${step.color}`}>
                  <div className="step-icon-container">
                    <IconComponent className="step-icon" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="step-content">
                  <h3 className="step-title">
                    {step.title}
                  </h3>
                  <p className="step-subtitle">
                    {step.subtitle}
                  </p>
                  
                  {/* Buttons */}
                  <div className="step-buttons">
                    <button
                      className={`step-button ${step.buttonColor}`}
                      onClick={() => handleStepButtonClick(step.id)}
                    >
                      {step.buttonText}
                      <ChevronRight className="button-icon" />
                    </button>
                    
                    {step.id === 'paso1' && (
                      <button 
                        className="step-button btn-gray"
                        onClick={() => window.open('https://undelta.edu.ar/wp-content/uploads/2025/04/INSTRUCTIVO-PRE-INSCRIPCION-SIU-GUARANI-1.docx', '_blank')}
                      >
                        MAS INFORMACIÓN
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="additional-info">
          <h3 className="info-title">
            Registrate en SIU Preinscripción a Carreras:
          </h3>
          <p className="info-text">
            Utilizá tu correo electrónico personal al que puedas acceder, ya que a esa dirección la 
            UNDelta te enviará notificaciones y comunicaciones.
          </p>
          <p className="info-text">
            Ingresá con tu nuevo usuario, completá el formulario de pre-inscripción en SIU 
            Preinscripción a carreras y cargá toda la documentación requerida.
          </p>
          
          <h4 className="info-subtitle">
            Recordá que para poder completar tu inscripción necesitás:
          </h4>
          
          <ul className="info-list">
            <li>• DNI (original y copia)</li>
            <li>• Título secundario, certificado de título en trámite o certificado de alumno regular, 
                según corresponda (original y copia)</li>
            <li>• Formulario de SIU Guaraní (impreso)</li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="footer-note">
          <p>
            <strong>La documentación debe entregarse de manera presencial en Avenida Avellaneda 2370, 
            Virreyes, de 9:30 a 19:00 horas.</strong>
          </p>
        </div>
      </div>

      {/* Modal for selected step */}
      {selectedStep && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              {steps.find(s => s.id === selectedStep)?.title}
            </h3>
            <p className="modal-text">
              Funcionalidad en desarrollo. Aquí se implementaría la lógica específica para cada paso.
            </p>
            <div className="modal-buttons">
              <button
                className="modal-button modal-button-primary"
                onClick={() => setSelectedStep(null)}
              >
                Continuar
              </button>
              <button
                className="modal-button modal-button-secondary"
                onClick={() => setSelectedStep(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup del Paso 2 */}
      <Paso2Popup 
        isOpen={showPaso2Popup} 
        onClose={() => setShowPaso2Popup(false)} 
      />

      {/* Componente de Video Flotante */}
      <FloatingVideoComponent />
    </div>
  );
};

export default InscripcionPage;