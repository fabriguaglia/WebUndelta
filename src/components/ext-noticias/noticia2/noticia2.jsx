import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../noticias.css';
import noti2 from "./noticia2.jpg";

const UndeltaNoticia2 = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const navigate = useNavigate();

  const handleSobrenos = () => {
    navigate('/sobre-nosotros');
  };

  const handleExtUN = () => {
    navigate('/extension-undelta'); 
  };

  return (
    <div className="noti-news-container">

      {/* Main Content */}
      <article className="noti-article">
        <header className="noti-article-header">
          <div className="noti-category">EXTENSIÓN UNIVERSITARIA</div>
          <h1 className="noti-title">
            Una nueva edición de UNDelta en Debate junto a la Cámara de Diputados de la Provincia
          </h1>
          <div className="noti-subtitle">
            Más de 150 estudiantes secundarios ejercitaron sus habilidades de oratoria en el recinto provincial
          </div>
          <div className="noti-meta">
            <span className="noti-date">11 de julio de 2025</span>
            <span className="noti-author">Comunicación Institucional UNDelta</span>
          </div>
        </header>

        <div className="noti-article-body">
          <div className="noti-intro">
            <p>
              Este viernes 11 de julio, en una nueva edición de <strong>UNDelta en Debate</strong>, más de 150 
              estudiantes de escuelas secundarias de distintos puntos de la Provincia de Buenos Aires se reunieron 
              en la <strong>Cámara de Diputados provincial</strong> para debatir y ejercitar sus habilidades de 
              oratoria en torno a temas que los involucran.
            </p>
          </div>
          <img 
            src={noti2} 
            alt="Estudiantes debatiendo en la Cámara de Diputados" width={700} className='imgnoti'
          />
          <div className="noti-content">
            <p>
              La jornada fue organizada de manera conjunta por la Universidad Nacional del Delta, la Fundación de la 
              Universidad Nacional del Delta y la Cámara de Diputados de la Provincia de Buenos Aires, en el marco de 
              una propuesta que busca fortalecer la participación estudiantil, la formación ciudadana y el pensamiento 
              crítico desde el nivel secundario.
            </p>

            <h3 className="noti-section-title">Autoridades presentes</h3>
            
            <p>
              Contó con la presencia de <strong>Alexis Guerrera</strong>, presidente de la Cámara de Diputados de la Provincia; 
              <strong>Luciana Padulo</strong>, diputada provincial; <strong>Malena Galmarini</strong>, fundadora de la Fundación 
              de la Universidad Nacional del Delta; <strong>Sebastián Rovira</strong>, secretario Administrativo, Financiero y 
              Técnico de la Universidad Nacional del Delta; y <strong>Sergio Castro</strong>, secretario de Extensión 
              Universitaria y Vinculación con la Comunidad de la Universidad Nacional del Delta.
            </p>

            <h3 className="noti-section-title">Testimonios</h3>

            <div className="noti-quote">
              <blockquote>
                "El objetivo de este programa es darles a los jóvenes herramientas de pensamiento crítico y de opinión 
                pública para animarse a decir lo que quieran decir, a pensar lo que quieran pensar y a juntar ese decir 
                y ese pensar en el hacer"
              </blockquote>
              <cite>Malena Galmarini, fundadora de la Fundación de la Universidad Nacional del Delta (FUNDELTA)</cite>
            </div>

            <div className="noti-quote">
              <blockquote>
                "Con la participación ciudadana se pueden construir una provincia mejor y una patria mejor, por eso fue 
                un placer recibir a los participantes de UNDelta en Debate en el día de hoy"
              </blockquote>
              <cite>Alexis Guerrera, presidente de la Honorable Cámara de Diputados de la Provincia de Buenos Aires</cite>
            </div>

            <div className="noti-quote">
              <blockquote>
                "Estar en un lugar como este, debatiendo con compañeros de toda la Provincia, es algo que no me voy a 
                olvidar. Nos preparamos mucho y aprendimos un montón"
              </blockquote>
              <cite>Joaquín, estudiante de Mar del Plata, participante del debate</cite>
            </div>

            <h3 className="noti-section-title">Desarrollo de la jornada</h3>

            <p>
              A lo largo del día, los equipos debatieron sobre temas vinculados a la educación, el uso de celulares y 
              la política. La final se llevó a cabo en el recinto de la Cámara de Diputados de la Provincia.
            </p>

            <p>
              Cada grupo, que ya había participado y ganado previamente otros programas de debate en sus ciudades de 
              origen, preparó con anticipación sus argumentos y expuso frente a un jurado que valoró el uso de datos, 
              la claridad en la exposición y la escucha activa.
            </p>

            <p>
              Con más de cinco ediciones realizadas, <strong>UNDelta en Debate</strong> sigue consolidándose como un 
              espacio de construcción colectiva, aprendizaje y acercamiento entre la universidad y los jóvenes de la región.
            </p>
          </div>
        </div>
      </article>

      {/* Related Links */}
      <div className="noti-related">
        <h4>Temas relacionados</h4>
        <div className="noti-tags">
          <span className="noti-tag">UNDelta en Debate</span>
          <span className="noti-tag">Extensión Universitaria</span>
          <span className="noti-tag">Participación Estudiantil</span>
          <span className="noti-tag">Cámara de Diputados</span>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={handleSobrenos}>
              Conocé más sobre UNDelta
            </button>
            <button className="btn btn-secondary" onClick={handleExtUN}>
              Ver todas las noticias
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UndeltaNoticia2;