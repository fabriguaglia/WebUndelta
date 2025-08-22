import React, { useEffect, useState, useRef } from 'react';
import './Carreras.css';

const Carreras = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  // Slider state for "Cursos disponibles"
  const [visibleCount, setVisibleCount] = useState(4); // 4 by default (desktop)
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Arrays (licenciaturas, tecnicaturas, diplomaturas) - mantuve los datos que tenías.
  const licenciaturas = [
    { id: 1, title: "Licenciatura En Ciencia De Datos", description: `La Ciencia de Datos es una disciplina clave en
la era digital: permite transformar grandes
volúmenes de datos en conocimiento útil para
tomar decisiones estratégicas en ámbitos
como la salud, el comercio, la industria o el
gobierno. Estudiá esta carrera y convertite en
un profesional capaz de dar respuesta a las
necesidades de nuestra sociedad, empresas y
organismos a través de la construcción de
modelos de Ciencia de Datos.` },
    { id: 2, title: "Licenciatura En Turismo Y Desarrollo Sostenible", description: `En un contexto donde el turismo puede ser motor
del desarrollo local, esta licenciatura te ayudará a
construir una mirada aplicada, territorial y
sostenible. Vas a adquirir herramientas para
investigar, así como también para impulsar proyectos
turísticos que respeten los ecosistemas, promuevan
la equidad y valoren el patrimonio natural y cultural de
tu región.` },
    { id: 3, title: "Licenciatura En Relaciones Internacionales Y Asuntos Globales", description: `En un mundo donde los desafíos trascienden
fronteras, se necesitan profesionales capaces
de comprender las tendencias actuales e
intervenir en la complejidad global. Si querés
incidir en escenarios internacionales con
impacto local, esta carrera es para vos.` },
    { id: 4, title: "Licenciatura En Gestión De Las Instituciones Educativas", description: `Gestionar instituciones educativas implica
mucho más que administrar: es también
liderar con compromiso y visión crítica.
Para eso, aprendé cómo incidir activamente
en la mejora del sistema educativo,
acompañar procesos de cambio, promover
la inclusión, la participación democrática y el
derecho a la educación desde una mirada
situada y transformadora.`}
];

  const tecnicaturas = [
    { id: 5, title: "Tecnicatura Universitaria En Ciencia De Datos", description: `Los datos están en todas partes: desde las
redes sociales hasta la salud, el comercio o el
transporte. Esta Tecnicatura te prepara para
transformar grandes volúmenes de datos en
información útil para resolver problemas
reales y tomar decisiones informadas. Vas a
formarte como técnico/a con capacidades
prácticas para trabajar en proyectos de Ciencia
de Datos en equipos multidisciplinarios.` },
    { id: 6, title: "Tecnicatura Universitaria En Turismo Sostenible", description: `Formate como profesional para gestionar
experiencias turísticas con compromiso
ambiental y social. Esta tecnicatura te brindará
herramientas prácticas para diseñar, organizar y
acompañar actividades turísticas sostenibles,
integradas al territorio y con impacto positivo en
las comunidades locales.` },
    { id: 7, title: "Tecnicatura Universitaria En Relaciones Internacionales", description: `En un mundo donde los desafíos sociales,
económicos y políticos cruzan fronteras,
incorporá herramientas técnicas y prácticas
para analizar y actuar en escenarios
internacionales. Si te interesa la cooperación,
el comercio internacional, las estrategias
globales con impacto local y la diplomacia y
sus nuevas dinámicas, esta es la tecnicatura
para vos.` },
    { id: 8, title: "Tecnicatura Universitaria En Desastres Y Emergencias Sanitarias", description: `Frente al aumento de eventos críticos como
catástrofes naturales, emergencias sanitarias o
crisis humanitarias, se necesitan profesionales
especializados en su prevención, mitigación y
respuesta. Esta tecnicatura te forma para
actuar eficazmente en situaciones que
requieren acción rápida, coordinación y
sensibilidad social.` }
  ];

  const diplomaturas = [
    { id: 9, title: "Diplomatura en Ciencias sociales aplicadas al sector privado", description: `La Diplomatura presentará los aportes de las Ciencias Sociales a las empresas y las
demandas, estilos, lenguajes y dinámicas de las distintas industrias del sector
privado. También se propiciarán instancias específicas para el networking y
consultas a especialistas de cada área.` },
    { id: 10, title: "Diplomatura en Innovación Aplicada a la Gestión Deportiva de Clubes y Federaciones", description: "La Diplomatura tiene como objetivo formar profesionales capaces de gestionar en el deporte de forma eficiente e innovadora en búsqueda de la inclusión, la salud y el bienestar general." },
    { id: 11, title: "Diplomatura en Gestión Integral de Riesgo y Desarrollo Resiliente", description: "La diplomatura tiene como objetivo fortalecer las capacidades y aptitudes competentes de profesionales, técnicos y tomadores de decisión en la identificación, evaluación y reducción de riesgos de cualquier origen, como así también para el diseño e implementación de iniciativas de gestión de riesgo a partir de un enfoque integral que incluye la interacción con diversas disciplinas convergentes." },
    { id: 12, title: "Diplomatura en Investigación Criminal", description: "La presente diplomatura tiene por objeto introducir a los estudiantes en el ámbito del Derecho Procesal Penal, y particularmente en el desarrollo de las nuevas modalidades de investigación criminal." },
    { id: 13, title: "Diplomatura en Derechos Humanos y Garantías Judiciales", description: "La diplomatura tiene como objetivo brindar una formación integral y especializada en derechos humanos y garantías judiciales, que permita a los y las participantes analizar, interpretar y aplicar los principios constitucionales y los sistemas internacionales de protección de derechos humanos, con especial atención a las garantías procesales, la responsabilidad de actores estatales y no estatales." },
    { id: 14, title: "Diplomatura en Redes Informáticas y Comunicación de Datos", description: "" },
    { id: 15, title: "Diplomatura en Autismo: Clínica y Práctica Psicoanalítica", description: "Curso destinado a profesionales del campo de la Salud y de la Educación. Profesionales o estudiantes avanzados en las áreas de psicología, psiquiatría, trabajo social, enfermería, terapia ocupacional y otras disciplinas o campos pertinentes." },
    { id: 16, title: "Diplomatura en Desarrollo Emprendedor y Empresarial", description: "" }
  ];

  // Career card expand/collapse
  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const CareerCard = ({ career, isExpanded, onClick }) => {
    // Check if the career ID is from diplomaturas (IDs 9-16)
    const isDiplomatura = career.id >= 9 && career.id <= 16;

    return (
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
            <div className="career-buttons">
              <button className="more-info-btn">Más información</button>
              {!isDiplomatura && <button className="brochure-btn">Folleto</button>}
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- Slider logic ---
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Ensure currentIndex stays within bounds when visibleCount changes or number of items changes
  useEffect(() => {
    const total = 4; // number of course cards in section (en tu JSX original eran 4)
    const maxIndex = Math.max(0, total - visibleCount);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [visibleCount, currentIndex]);

  const courses = [
    { 
      id: 'c1', 
      img: './course1.jpg', 
      title: 'curso 1' 
    },
    { 
      id: 'c2', 
      img: './course2.jpg', 
      title: 'curso 2' 
    },
    { 
      id: 'c3', 
      img: './course3.jpg', 
      title: 'curso 3' 
    },
    { 
      id: 'c4', 
      img: './course4.jpg', 
      title: 'curso 4' 
    }
  ];

  const totalCourses = courses.length;
  const maxIndex = Math.max(0, totalCourses - visibleCount);

  // Actualiza las funciones de navegación
  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < courses.length - visibleCount) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // compute transform percent (cada movimiento equivale a (100/visibleCount)%)
  const translatePercent = (currentIndex * 100) / visibleCount;
  const transformStyle = { transform: `translateX(-${translatePercent}%)` };

  return (
    <div className="carreras-container">
      <div className="section-carreras">
        <div className="overlay-carreras">
          <h1 className="title-carreras">CARRERAS</h1>
        </div>
      </div>

      <section className="careers-section">
        <div className="container-carreras">
          <div className='green-bar-car'></div>
          <div className="section-header-car">
            <h2>NUESTRAS CARRERAS</h2>
          </div>

          <div className="careers-grid">
            <div className="careers-column">
              {licenciaturas.map(career => (
                <CareerCard key={career.id} career={career} isExpanded={expandedItem === career.id} onClick={handleItemClick} />
              ))}
            </div>
            <div className="careers-column">
              {tecnicaturas.map(career => (
                <CareerCard key={career.id} career={career} isExpanded={expandedItem === career.id} onClick={handleItemClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section diplomaturas-section">
        <div className="container-carreras">
          <div className="section-header-car">
            <h2>NUESTRAS DIPLOMATURAS</h2>
          </div>

          <div className="careers-grid">
            <div className="careers-column">
              {diplomaturas.slice(0, 4).map(career => (
                <CareerCard key={career.id} career={career} isExpanded={expandedItem === career.id} onClick={handleItemClick} />
              ))}
            </div>
            <div className="careers-column">
              {diplomaturas.slice(4, 8).map(career => (
                <CareerCard key={career.id} career={career} isExpanded={expandedItem === career.id} onClick={handleItemClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="student-experiences-section">
        <div className="container-carreras">
          <h2 className="experiences-title">Experiencias de alumnos</h2>
          <div className="experiences-grid">
            <div className="experience-card">
              <div className="student-photo"><img src="./student1.jpg" alt="1" /></div>
              <div className="experience-content"><p>"Opinion 1"</p><div className="student-info"><h4>NN</h4><span>Alumna de </span></div></div>
            </div>

            <div className="experience-card">
              <div className="student-photo"><img src="./student2.jpg" alt="2" /></div>
              <div className="experience-content"><p>"Opinion 2"</p><div className="student-info"><h4>NN</h4><span>Alumna de </span></div></div>
            </div>

            <div className="experience-card">
              <div className="student-photo"><img src="./student3.jpg" alt="3" /></div>
              <div className="experience-content"><p>"Opinion 3"</p><div className="student-info"><h4>NN</h4><span>Alumno de </span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos disponibles con slider funcional */}
      <section className="available-courses-section">
        <div className="container-carreras">
          <h2 className="courses-title">Cursos disponibles</h2>
          
          <div className="courses-slider">
            <button
              className="slider-btn prev-btn"
              onClick={goPrev}
              disabled={currentIndex === 0}
            >
              {'<'}
            </button>

            <div 
              className="courses-grid-slider"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  className="course-card"
                >
                  <div className="course-image">
                    <img src={course.img} alt={course.title} />
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="slider-btn next-btn"
              onClick={goNext}
              disabled={currentIndex >= courses.length - visibleCount}
            >
              {'>'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carreras;
