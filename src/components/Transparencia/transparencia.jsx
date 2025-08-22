import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './transparencia.css';

function Transparencia() {
  // Estado para controlar la visibilidad del modal y su contenido
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: null
  });

  // Función para abrir el modal con el contenido y título adecuados
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <>
      {/* Sección Hero con el título principal */}
      <div className="hero-section-transparencia">
        <h1 className="hero-title">TRANSPARENCIA</h1>
      </div>

      {/* Separador visual */}
      <div className="container-fluid">
        <div className="row row-custom-separator">
          <div className="col"></div>
        </div>
      </div>

      {/* Contenido principal de la página */}
      <div className="transparencia-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="lead">
                La Universidad Nacional del Delta cumple con la Ley Nº 27.275 de Acceso a la información pública, que tiene por objetivo garantizar el efectivo ejercicio del derecho de acceso a la información pública, promover la participación ciudadana y la transparencia de la gestión pública.
              </p>
              
              <p>
                En su artículo 32, la ley establece la obligación de publicar activamente información de manera clara, estructurada y entendible, procurando remover toda barrera que obstaculice o dificulte su reutilización por parte de terceros y permitiéndole a la ciudadanía conocer qué hace el Estado.
              </p>
              
              <p>
                Para conocer más sobre la temática de <strong>transparencia gubernamental</strong> y el porqué de su importancia se desarrolló un sitio con información:
              </p>
              
              {/* Botón para el Portal Nacional de Transparencia */}
              <div className="text-center my-5">
                <a 
                  href="https://www.argentina.gob.ar/justicia/accesoalainformacionpublica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg portal-btn"
                >
                  Portal Nacional de Transparencia
                </a>
              </div>
              
              <p>
                En caso de alguna duda respecto de la información aquí publicada podés contactarte con la persona Responsable de Políticas de Transparencia:
              </p>
              
              <ul className="contact-info">
                <li><strong>Nombre y Apellido:</strong> Pablo Manuel Baigorria</li>
                <li><strong>Correo electrónico:</strong> transparencia@undelta.edu.ar</li>
                <li><strong>Teléfono:</strong> +54 9 11 7099-0250</li>
              </ul>
              
              <p>
                La Agencia de Acceso a la Información Pública es el órgano garante de las Políticas de Transparencia de los organismos. Para corroborar el grado de cumplimiento de los compromisos de transparencia podrás acceder a los resultados del Índice de Transparencia.  
              </p>
              
              <p className="mb-5">
                A continuación, vas a encontrar en cada pestaña un tema temático con información de carácter público y actualizada.
              </p>
              
              {/* Grid de Botones */}
              <div className="temas-grid">
                <div className="row">

                  {/* Organigrama */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Organigrama, Autoridades y Personal",
                        <>
                          <p className="lead mb-4">
                            Aquí podés acceder a la disposición y la relación funcional de las distintas áreas que componen este organismo, 
                            así como la normativa de la estructura organizacional de la que emerge. Además, podés conocer el listado de 
                            autoridades de cada área junto con las normas que aprueban sus correspondientes designaciones.
                          </p>

                          {/* Organigrama y Estructura */}
                          <div className="mb-5">
                            <h4 className="text-primary mb-3">📊 Organigrama y Estructura</h4>
                            <p>A continuación se adjunta el Estatuto de la Universidad Nacional del Delta, donde se encuentra estipulada la estructura general de la institución.</p>
                            
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="card h-100">
                                  <div className="card-body text-center">
                                    <img 
                                      src="https://placehold.co/400x250/0066cc/ffffff?text=Organigrama+General+UNDelta" 
                                      alt="Organigrama General"
                                      className="img-fluid rounded mb-3"
                                    />
                                    <h6>Estructura General</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="card h-100">
                                  <div className="card-body text-center">
                                    <img 
                                      src="https://placehold.co/400x250/28a745/ffffff?text=Consejo+Directivo" 
                                      alt="Estructura Consejo Directivo"
                                      className="img-fluid rounded mb-3"
                                    />
                                    <h6>Estructura del Consejo Directivo</h6>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-center mb-4">
                              <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/390000-394999/394281/res2742me.pdf" className="btn btn-primary me-3">
                                📄 Conoce el Estatuto de la Universidad Nacional del Delta
                              </a>
                              <a href="https://drive.google.com/file/d/11teCLn7jbFb2S4QnzkpBo2yubD6tycGx/view" className="btn btn-outline-primary">
                                🏛️ Estructura del Consejo Superior
                              </a>
                              <a href="https://drive.google.com/file/d/1J3CFPAjuBHc4ZadA21-cqbsJVnZl8J6h/view" className="btn btn-outline-primary">
                                🏛️ Estructura del Consejo Directivo
                              </a>
                            </div>
                            <div className="mb-5">
                              <h4 className="text-primary mb-3">👤 Designaciones</h4>
                              <ul className="list-group">
                                <li className="list-group-item">
                                  <strong>Lic. Farias, Silvia Carolina</strong><br />
                                  DNI: 23.614.474 – Rectora<br />
                                  <em>Designación – Lic. Silvia Carolina Farias</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Cdor. Puccio, Mariano</strong><br />
                                  DNI: 24.595.794 – Secretario General<br />
                                  <em>Designación – Cdor. Mariano Javier Puccio</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Lic. Rovira, Sebastián</strong><br />
                                  DNI: 42.149.689 – Secretario Administrativo, Financiero y Técnico<br />
                                  <em>Designación – Lic. Sebastian Rovira</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Prof. Castro, Sergio</strong><br />
                                  DNI: 21.094.957 – Secretario de Extensión Universitaria y Enlace con la Comunidad<br />
                                  <em>Designación – Prof. Sergio Gustavo Castro</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Dr. Quilici, Federico Domingo</strong><br />
                                  DNI: 18.844.392 – Secretario Académico<br />
                                  <em>Designación – Dr. Federico Domingo Quilici</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Dra. Del Cogliano, Natalia Cecilia</strong><br />
                                  DNI: 31.349.099 – Secretaria de Vinculación con el Empleo y la Producción<br />
                                  <em>Designación – Dra. Natalia del Cogliano</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Dr. Davidovich, Pablo</strong><br />
                                  DNI: 26.200.499 – Director de Asuntos Legales<br />
                                  <em>Designación – Dr. Pablo Omar Davidovich</em>
                                </li>
                                <li className="list-group-item">
                                  <strong>Mg. Giuliani, Leonardo Andrés</strong><br />
                                  DNI: 28.632.556 – Director de Instituto de Innovación Educación<br />
                                  <em>Designación – Mg. Leonardo Ariel Giuliani</em>
                                </li>
                              </ul>
                            </div>

                            {/* Personal */}
                            <div className="mb-5">
                              <h4 className="text-primary mb-3">👥 Personal</h4>
                              <p>
                                La dotación óptima del organismo es de <strong>50 agentes</strong>. 
                                La Universidad Nacional del Delta está desarrollando una página para la divulgación de la plantilla de personal.
                              </p>
                            </div>

                            {/* Forma de Gobierno */}
                            <div>
                              <h4 className="text-primary mb-3">🏛️ Forma de Gobierno y Autonomía</h4>
                              <p>
                                El Estatuto de la Universidad Nacional del Delta tiene estipulado su forma de gobierno y autonomía.
                              </p>
                              <a href="#" className="btn btn-primary">
                                📄 Conoce el Estatuto de la Universidad Nacional del Delta
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    >
                      Organigrama, Autoridades y Personal
                    </button>
                  </div>

                  {/* Misión Y Servicios A La Ciudadanía */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Misión Y Servicios A La Ciudadanía",
                        "Desde la Universidad Nacional del Delta nos proponemos como objetivo la formación integral de los estudiantes que en esta institución se formen, preparándolos para desempeñarse en actividades científicas y profesionales, inculcando asimismo el respeto por las normas e instituciones de la Constitución Nacional y la República Argentina..."
                      )}
                    >
                      Misión Y Servicios A La Ciudadanía
                    </button>
                  </div>

                  {/* Transferencias */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Transferencias",
                        "Información detallada sobre transferencias de fondos recibidas del gobierno nacional y provincial, así como transferencias realizadas a otras instituciones educativas y organizaciones comunitarias."
                      )}
                    >
                      Transferencias
                    </button>
                  </div>

                  {/* Gestión De La Información */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Gestión De La Información",
                        "Políticas y procedimientos para la gestión de información institucional, incluyendo protocolos de seguridad de datos, políticas de archivo y sistemas de información utilizados."
                      )}
                    >
                      Gestión De La Información
                    </button>
                  </div>

                  {/* Auditorías Y Evaluaciones */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Auditorías Y Evaluaciones",
                        "Resultados de auditorías internas y externas realizadas a la institución, así como evaluaciones de programas académicos y administrativos. Incluye planes de mejora implementados."
                      )}
                    >
                      Auditorías Y Evaluaciones
                    </button>
                  </div>

                  {/* Obsequios Y Viajes */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Obsequios Y Viajes",
                        "Registro completo de obsequios recibidos por autoridades universitarias y viajes oficiales realizados por personal de la institución, con detalles de destino, propósito y costos."
                      )}
                    >
                      Obsequios Y Viajes
                    </button>
                  </div>

                  {/* Catálogo De Datos Abiertos */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Catálogo De Datos Abiertos",
                        "Acceso a nuestro catálogo de datos abiertos, que incluye información estadística sobre estudiantes, carreras, investigaciones y gestión administrativa en formatos reutilizables."
                      )}
                    >
                      Catálogo De Datos Abiertos
                    </button>
                  </div>

                  {/* Transparencia Proactiva */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Transparencia Proactiva",
                        "Iniciativas proactivas de transparencia implementadas por la universidad, incluyendo publicaciones periódicas de información relevante, foros de participación ciudadana y mecanismos de rendición de cuentas."
                      )}
                    >
                      Transparencia Proactiva
                    </button>
                  </div>

                  {/* Participación Ciudadana */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Participación Ciudadana",
                        "Programas y canales de participación ciudadana, incluyendo consejos consultivos, audiencias públicas, consultas ciudadanas y mecanismos para presentar propuestas e iniciativas."
                      )}
                    >
                      Participación Ciudadana
                    </button>
                  </div>

                  {/* Declaraciones Juradas */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Declaraciones Juradas",
                        "Acceso a las declaraciones juradas de autoridades universitarias y personal clave de la institución, según lo establecido por la normativa de ética pública."
                      )}
                    >
                      Declaraciones Juradas
                    </button>
                  </div>

                  {/* Presupuesto */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Presupuesto",
                        "Presupuesto anual de la universidad, ejecución presupuestaria trimestral, y análisis comparativos con años anteriores. Incluye información detallada sobre ingresos y gastos."
                      )}
                    >
                      Presupuesto
                    </button>
                  </div>

                  {/* Compras Y Contrataciones */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Compras Y Contrataciones",
                        "Información completa sobre procesos de compra y contratación de bienes y servicios, incluyendo licitaciones, contratos directos y resultados de procesos de selección."
                      )}
                    >
                      Compras Y Contrataciones
                    </button>
                  </div>

                  {/* Actos Administrativos */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Actos Administrativos",
                        "Registro de actos administrativos relevantes, incluyendo resoluciones rectorales, disposiciones y decisiones de órganos colegiados de gobierno universitario."
                      )}
                    >
                      Actos Administrativos
                    </button>
                  </div>

                  {/* Permisos Y Concesiones */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Permisos Y Concesiones",
                        "Información sobre permisos otorgados para uso de instalaciones universitarias y concesiones de servicios dentro del campus, con detalles de plazos, condiciones y beneficiarios."
                      )}
                    >
                      Permisos Y Concesiones
                    </button>
                  </div>

                  {/* Acordadas Y Sentencias */}
                  <div className="col-md-4 col-sm-6 mb-4">
                    <button 
                      className="tema-btn"
                      onClick={() => openModal(
                        "Acordadas Y Sentencias",
                        "Registro de acordadas del Consejo Superior y sentencias judiciales relevantes relacionadas con la universidad, incluyendo fallos en casos de interés institucional."
                      )}
                    >
                      Acordadas Y Sentencias
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal genérico (grande y centrado) */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        dialogClassName="modal-xl-custom"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent.content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Transparencia;
