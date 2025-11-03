import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../noticias.css';
import noti1 from "./noticia1.jpg";

const UndeltaNoticia1 = () => {
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
          <div className="noti-category">EDUCACIÓN SUPERIOR</div>
          <h1 className="noti-title">
            UNDelta: Más de 1000 estudiantes iniciaron las primeras carreras
          </h1>
          <div className="noti-subtitle">
            Un día histórico para la educación superior en el norte bonaerense
          </div>
          <div className="noti-meta">
            <span className="noti-date">4 de agosto de 2025</span>
            <span className="noti-author">Comunicación Institucional UNDelta</span>
          </div>
        </header>

        <div className="noti-article-body">
          <div className="noti-intro">
            <p>
              Este lunes 4 de agosto fue un día histórico para la <strong>Universidad Nacional del Delta</strong>: 
              más de 1000 estudiantes comenzaron a cursar las primeras carreras de grado y pregrado de esta 
              nueva universidad pública del norte bonaerense.
            </p>
          </div>
          <img 
            src={noti1} 
            alt="Edificio Universidad Nacional del Delta" width={700} className='imgnoti'
          />
          <div className="noti-content">
            <p>
              La jornada inaugural se vivió con emoción y alegría. Estudiantes de distintas edades y con diferentes 
              trayectorias, provenientes de Tigre, San Fernando, Escobar y otras localidades de la región, formaron 
              parte de este comienzo. La UNDelta abrió sus puertas con una propuesta que busca formar profesionales 
              comprometidos con sus comunidades y preparados para los desafíos presentes y futuros.
            </p>

            <h3 className="noti-section-title">Autoridades presentes</h3>
            
            <p>
              Las autoridades de la UNDelta dieron la bienvenida a las y los ingresantes en su primer día de clases. 
              Estuvieron presentes <strong>Carolina Farías</strong>, rectora de la UNDelta; <strong>Sebastián Rovira</strong>, 
              secretario Administrativo, Financiero y Técnico; <strong>Sergio Castro</strong>, secretario de Extensión 
              Universitaria y Enlace con la Comunidad; y <strong>Federico Quilici</strong>, secretario Académico.
            </p>

            <p>
              También acompañaron esta jornada representantes del municipio de San Fernando y de la Fundación de la 
              Universidad Nacional del Delta, quienes fueron fundamentales en el camino que hizo posible la creación 
              de esta institución. Participaron <strong>Juan Andreotti</strong>, intendente de San Fernando;  
              <strong> Malena Galmarini</strong>, socia fundadora de la Fundación de la Universidad Nacional del Delta; 
              <strong> Alicia Aparicio</strong>, presidenta de dicha Fundación; y <strong> Eva Andreotti</strong>, 
              secretaria de Desarrollo Social, Educación y Medio Ambiente de San Fernando.
            </p>

            <h3 className="noti-section-title">Testimonios</h3>

            <div className="noti-quote">
              <blockquote>
                "Esta universidad no nació de un día para el otro. Fue un sueño colectivo que tardó más de 20 años 
                en concretarse, y que se hizo realidad porque la comunidad de Tigre, San Fernando y Escobar nunca dejó de insistir. 
                Hoy, en su primer día, deseo que puedan sentir a la UNDelta como su casa"
              </blockquote>
              <cite>Malena Galmarini, socia fundadora de la Fundación de la Universidad Nacional del Delta</cite>
            </div>

            <div className="noti-quote">
              <blockquote>
                "La UNDelta es una herramienta de transformación para cumplir sueños. Que exista una universidad 
                en la región significa que más jóvenes, más adultos, más trabajadores van a poder estudiar cerca de sus casas, 
                sin tener que postergar su formación por falta de tiempo o recursos. Es una enorme alegría ver este sueño 
                convertirse en una realidad tan concreta"
              </blockquote>
              <cite>Juan Andreotti, intendente de San Fernando</cite>
            </div>

            <div className="noti-quote">
              <blockquote>
                "Una universidad no son solo sus aulas ni sus edificios: son las personas que la transitan todos los días. 
                Bienvenidas y bienvenidos a la UNDelta: este es su lugar"
              </blockquote>
              <cite>Carolina Farías, rectora de la UNDelta</cite>
            </div>

            <h3 className="noti-section-title">Contexto histórico</h3>

            <p>
              La <strong>Universidad Nacional del Delta</strong> fue creada por la ley 27.727, sancionada el 28 de 
              septiembre de 2023 por el Congreso de la Nación. Su existencia responde a una demanda sostenida de 
              las comunidades de Tigre, San Fernando y Escobar, que durante años impulsaron propuestas educativas 
              para acercar la universidad al territorio.
            </p>

            <p>
              A lo largo de su primer año de funcionamiento institucional, la UNDelta llevó adelante diplomaturas, 
              programas con escuelas secundarias, cursos de idiomas y charlas abiertas que ya marcaron una impronta 
              clara: una universidad pública, cercana y abierta a su comunidad.
            </p>

            <p>
              El inicio de la cursada de sus carreras de grado y pregrado representa un paso clave en la consolidación 
              institucional de la universidad y en el fortalecimiento de la educación superior en la región.
            </p>
          </div>
        </div>
      </article>

      {/* Related Links */}
      <div className="noti-related">
        <h4>Temas relacionados</h4>
        <div className="noti-tags">
          <span className="noti-tag">Universidad Nacional del Delta</span>
          <span className="noti-tag">Educación Superior</span>
          <span className="noti-tag">Norte Bonaerense</span>
          <span className="noti-tag">Ingresantes 2025</span>
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

export default UndeltaNoticia1;