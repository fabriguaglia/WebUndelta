import React, { useState, useEffect } from 'react';
import { Monitor, Users, GraduationCap, ChevronRight } from 'lucide-react';
import './inscripcion.css';

const InscripcionPage = () => {
  const [selectedStep, setSelectedStep] = useState(null);

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

  return (
    <div className="inscripcion-page">
      {/* Header */}
      <div className="header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-container">
            <h1 className="header-title">
              ¿CÓMO INSCRIBIRME?
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Section Title */}
        <div className="section-title-ins">
          <h2>INSCRÍBITE</h2>
        </div>

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
                      onClick={() => setSelectedStep(step.id)}
                    >
                      {step.buttonText}
                      <ChevronRight className="button-icon" />
                    </button>
                    
                    {step.id === 'paso1' && (
                      <button className="step-button btn-gray">
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
    </div>
  );
};

export default InscripcionPage;