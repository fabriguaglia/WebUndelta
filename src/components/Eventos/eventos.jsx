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
          <div className="calendario-placeholder">
           {/* <iframe 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&src=ZmFicmlndWFnbGlhNzJAZ21haWwuY29t&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%230b8043" 
                style={{
                  border: "solid 1px #777"
                }}
                width="800" 
                height="600" 
                frameBorder="0" 
                scrolling="no"
              /> */}
            <h3 className="">En construcción.</h3>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Eventos;