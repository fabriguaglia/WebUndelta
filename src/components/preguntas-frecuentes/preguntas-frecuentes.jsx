import React, { useState, useEffect } from 'react';
import './preguntas-frecuentes.css';
import Preguntasimg from './preguntas.png'

const FAQPage = () => {
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');
  const [visibleElements, setVisibleElements] = useState([]);

  // Simular el efecto de fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleElements(['title', 'accordion']);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (targetId) => {
    setActiveAccordion(activeAccordion === targetId ? '' : targetId);
  };

  const faqData = [
    {
      id: 'collapseOne',
      question: '¿Cómo Me Inscribo A Una Carrera?',
      answer: (
        <div>
        El proceso de inscripción para cualquiera de nuestras carreras consta de dos etapas:

        Una virtual a través de nuestra página web (undelta.edu.ar)
        Una presencial en la cual deberás acercarte a la UNDelta (Av. Avellaneda 2270, San Fernando de lunes a viernes de 9:30 a 19 hs.) para presentar y validar tu documentación (DNI original y copia y Título secundario original y copia). 
        Si estás cursando tu último año del secundario tenés que presentar Certificado de alumno regular y si terminaste el secundario y aún no tenés el título definitivo solicitaá en tu escuela Certificado de título en trámite.

        ¿En qué consiste la inscripción virtual?

        Deberás crearte un usuario y completar el formulario con tus datos personales en el SIU-Guaraní, que es la plataforma que vas a usar para consultas e inscripciones a lo largo de toda tu carrera. Para ver el paso a paso leé EL SIGUIENTE TUTORIAL O MIRA EL VIDEO TUTORIAL que te dejamos por acá.

        Recomendamos realizar la inscripción desde una computadora.

        Si no contás con una computadora o tenés dudas sobre el proceso de inscripción ¡no te preocupes! Acercate directamente a la UNDelta (Av. Avellaneda 2270, San Fernando de lunes a viernes de 9:30 a 19 hs.) para que podamos ayudarte.
        </div>
      )
    },
    {
      id: 'collapseTwo',
      question: '¿En Qué Consiste La Inscripción Virtual?',
      answer: (
        <div>
            Para realizar tu inscripción a una carrera, deberás contar con:
            Documento Nacional de Identidad (ORIGINAL Y COPIA).
            Título secundario (ORIGINAL Y COPIA).
            Si estás cursando tu último año del secundario: Certificado de alumno regular (ORIGINAL Y COPIA).
            Si terminaste el secundario y aún no tenés el título Certificado de título en trámite (ORIGINAL Y COPIA).
            Excepcionalmente, los mayores de 25 años que no posean título secundario, según lo establece el Artículo 7 de la Ley de Educación Superior 24.521, podrán ingresar siempre que demuestren los conocimientos necesarios a través de las evaluaciones que realice la Universidad.
            Si estás interesado/a en la Licenciatura en Gestión de las Instituciones Educativas (CCC) conocé los requisitos haciendo CLIC ACÁ. 
        </div>
      )
    },
    {
      id: 'collapseThree',
      question: '¿Cuáles Son Los Requisitos Para Inscribirme?',
      answer: (
        <div>
          Para poder inscribirte en las primeras materias de tu carrera, primero deberás realizar el Curso de Preparación Universitaria, que comenzará en Agosto de este año.
        </div>
      )
    },
    {
      id: 'collapseFour',
      question: '¿Cuándo comienzo a cursar?',
      answer: (
        <div>
          Para poder inscribirte en las primeras materias de tu carrera, primero deberás realizar el Curso de Preparación Universitaria, que comenzará en Agosto de este año.
        </div>
      )
    },
    {
      id: 'collapseFive',
      question: '¿Qué es el Curso de Preparación Universitaria?',
      answer: (
        <div>
          Todos/as los/as ingresantes a las carreras de la UNDelta deberán realizar el Curso de Preparación Universitaria (CPU) como requisito obligatorio antes de comenzar a cursar la carrera elegida. Este curso no es eliminatorio ni selectivo: tiene como objetivo acompañar a los/as estudiantes en un momento tan fundamental como es el inicio de su vida académica.

          El Curso de Preparación Universitaria consta de tres asignaturas: 

          Introducción a la Vida Universitaria
          Introducción a las Técnicas de Lectura y Escritura Universitaria
          Introducción al Pensamiento Lógico
          Se cursará una vez por semana de manera presencial, con posibilidad de elegir entre diferentes turnos. Comenzará en Agosto de 2025.

          Excepciones

          Los graduados provenientes de carreras de pregrado o grado universitarias de instituciones públicas o privadas, del país o del extranjero, debidamente reconocidas como tales. 
          Los egresados del nivel superior no universitario comprendidas en la Ley N° 24.591 de Educación Superior y sus modificatorias, que emitan título con validez nacional y que se encuentren debidamente reconocidas como tales por la autoridad educativa competente.
        </div>
      )
    },
    {
      id: 'collapseSix',
      question: '¿Qué necesito si cursé el nivel secundario en el extranjero?',
      answer: (
        <div>
        En el caso de estudios secundarios realizados en el extranjero, el título o certificado de estudios completos deberá ser acompañado de una constancia expedida por autoridad competente indicando que el título de referencia habilita para ingresar a la Universidad en su país de origen.
        Conocé cómo realizar el apostillado AQUÍ.
        </div>
      )
    },
    {
      id: 'collapseSeven',
      question: '¿Cuál es la diferencia entre cursar una Tecnicatura Universitaria y una Licenciatura en UNDelta?',
      answer: ( 
        <div>
        Las Tecnicaturas Universitarias de la Universidad Nacional del Delta tienen una orientación más práctica y técnica, con una duración de cinco cuatrimestres. Las Licenciaturas, en cambio, se focalizan también en la investigación y tienen una duración de ocho cuatrimestres.

        Para facilitar el desarrollo de la trayectoria académica de nuestros estudiantes en la UNDelta articulamos nuestras Tecnicaturas Universitarias con nuestras Licenciaturas. Es por ello que una vez que termines de cursar una de nuestras Tecnicaturas Universitarias podrás continuar con el tramo superior para obtener la Licenciatura correspondiente. A su vez, si te inscribiste en alguna de nuestras licenciaturas, aprobados los cinco primeros cuatrimestres, obtendrás el título intermedio de Técnico/a Universitario/a.
        </div>)
    },
    {
      id: 'collapseEight',
      question: '¿Me puedo anotar si estoy cursando mi último año del secundario?',
      answer: (
        <div>
          Si estás en tu último año del secundario te podeés anotar y en agosto de 2025 empezar el Curso de Preparación Universitaria (CPU). 
          IMPORTANTE: Recordá que para empezar la carrera que elegiste en marzo del 2026 antes tenés que haber finalizado el secundario y no adeudar ninguna materias. Esto quiere decir que si cursaste satisfactoriamente el CPU y no finalizaste el secundario NO vas a poder empezar a cursar la Licenciatura o Tecnicatura en la cual te anotaste.  
        </div>
      )
    },

    {
      id: 'collapseNine',
      question: '¿Si tengo dudas sobre el proceso de inscripción a quién puedo consultar?',
      answer: (
        <div>
        Ante cualquier duda o inquietud sobre el proceso de inscripción a carreras podes escribirnos a estudiantes@undelta.edu.ar o acercate a la UNDelta (Av. Avellaneda 2270, San Fernando)  de lunes a viernes de 9:30 a 19 hs.
        </div>
      )
    }
  ];

  const AccordionItem = ({ item, isActive, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={`faq-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="faq-card-header">
          <button
            className={`faq-btn-link ${isHovered ? 'hovered' : ''}`}
            onClick={() => onToggle(item.id)}
          >
            <span>{item.question}</span>
            <span className={`faq-plus-icon ${isActive ? 'rotated' : ''}`}>
              +
            </span>
          </button>
        </div>
        <div className={`faq-collapse-content ${isActive ? 'show' : ''}`}>
          <div className="faq-card-body">
            {item.answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero-section">
        <div className="faq-hero-content">
          
          <h1 className="faq-hero-title">PREGUNTAS FRECUENTES</h1>
          <p className="faq-hero-subtitle">
            Encuentra respuestas a las consultas más comunes sobre inscripciones y procesos académicos
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-container">
        <h2 className={`faq-section-title ${visibleElements.includes('title') ? 'visible' : ''}`}>
          ¿Tienes dudas?
        </h2>
        
        <div className={`faq-custom-accordion ${visibleElements.includes('accordion') ? 'visible' : ''}`}>
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isActive={activeAccordion === item.id}
              onToggle={toggleAccordion}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="faq-contact-info">
        <h3 className="faq-contact-title">¿Necesitas más información?</h3>
        <p className="faq-contact-text">
          Ante cualquier duda o inquietud sobre el proceso de inscripción a carreras, puedes escribirnos a{' '}
          <strong>estudiantes@undelta.edu.ar</strong> o acercarte a la UNDelta (Av. Avellaneda 3250, San Fernando) de lunes a viernes de 9:30 a 19 hs.
        </p>
      </section>
    </div>
  );
};

export default FAQPage;