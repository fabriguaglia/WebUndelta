import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sobre-nosotros.css'
import sobrenos from './sobre-nos.png';

function SobreNosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const personas = [
    {
      nombre: "Lic. Silvia Carolina Farías",
      cargo: "Rectora",
      className: "silvia"
    },
    {
      nombre: "Mg. Sebastián Rovira",
      cargo: "Secretario Académico y Estudiantil",
      className: "sebastian"
    },
    {
      nombre: "Cdor. Mariano Puccio",
      cargo: "Secretario Administrativo",
      className: "marcelo"
    },
    {
      nombre: "Prof. Sergio Castro",
      cargo: "Secretario de Extensión Universitaria y Cultura",
      className: "sergio"
    },
    {
      nombre: "Dr. Federico Quilici",
      cargo: "Secretario Académico",
      className: "federico"
    },
    {
      nombre: "Dra. Natalia Del Cogliano",
      cargo: "Secretaria de Investigación y Posgrado",
      className: "natalia"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">SOBRE NOSOTROS</h1>
      </div>

      {/* Separador */}
      <div className="container-fluid">
        <div className="row row-custom-separator">
          <div className="col"></div>
        </div>
      </div>

      {/* Sección Sobre Nosotros */}
      <div className="about-section">
        <div className="container-fluid">
          <div className="about-content">
            <div className="about-text">
              <p>
                La Universidad Nacional del Delta es una universidad nacional, pública y gratuita creada en 2023. Se constituye como un punto de encuentro entre lo local y lo nacional, entre estudiantes y docentes, entre el territorio. Combinamos la tradición de nuestros diversos y los focos, entre la ciudadanía y la industria, entre grupos y comunidades, entre la comprensión regional y los que aspiramos, para el desarrollo sostenible como principal objetivo colaborar proceso y constructivo un futuro compartido.
              </p>
              <p>
                Somos una universidad accesible a la región, donde la escuela trasciende lo geográfico, alcanzando la industria, el diálogo urbano y la participación activa de todos los actores de la comunidad, fortaleciendo así el tejido social y cultural del Tigre, San Fernando y Escobar.
              </p>
            </div>
            <div className="about-image-container">
              <img 
                src={sobrenos} 
                alt="Edificio Universidad Nacional del Delta" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="container-fluid">
        <div className="row row-custom-separator">
          <div className="col"></div>
        </div>
      </div>

      {/* Sección Organigrama */}
      <div className="organigrama-section">
        <h2 className="organigrama-title">ORGANIGRAMA</h2>
        <div className="organigrama-grid">
          {personas.map((persona, index) => (
            <div key={index} className="persona-card">
              <div className={`persona-img ${persona.className}`}></div>
              <div className="persona-name">{persona.nombre}</div>
              <div className="persona-title">{persona.cargo}</div>
              <div className="persona-description">{persona.descripcion}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SobreNosotros;