import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../noticias.css';
import noti3 from "./noticia3.jpg";

const UndeltaNoticia3 = () => {

  const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
            La UNDelta convocó a estudiantes secundarios a debatir sobre un tema clave de la agenda educativa
          </h1>
          <div className="noti-subtitle">
            Una nueva edición de UNDelta en Debate se realizará en la Cámara de Diputados provincial
          </div>
          <div className="noti-meta">
            <span className="noti-date">5 de julio de 2025</span>
            <span className="noti-author">Comunicación Institucional UNDelta</span>
          </div>
        </header>

        <div className="noti-article-body">
          <div className="noti-intro">
            <p>
              A través de su programa <strong>"UNDelta en Debate"</strong> la Universidad Nacional del Delta reunió a 
              más de cien estudiantes de secundarios de Tigre y San Fernando para debatir y ejercitar sus habilidades 
              de oratoria a partir de temáticas que los involucran.
            </p>
          </div>
          <img 
            src={noti3} 
            alt="Estudiantes secundarios en debate" width={700} className='imgnoti'
          />
          <div className="noti-content">
            <p>
              Esta iniciativa -que busca fomentar el aprendizaje académico, el compromiso social y el desarrollo personal 
              de los jóvenes de nuestra región- contará con una nueva edición a llevarse a cabo el próximo viernes 11 de 
              julio en la <strong>Cámara de Diputados de la Provincia de Buenos Aires</strong>.
            </p>

            <h3 className="noti-section-title">Testimonios</h3>

            <div className="noti-quote">
              <blockquote>
                "Es muy bueno aprender a debatir y sentirse escuchados, más si es sobre cosas que tienen que ver con 
                nosotros, con lo que hacemos en el colegio todos los días"
              </blockquote>
              <cite>Mía, estudiante de quinto año y participante de UNDelta en Debate</cite>
            </div>

            <div className="noti-quote">
              <blockquote>
                "Desde la UNDelta nos parece fundamental generar espacios donde los jóvenes de nuestra región puedan 
                expresarse y debatir sobre temas que los afectan en su día a día. También queremos en ese proceso darles 
                las herramientas para poder hacerlo cada vez mejor: con datos, con fundamentos, respetando al otro"
              </blockquote>
              <cite>Sebastián Rovira, Secretario Administrativo, Financiero y Técnico de la Universidad Nacional del Delta</cite>
            </div>

            <h3 className="noti-section-title">Temáticas de debate</h3>

            <p>
              Las mociones a debatirse en esta última edición de UNDelta en Debate fueron dos. La primera, vinculada a 
              educación, planteaba la disyuntiva de si debería prohibirse o no el uso de celulares en el aula. La segunda, 
              relacionada con política, hacía referencia al proyecto de ley "Ficha Limpia".
            </p>

            <p>
              En ambos casos, los estudiantes debieron preparar con anticipación sus argumentos y se valoraron la inclusión 
              de datos duros, los ejemplos concretos y la investigación previa.
            </p>

            <h3 className="noti-section-title">Una iniciativa consolidada</h3>

            <p>
              <strong>UNDelta en Debate</strong> ya lleva más de cinco ediciones y continúa constituyéndose como una 
              iniciativa clave para acercar a más jóvenes a la Universidad Nacional del Delta y escuchar qué tienen 
              para decir acerca de temas que los involucran.
            </p>

            <p>
              Este programa representa el compromiso de la UNDelta con la formación ciudadana y el desarrollo del 
              pensamiento crítico desde el nivel secundario, fortaleciendo los vínculos entre la universidad y la 
              comunidad educativa de la región.
            </p>
          </div>
        </div>
      </article>

      {/* Related Links */}
      <div className="noti-related">
        <h4>Temas relacionados</h4>
        <div className="noti-tags">
          <span className="noti-tag">UNDelta en Debate</span>
          <span className="noti-tag">Estudiantes Secundarios</span>
          <span className="noti-tag">Agenda Educativa</span>
          <span className="noti-tag">Pensamiento Crítico</span>
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

export default UndeltaNoticia3;