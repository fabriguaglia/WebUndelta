import { useEffect } from "react";
import './eventos.css';

const Eventos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
            <iframe 
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showCalendars=0&title=Calendario%20de%20eventos%20de%20la%20Universidad%20Nacional%20del%20Delta&src=Y2FsZW5kYXJpb3dlYkB1bmRlbHRhLmVkdS5hcg&src=ZXMtNDE5LmFyI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043" 
              style={{ borderWidth: 0 }} 
              width="800" 
              height="600" 
              frameBorder="0" 
              scrolling="no"
              title="Calendario de eventos"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default Eventos;