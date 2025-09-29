import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Videodelta from "./UNDelta-.m4v";
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

const novedades = [
  {
    title: "Primer dia de clases en la UNDelta",
    text: "Más de 1000 estudiantes comenzaron a cursar las primeras carreras universitarias..",
    buttonText: "Conocé más",
    image: "/noticia1.jpg",
    alt: "botón 1",
    route: '/ext-noticias/noticia1'
  },
  {
    title: "Cuando los jóvenes llegan al recinto",
    text: "Nueva edición de UNDelta en Debate junto a la Cámara de Diputados de la Provincia..",
    buttonText: "Conocé más",
    image: "/noticia2.jpg",
    alt: "botón 2",
    route: '/ext-noticias/noticia2'
  },
  {
    title: "¿Celulares en las escuelas?",
    text: "La UNDelta convocó a estudiantes secundarios a debatir sobre un tema clave..",
    buttonText: "Conocé más",
    image: "/noticia3.jpg",
    alt: "botón 3",
    route: '/ext-noticias/noticia3'
  }
];

  
  const handlePreguntasFrecuentes = () => {
    navigate('/preguntas-frecuentes');
  };

  const handleInscripcionPage = () => {
    navigate('/Inscripcion');
  };

  const handleSobreNosotros = () => {
    navigate('/sobre-nosotros')
  }

  const handleCarreras = () => {
    navigate('/Carreras')
  }

  const handleEventos = () => {
    navigate('/Eventos');
  }
  

  return (
    <>
      <div className="video-container">
        <video
          src={Videodelta}
          autoPlay
          muted
          playsInline
          loop
          className="fullscreen-video"
        ></video>
      </div>
      
      <div className="container-fluid">
        <div className="row row-custom-nav align-items-center">
          <div className="col-md-3 col-custom" onClick={handleCarreras} style={{cursor:'pointer'}}>CARRERAS</div>
        
          <div className="col-md-3 col-custom" onClick={handleInscripcionPage} style={{cursor:'pointer'}}>
            INSCRIPCIÓN
            </div>
          <div 
            className="col-md-3 col-custom" 
            onClick={handlePreguntasFrecuentes}
            style={{ cursor: 'pointer' }}
          >
            PREGUNTAS FRECUENTES
          </div>
          <div className="col-md-3 col-custom" onClick={handleEventos}
            style={{ cursor: 'pointer' }}>EVENTOS</div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row row-custom-separator" id="separator">
          <div className="col"></div>
        </div>
      </div>

      <div className="cards-section">
        <div className="container-fluid">
          <h2 className="section-title">
            ¿POR QUÉ ELEGIR LA UNIVERSIDAD NACIONAL DEL DELTA?
          </h2>
          
          <div className="row row-custom-cards justify-content-center">
            <div className="col-md-4 col-lg-3 mb-4 col-custom">
              <div className="info-card card1">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                  </svg>
                </div>
                <div className="card-number">01.</div>
                <div className="card-title">EXCELENCIA ACADÉMICA</div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 mb-4 col-custom">
              <div className="info-card card2">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                  </svg>
                </div>
                <div className="card-number">02.</div>
                <div className="card-title">GRATUITA, INCLUSIVA Y DE CALIDAD</div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 mb-4 col-custom">
              <div className="info-card card3">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                  </svg>
                </div>
                <div className="card-number">03.</div>
                <div className="card-title">UN PUNTO DE ENCUENTRO</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button className="info-button" onClick={handleSobreNosotros}
            style={{ cursor: 'pointer' }}>MÁS INFORMACIÓN</button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row row-custom-separator" id="separator">
          <div className="col"></div>
        </div>
      </div>

      <div className="novedades-separator-custom">
        <div className="container-fluid">
          <h3 className="novedades-title-custom">NOVEDADES DESTACADAS</h3>
        </div>
      </div>

  <div id="novedadesCarousel" className="carousel slide" data-bs-ride="carousel">
    {/* Items del carousel */}
    <div className="carousel-inner">
      {novedades.map((novedad, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div className="container-fluid py-5">
            <div className="row align-items-center justify-content-center min-vh-50">
              {/* Contenido de texto */}
              <div className="col-lg-6 col-md-6 pe-lg-5">
                <div className="content-section">
                  <h1 className="display-4 fw-bold text-success mb-4">
                    {novedad.title}
                  </h1>
                  <p className="lead text-dark mb-4 fs-5">
                    {novedad.text}
                  </p>
                  <button
                    className="btn btn-info btn-lg rounded-pill px-4 py-2 text-white fw-semibold"
                    onClick={() => navigate(novedad.route)}
                  >
                    {novedad.buttonText}
                  </button>
                </div>
              </div>
              
              {/* Imagen */}
              <div className="col-lg-6 col-md-6 text-center">
                <div className="image-container position-relative">
                  <img
                    src={novedad.image}
                    alt={novedad.alt}
                    className="img-fluid rounded-2"
                    style={{maxHeight: '400px', objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Controles de navegación personalizados */}
    <div className="position-absolute bottom-0 end-0 p-4">
      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-primary rounded-circle p-2 carousel-control-custom"
          type="button"
          data-bs-target="#novedadesCarousel"
          data-bs-slide="prev"
          style={{width: '50px', height: '50px'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" viewBox="0 0 16 16" >
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button
          className="btn btn-outline-primary rounded-circle p-2 carousel-control-custom"
          type="button"
          data-bs-target="#novedadesCarousel"
          data-bs-slide="next"
          style={{width: '50px', height: '50px'}}
         >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  </>
  )}

export default Menu;