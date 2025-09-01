import React from 'react';
import './eventos.css';

const Eventos = () => {
  return (
    <div className="eventos-container">
      {/* Header Section */}
      <div className="eventos-header">
        <div className="header-overlay">
          <h1 className="eventos-title">EVENTOS</h1>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="calendario-section">
        <div className="calendario-header">
          <div className="header-line"></div>
          <h2 className="calendario-title">CALENDARIO DE EVENTOS PRÓXIMOS</h2>
        </div>
        
        {/* Calendar Container - Espacio reservado para el calendario */}
        <div className="calendario-container">
          <div className="calendario-placeholder">
            {/* Aquí va tu componente de calendario */}
            <p>En construcción.</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Eventos;