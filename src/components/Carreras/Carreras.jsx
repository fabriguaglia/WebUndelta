import React, { useState } from 'react';
import './Carreras.css';

const Carreras = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const licenciaturas = [
    {
      id: 1,
      title: "Licenciatura En Ciencia De Datos",
      description: "Formación integral en análisis de datos, machine learning y estadística aplicada."
    },
    {
      id: 2,
      title: "Licenciatura En Turismo Y Desarrollo Sostenible",
      description: "Desarrollo de competencias en gestión turística sustentable y responsable."
    },
    {
      id: 3,
      title: "Licenciatura En Relaciones Internacionales Y Asuntos Globales",
      description: "Formación en diplomacia, comercio internacional y política global."
    },
    {
      id: 4,
      title: "Licenciatura En Gestión De Las Instituciones Educativas",
      description: "Administración y liderazgo en el ámbito educativo institucional."
    }
  ];

  const tecnicaturas = [
    {
      id: 5,
      title: "Tecnicatura Universitaria En Ciencia De Datos",
      description: "Formación técnica especializada en análisis y procesamiento de datos."
    },
    {
      id: 6,
      title: "Tecnicatura Universitaria En Turismo Sostenible",
      description: "Técnicas y herramientas para el turismo sustentable."
    },
    {
      id: 7,
      title: "Tecnicatura Universitaria En Relaciones Internacionales",
      description: "Competencias técnicas en relaciones diplomáticas y comerciales."
    },
    {
      id: 8,
      title: "Tecnicatura Universitaria En Desastres Y Emergencias Sanitarias",
      description: "Gestión de crisis sanitarias y manejo de emergencias."
    }
  ];

  const diplomaturas = [
    {
      id: 9,
      title: "Licenciatura En Ciencia De Datos",
      description: "Diplomatura especializada en ciencia de datos aplicada."
    },
    {
      id: 10,
      title: "Licenciatura En Turismo Y Desarrollo Sostenible",
      description: "Diplomatura en desarrollo turístico sostenible."
    },
    {
      id: 11,
      title: "Licenciatura En Relaciones Internacionales Y Asuntos Globales",
      description: "Diplomatura en asuntos internacionales y globalización."
    },
    {
      id: 12,
      title: "Licenciatura En Gestión De Las Instituciones Educativas",
      description: "Diplomatura en gestión educativa institucional."
    },
    {
      id: 13,
      title: "Tecnicatura Universitaria En Ciencia De Datos",
      description: "Diplomatura técnica en análisis de datos."
    },
    {
      id: 14,
      title: "Tecnicatura Universitaria En Turismo Sostenible",
      description: "Diplomatura en turismo responsable y sostenible."
    },
    {
      id: 15,
      title: "Tecnicatura Universitaria En Relaciones Internacionales",
      description: "Diplomatura en relaciones diplomáticas internacionales."
    },
    {
      id: 16,
      title: "Tecnicatura Universitaria En Desastres Y Emergencias Sanitarias",
      description: "Diplomatura en manejo de emergencias sanitarias."
    }
  ];

  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const CareerCard = ({ career, isExpanded, onClick }) => (
    <div className={`career-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="career-header" onClick={() => onClick(career.id)}>
        <h3>{career.title}</h3>
        <div className={`arrow ${isExpanded ? 'rotated' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {isExpanded && (
        <div className="career-content">
          <p>{career.description}</p>
          <button className="more-info-btn">Más información</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="carreras-container">
      {/* Header Section */}
      <div className="section-carreras">
        <div className="overlay-carreras">
          <h1 className="title-carreras">CARRERAS</h1>
        </div>
      </div>

      {/* Licenciaturas Section */}
      <section className="careers-section">
        <div className="container-carreras">
          <div className="section-header-car">
            <h2>NUESTRAS CARRERAS</h2>
          </div>
          <div className="careers-grid">
            <div className="careers-column">
              {licenciaturas.map(career => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isExpanded={expandedItem === career.id}
                  onClick={handleItemClick}
                />
              ))}
            </div>
            <div className="careers-column">
              {tecnicaturas.map(career => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isExpanded={expandedItem === career.id}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diplomaturas Section */}
      <section className="careers-section diplomaturas-section">
        <div className="container-carreras">
          <div className="section-header-car">
            <h2>NUESTRAS DIPLOMATURAS</h2>
          </div>
          <div className="careers-grid">
            <div className="careers-column">
              {diplomaturas.slice(0, 4).map(career => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isExpanded={expandedItem === career.id}
                  onClick={handleItemClick}
                />
              ))}
            </div>
            <div className="careers-column">
              {diplomaturas.slice(4, 8).map(career => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isExpanded={expandedItem === career.id}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carreras;