import React, { useEffect, useState, useRef } from 'react';
import './Carreras.css';
import { href } from 'react-router';

const Carreras = () => {
  
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const handleBrochureDownload = (brochureUrl, careerTitle) => {
    if (!brochureUrl) {
      console.error(`Folleto no disponible para la carrera: ${careerTitle}`);
      return;
    }
    window.open(brochureUrl, '_blank');
  };

  const handleMoreInfo = (infoUrl, careerTitle) => {
    if (!infoUrl) {
      console.error(`URL de más información no disponible para la carrera: ${careerTitle}`);
      return;
    }
    window.open(infoUrl, '_blank');
  };

  const licenciaturas = [
    { 
      id: 1, 
      title: "Licenciatura En Ciencia De Datos", 
      description: `La Ciencia de Datos es una disciplina clave en
la era digital: permite transformar grandes
volúmenes de datos en conocimiento útil para
tomar decisiones estratégicas en ámbitos
como la salud, el comercio, la industria o el
gobierno. Estudiá esta carrera y convertite en
un profesional capaz de dar respuesta a las
necesidades de nuestra sociedad, empresas y
organismos a través de la construcción de
modelos de Ciencia de Datos.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Licenciatura-Ciencia-de-Datos-UNDelta.pdf",
      infoUrl: "/Carreras/LicCieDat"
    },
    { 
      id: 2, 
      title: "Licenciatura En Turismo Y Desarrollo Sostenible", 
      description: `En un contexto donde el turismo puede ser motor
del desarrollo local, esta licenciatura te ayudará a
construir una mirada aplicada, territorial y
sostenible. Vas a adquirir herramientas para
investigar, así como también para impulsar proyectos
turísticos que respeten los ecosistemas, promuevan
la equidad y valoren el patrimonio natural y cultural de
tu región.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Licenciatura-Turismo-y-Desarrollo-Sostenible-UNDelta.pdf",
      infoUrl: "/Carreras/LicTurDes"
    },
    { 
      id: 3, 
      title: "Licenciatura En Relaciones Internacionales Y Asuntos Globales", 
      description: `En un mundo donde los desafíos trascienden las fronteras, se necesitan profesionales capaces
de comprender las tendencias actuales e
intervenir en la complejidad global. Si querés
incidir en escenarios internacionales con
impacto local, esta carrera es para vos.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Licenciatura-Relaciones-Internacionales-y-Asuntos-Globales-UNDelta.pdf",
      infoUrl: "/Carreras/LicRelInt"
    },
    { 
      id: 4, 
      title: "Licenciatura En Gestión De Las Instituciones Educativas", 
      description: `Gestionar instituciones educativas implica
mucho más que administrar: es también
liderar con compromiso y visión crítica.
Para eso, aprendé cómo incidir activamente
en la mejora del sistema educativo,
acompañar procesos de cambio, promover
la inclusión, la participación democrática y el
derecho a la educación desde una mirada
situada y transformadora.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Lic_Educacion.pdf",
      infoUrl: "/Carreras/LicGesIns"
    }
  ];

  const tecnicaturas = [
    { 
      id: 5, 
      title: "Tecnicatura Universitaria En Ciencia De Datos", 
      description: `Los datos están en todas partes: desde las
redes sociales hasta la salud, el comercio o el
transporte. Esta Tecnicatura te prepara para
transformar grandes volúmenes de datos en
información útil para resolver problemas
reales y tomar decisiones informadas. Vas a
formarte como técnico/a con capacidades
prácticas para trabajar en proyectos de Ciencia
de Datos en equipos multidisciplinarios.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Tecnicatura-Ciencia-de-Datos-UNDelta.pdf",
      infoUrl: "/Carreras/TecCieDat"
    },
    { 
      id: 6, 
      title: "Tecnicatura Universitaria En Turismo Sostenible", 
      description: `Formate como profesional para gestionar
experiencias turísticas con compromiso
ambiental y social. Esta tecnicatura te brindará
herramientas prácticas para diseñar, organizar y
acompañar actividades turísticas sostenibles,
integradas al territorio y con impacto positivo en
las comunidades locales.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Tecnicatura-Turismo-UNDelta.pdf",
      infoUrl: "/Carreras/TecTurSos"
    },
    { 
      id: 7, 
      title: "Tecnicatura Universitaria En Relaciones Internacionales", 
      description: `En un mundo donde los desafíos sociales,
económicos y políticos cruzan fronteras,
incorporá herramientas técnicas y prácticas
para analizar y actuar en escenarios
internacionales. Si te interesa la cooperación,
el comercio internacional, las estrategias
globales con impacto local y la diplomacia y
sus nuevas dinámicas, esta es la tecnicatura
para vos.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Tecnicatura-RRII-UNDelta.pdf",
      infoUrl: "/Carreras/TecRelInt"
    },
    { 
      id: 8, 
      title: "Tecnicatura Universitaria En Desastres Y Emergencias Sanitarias", 
      description: `Frente al aumento de eventos críticos como catástrofes naturales emergencias sanitarias o
crisis humanitarias, se necesitan profesionales
especializados en su prevención, mitigación y
respuesta. Esta tecnicatura te forma para
actuar eficazmente en situaciones que
requieren acción rápida, coordinación y
sensibilidad social.`,
      brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/04/Tecnicatura-Desastres-y-Emergencias-Sanitarias-UNDelta.pdf",
      infoUrl: "/Carreras/TecDesEme"
    }
  ];

const diplomaturas = [
  { 
    id: 9, 
    title: "Diplomatura en Ciencias sociales aplicadas al sector privado", 
    description: `La Diplomatura presentará los aportes de las Ciencias Sociales a las empresas y las demandas, estilos, lenguajes y dinámicas de las distintas industrias del sector privado. También se propiciarán instancias específicas para el networking y consultas a especialistas de cada área.`,
    brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/08/IMG_7440-scaled.jpeg",
    infoUrl: "https://undelta.edu.ar/wp-content/uploads/2025/08/Diplomatura-en-Ciencias-Sociales-Aplicadas-al-Sector-Privado.docx.pdf"
  },
  { 
    id: 10, 
    title: "Diplomatura en Innovación Aplicada a la Gestión Deportiva de Clubes y Federaciones", 
    description: "La Diplomatura tiene como objetivo formar profesionales capaces de gestionar en el deporte de forma eficiente e innovadora en búsqueda de la inclusión, la salud y el bienestar general.",
    brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/deporte-scaled.jpg", 
    infoUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/diseno-Diplomatura-en-Innovacion-en-la-Gestion-Deportiva-de-Clubes-y-Federaciones.docx.pdf"
  },
  { 
    id: 11, 
    title: "Diplomatura en Gestión Integral de Riesgo y Desarrollo Resiliente", 
    description: "La diplomatura tiene como objetivo fortalecer las capacidades y aptitudes competentes de profesionales, técnicos y tomadores de decisión en la identificación, evaluación y reducción de riesgos de cualquier origen, como así también para el diseño e implementación de iniciativas de gestión de riesgo a partir de un enfoque integral que incluye la interacción con diversas disciplinas convergentes.",
    brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/folleto-gestion.jpg",
    infoUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/plan-de-estudio-diseno-gestion-integral.pdf" 
  },
  { 
    id: 12, 
    title: "Diplomatura en Investigación Criminal", 
    description: "La presente diplomatura tiene por objeto introducir a los estudiantes en el ámbito del Derecho Procesal Penal, y particularmente en el desarrollo de las nuevas modalidades de investigación criminal.",
    brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/folleto-investigacion-criminal.jpg",
    infoUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/plan-de-estudio-diseno-Investigacion-Criminal.pdf"
  },
  { 
    id: 13, 
    title: "Diplomatura en Derechos Humanos y Garantías Judiciales", 
    description: "La diplomatura tiene como objetivo brindar una formación integral y especializada en derechos humanos y garantías judiciales, que permita a los y las participantes analizar, interpretar y aplicar los principios constitucionales y los sistemas internacionales de protección de derechos humanos, con especial atención a las garantías procesales, la responsabilidad de actores estatales y no estatales.",
    brochureUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/Diseno-sin-titulo-scaled.png",
    infoUrl: "https://undelta.edu.ar/wp-content/uploads/2025/07/plan-de-estudio-diseno-ddhh.pdf"
  },
];

const CareerCard = ({ career, isExpanded, onClick }) => {
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
            {/*BOTON DE INSCRIPCION FINALIZADA, COMENTAR SI NO ES NECESARIO*/}
            <button className="inscription-finished-btn" disabled>
              INSCRIPCIÓN FINALIZADA
            </button>
            <button 
              className="more-info-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleMoreInfo(career.infoUrl, career.title);
              }}
            >
              Más información
            </button>
            <button 
              className="brochure-btn"
              onClick={(e) => {
                e.stopPropagation(); 
                handleBrochureDownload(career.brochureUrl, career.title);
              }}
            >
              Folleto
            </button>
          

            

          </div>
        </div>
      )}
    </div>
  );
  };

    const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const total = 4;
    const maxIndex = Math.max(0, total - visibleCount);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [visibleCount, currentIndex]);

  // --- Slider ---
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


  useEffect(() => {
    const total = 4; 
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
          
          <div className="diplo-list">
            {diplomaturas.map(career => (
              <CareerCard key={career.id} career={career} isExpanded={expandedItem === career.id} onClick={handleItemClick} />
            ))}
          </div>
        </div>
      </section>
      {/* <section className="available-courses-section">
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
      </section> */}
    </div>
  );
};

export default Carreras;