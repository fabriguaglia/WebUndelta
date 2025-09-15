import React, {useEffect, useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './transparencia.css';

import Org1 from "./Organigrama-1.jpeg"
import Org2 from "./Organigrama-2.jpeg";

function Transparencia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                  href="https://portal.transparencia.gob.ar/" 
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
                      
                      {/*Misión y servicios a la ciudadanía*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#misionModal">
                          Misión y servicios a la ciudadanía
                        </button>
                        <div className="modal fade" id="misionModal" tabIndex="-1" aria-labelledby="misionModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="misionModalLabel">Misión y servicios a la ciudadanía</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                Desde la Universidad Nacional del Delta nos proponemos como objetivo la formación integral de los estudiantes que en esta institución se formen, preparándolos para desempeñarse en actividades científicas y profesionales, inculcando asimismo el respeto por las normas e instituciones de la Constitución Nacional y la República Argentina. Nuestro objetivo es generar conocimiento y formar profesionales de excelencia a nivel nacional, adaptados a las necesidades específicas de los ciudadanos e instituciones de los Partidos de Tigre, San Fernando y Escobar, para contribuir al logro de sus proyectos de vida. <br /> Por todo esto, desde la Universidad Nacional del Delta ofrecemos una serie de cursos y diplomaturas pensadas en función de las necesidades de nuestra región.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*Organigrama, autoridades y personal*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#organigramaModal">
                          Organigrama, autoridades y personal
                        </button>
                        <div className="modal fade" id="organigramaModal" tabIndex="-1" aria-labelledby="organigramaModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="organigramaModalLabel">Organigrama, autoridades y personal</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body" style={{maxHeight: '70vh', overflowY: 'auto'}}>
                                <p className="mb-4">Aquí podés acceder a la disposición y la relación funcional de las distintas áreas que componen este organismo, así como la normativa de la estructura organizacional de la que emerge. Además, podés conocer el listado de autoridades de cada área junto con las normas que aprueban sus correspondientes designaciones.</p>
                                
                                <h4 className="text-primary border-bottom border-primary pb-2 mb-3">Organigrama y estructura</h4>
                                <div className="text-center mb-3">
                                  <img src={Org1} className="img-fluid" alt="Organigrama Universidad Nacional del Delta" />
                                </div>
                                <p>A continuación se adjunta el Estatuto de la Universidad Nacional del Delta, donde se encuentra estipulada la estructura general de la institución.</p>
                                <div className="mb-2">
                                  <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/390000-394999/394281/res2742me.pdf" target="_blank" className="text-decoration-none">📄 Conoce el Estatuto de la Universidad Nacional del Delta</a>
                                </div>
                                <div className="mb-2">
                                  <a href="https://drive.google.com/file/d/11teCLn7jbFb2S4QnzkpBo2yubD6tycGx/view" target="_blank" className="text-decoration-none">🏛️ Estructura del Consejo Superior</a>
                                </div>
                                <div className="mb-3">
                                  <a href="https://drive.google.com/file/d/1J3CFPAjuBHc4ZadA21-cqbsJVnZl8J6h/view" target="_blank" className="text-decoration-none">🏛️ Estructura del Consejo Directivo</a>
                                </div>
                                <div className="text-center mb-4">
                                  <img src={Org2} className="img-fluid" alt="Estructura del Consejo Directivo" />
                                </div>

                                <h4 className="text-primary border-bottom border-primary pb-2 mb-3">Designaciones</h4>
                                
                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Lic. Farias, Silvia Carolina</div>
                                  <div className="text-muted mb-2">DNI: 23.614.474 | Rectora</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Lic.-Silvia-Carolina-Farias.pdf" target="_blank" className="text-decoration-none">📋 Designación – Lic. Silvia Carolina Farias</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Cdor. Puccio, Mariano</div>
                                  <div className="text-muted mb-2">DNI: 24.595.794 | Secretario General</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Cdor.-Mariano-Javier-Puccio.pdf" target="_blank" className="text-decoration-none">📋 Designación – Cdor. Mariano Javier Puccio</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Lic. Rovira, Sebastián</div>
                                  <div className="text-muted mb-2">DNI: 42.149.689 | Secretario Administrativo, Financiero y Técnico</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Lic.-Sebastian-Rovira.pdf" target="_blank" className="text-decoration-none">📋 Designación – Lic. Sebastian Rovira</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Prof. Castro, Sergio</div>
                                  <div className="text-muted mb-2">DNI: 21.094.957 | Secretario de Extensión Universitaria y Enlace con la Comunidad</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Prof.-Sergio-Gustavo-Castro-.pdf" target="_blank" className="text-decoration-none">📋 Designación – Prof. Sergio Gustavo Castro</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Dr. Quilici, Federico Domingo</div>
                                  <div className="text-muted mb-2">DNI: 18.844.392 | Secretario Académico</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Dr.-Federico-Domingo-Quilici.pdf" target="_blank" className="text-decoration-none">📋 Designación – Dr. Federico Domingo Quilici</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Dra. Del Cogliano, Natalia Cecilia</div>
                                  <div className="text-muted mb-2">DNI: 31.349.099 | Secretaria de Vinculación con el Empleo y la Producción</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Dra.-Natalia-del-Cogliano.pdf" target="_blank" className="text-decoration-none">📋 Designación – Dra. Natalia del Cogliano</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Dr. Davidovich, Pablo</div>
                                  <div className="text-muted mb-2">DNI: 26.200.499 | Director de Asuntos Legales</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Dr.-Pablo-Omar-Davidovich.pdf" target="_blank" className="text-decoration-none">📋 Designación – Dr. Pablo Omar Davidovich</a>
                                </div>

                                <div className="bg-light border-start border-primary border-4 p-3 mb-3">
                                  <div className="fw-bold text-primary mb-1">Mg. Giuliani, Leonardo Andrés</div>
                                  <div className="text-muted mb-2">DNI: 28.632.556 | Director de Instituto de Innovación Educación</div>
                                  <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Designacion-Mg.-Leonardo-Ariel-Giuliani.pdf" target="_blank" className="text-decoration-none">📋 Designación – Mg. Leonardo Ariel Giuliani</a>
                                </div>

                                <h4 className="text-primary border-bottom border-primary pb-2 mb-3">Personal</h4>
                                <p>La dotación óptima del organismo es de 50 agentes. La Universidad Nacional del Delta está desarrollando una página para la divulgación de la plantilla de personal.</p>

                                <h4 className="text-primary border-bottom border-primary pb-2 mb-3">Explicación de forma de gobierno y autonomía</h4>
                                <p>El Estatuto de la Universidad Nacional del Delta tiene estipulado su forma de gobierno y autonomía.</p>
                                <div className="mb-2">
                                  <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/390000-394999/394281/res2742me.pdf" target="_blank" className="text-decoration-none">📄 Conoce el Estatuto de la Universidad Nacional del Delta</a>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Escalas salariales*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#escalasModal">
                          Escalas salariales
                        </button>
                        <div className="modal fade" id="escalasModal" tabIndex="-1" aria-labelledby="escalasModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="escalasModalLabel">Escalas salariales</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <p className="mb-4">La Universidad Nacional del Delta pone a disposición las escalas salariales del personal actualizadas de todos los convenios con los que se rige.</p>
                                
                                <div className="d-grid gap-3">
                                  <div className="card border-primary">
                                    <div className="card-body">
                                      <h5 className="card-title text-primary mb-3">
                                        <i className="bi bi-file-earmark-text me-2"></i>
                                        Personal Docente Universitario
                                      </h5>
                                      <p className="card-text text-muted mb-3">Actualizada: Junio 2024</p>
                                      <a href="http://prueba.local/wp-content/uploads/2024/08/Escala-Salarial-del-Personal-Docente-Universitario-Junio-2024.pdf" target="_blank" className="btn btn-outline-primary">
                                        📄 Ver Escala Salarial
                                      </a>
                                    </div>
                                  </div>
                                  
                                  <div className="card border-success">
                                    <div className="card-body">
                                      <h5 className="card-title text-success mb-3">
                                        <i className="bi bi-file-earmark-text me-2"></i>
                                        Personal Docente Preuniversitario
                                      </h5>
                                      <p className="card-text text-muted mb-3">Actualizada: Junio 2024</p>
                                      <a href="http://prueba.local/wp-content/uploads/2024/08/Escala-Salarial-del-Personal-Docente-Preuniversitario-Junio-2024.pdf" target="_blank" className="btn btn-outline-success">
                                        📄 Ver Escala Salarial
                                      </a>
                                    </div>
                                  </div>
                                  
                                  <div className="card border-info">
                                    <div className="card-body">
                                      <h5 className="card-title text-info mb-3">
                                        <i className="bi bi-file-earmark-text me-2"></i>
                                        Personal No Docente
                                      </h5>
                                      <p className="card-text text-muted mb-3">Actualizada: Junio 2024</p>
                                      <a href="http://prueba.local/wp-content/uploads/2024/08/Escala-Salarial-del-Personal-No-Docente-Junio-2024.pdf" target="_blank" className="btn btn-outline-info">
                                        📄 Ver Escala Salarial
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Transferencias*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#transferenciasModal">
                          Transferencias
                        </button>
                        <div className="modal fade" id="transferenciasModal" tabIndex="-1" aria-labelledby="transferenciasModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="transferenciasModalLabel">Transferencias</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                Las transferencias son prestaciones dinerarias que realiza el sector público tanto a personas jurídicas como a personas humanas en el marco de la implementación de políticas o programas. <br /> Actualmente, esta Universidad no realiza transferencias.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Gestión de la información*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#gestionModal">
                          Gestión de la información
                        </button>
                        <div className="modal fade" id="gestionModal" tabIndex="-1" aria-labelledby="gestionModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="gestionModalLabel">Gestión de la información</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <p className="mb-4">La Universidad Nacional del Delta está comprometida con la transparencia y la accesibilidad de la información pública. Para cumplir con esta responsabilidad, estamos desarrollando el <strong>Sistema Único Documental (SUDOCU)</strong>, una plataforma integral que permitirá la creación, comunicación y archivo eficiente de toda la documentación institucional. Este sistema garantizará que la información esté organizada y sea fácilmente accesible para todos los interesados.</p>
                                
                                <h5 className="text-primary mb-3">Mesa de Entradas</h5>
                                <p>Para más información, podés presentarte en la Mesa de Entradas de nuestra Universidad:</p>
                                
                                <ul>
                                  <li className="mb-2">
                                    <strong>Dirección:</strong> Avenida Avellaneda 2270, Virreyes, San Fernando, provincia de Buenos Aires.
                                  </li>
                                  <li className="mb-2">
                                    <strong>Código Postal:</strong> 1645.
                                  </li>
                                  <li className="mb-2">
                                    <strong>Correo electrónico:</strong> 
                                    <a href="mailto:info@prueba.local" className="text-decoration-none ms-1">info@prueba.local</a>
                                  </li>
                                  <li className="mb-2">
                                    <strong>Horario de atención:</strong> 9:00 a 18:00 hs
                                  </li>
                                  <li className="mb-2">
                                    <strong>Responsable de Acceso a la Información Pública:</strong>
                                  </li>
                                  <li className="mb-2">
                                    Alan Roman German García.
                                  </li>
                                  <li>
                                    <a href="mailto:informacionpublica@prueba.local" className="text-decoration-none">
                                      informacionpublica@prueba.local
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Auditorías y evaluaciones*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#auditoriasModal">
                          Auditorías y evaluaciones
                        </button>
                        <div className="modal fade" id="auditoriasModal" tabIndex="-1" aria-labelledby="auditoriasModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="auditoriasModalLabel">Auditorías y evaluaciones</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                Los organismos públicos están sujetos a distintos tipos de escrutinio sobre sus tareas, desempeños y procesos. En este sentido, la Universidad Nacional del Delta tiene la clara intención de poner a disposición los informes de auditoría elaborados por la Sindicatura General de la Nación (SIGEN), junto al plan anual de auditorías. Sin embargo, dado que aún no hemos cumplido un año desde nuestra creación, no hemos podido realizar auditorías. Estamos trabajando para poder publicar en un corto plazo nuestros primeros informes tanto a la SIGEN como a la Unidad de Auditoría Interna. <br /> Hasta el momento no se han realizado evaluaciones.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Obsequios y viajes*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#obsequiosModal">
                          Obsequios y viajes
                        </button>
                        <div className="modal fade" id="obsequiosModal" tabIndex="-1" aria-labelledby="obsequiosModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="obsequiosModalLabel">Obsequios y viajes</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div className="alert alert-warning mb-4">
                                  <h6 className="alert-heading">
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    Decreto N° 1179/16
                                  </h6>
                                  <p className="mb-0">El decreto N° 1179/16 (reglamentario del Artículo 18 de la Ley de Ética Pública N° 25.188) creó el <strong>Registro de Obsequios a Funcionarios Públicos</strong> y el <strong>Registro de Viajes Financiados por Terceros</strong>. Ambos funcionan desde el 16 de febrero de 2017 en el ámbito de la Oficina Anticorrupción y pueden ser consultados a través de su página web.</p>
                                </div>
                                
                                <p className="mb-4">Todos los funcionarios públicos deben registrar los obsequios o financiamientos de viajes que reciben, cuando las normas permiten su aceptación, con motivo o en ocasión de sus funciones.</p>
                                
                                <div className="d-grid gap-3 mb-4">
                                  <div className="card border-primary">
                                    <div className="card-body text-center">
                                      <i className="bi bi-search fs-2 text-primary mb-3"></i>
                                      <h5 className="card-title">Registro de Obsequios y Viajes</h5>
                                      <p className="card-text text-muted mb-3">Consultá el registro oficial de la Oficina Anticorrupción</p>
                                      <a href="https://www.argentina.gob.ar/anticorrupcion/obsequiosyviajes" target="_blank" className="btn btn-primary">
                                        🔍 Consultá el registro de obsequios y viajes
                                      </a>
                                    </div>
                                  </div>
                                  
                                  <div className="card border-info">
                                    <div className="card-body text-center">
                                      <i className="bi bi-database fs-2 text-info mb-3"></i>
                                      <h5 className="card-title">Portal Datos Abiertos</h5>
                                      <p className="card-text text-muted mb-3">También los podés encontrar en el Portal Datos Abiertos</p>
                                      <a href="https://datos.gob.ar/" target="_blank" className="btn btn-info">
                                        📊 Ingresá al portal de datos
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="card border-secondary">
                                  <div className="card-header bg-light">
                                    <h6 className="card-title mb-0">
                                      <i className="bi bi-question-circle me-2"></i>
                                      Preguntas Frecuentes
                                    </h6>
                                  </div>
                                  <div className="card-body">
                                    <ul className="mb-3">
                                      <li>¿Se puede aceptar cualquier obsequio?</li>
                                      <li>¿Interesa su valor?</li>
                                      <li>¿Qué debo hacer si me ofrecen un viaje u obsequio prohibido?</li>
                                      <li>¿Cómo se registra?</li>
                                    </ul>
                                    <div className="text-center">
                                      <a href="https://www.argentina.gob.ar/anticorrupcion/obsequios-y-viajes-preguntas" target="_blank" className="btn btn-outline-primary">
                                        🔍 Consultá el registro de obsequios y viajes
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Solicitar información*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#solicitarModal">         
                          Solicitar información
                        </button>
                        <div className="modal fade" id="solicitarModal" tabIndex="-1" aria-labelledby="solicitarModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="solicitarModalLabel">Solicitar información</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div className="mb-4">
                                  <i className="bi bi-envelope-paper fs-1 text-primary mb-3"></i>
                                  <p className="mb-4">Aca podés contactarte con nosotros para solicitar información adicional sobre cualquier aspecto de la Universidad Nacional del Delta. Nuestro equipo estará encantado de ayudarte con todas tus consultas.</p>
                                </div>
                                
                                <div className="card border-primary mb-4">
                                  <div className="card-body">
                                    <h5 className="card-title text-primary">
                                      <i className="bi bi-chat-dots me-2"></i>
                                      Página de Contacto
                                    </h5>
                                    <p className="card-text">Contactános y te responderemos a la brevedad.</p>
                                    <a href="/contacto" className="btn btn-primary">
                                      <i className="bi bi-arrow-right-circle me-2"></i>
                                      Ir a la página de contacto
                                    </a>
                                  </div>
                                </div>
                                
                                <div className="row">
                                  <div className="col-md-6 mb-3">
                                    <div className="card h-100 border-info">
                                      <div className="card-body text-center">
                                        <i className="bi bi-envelope-fill text-info fs-4 mb-2"></i>
                                        <h6 className="card-title">Email</h6>
                                        <p className="card-text small">
                                          <a href="mailto:info@prueba.local" className="text-decoration-none">
                                            undelta@undelta.edu.ar
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <div className="card h-100 border-success">
                                      <div className="card-body text-center">
                                        <i className="bi bi-clock-fill text-success fs-4 mb-2"></i>
                                        <h6 className="card-title">Horario</h6>
                                        <p className="card-text small">9:00 a 18:00 hs</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="alert alert-light mt-3">
                                  <small className="text-muted">
                                    <i className="bi bi-info-circle me-1"></i>
                                    También podés acercarte personalmente a: <a className='text-decoration-none' href='https://maps.app.goo.gl/DLBVP7tF72Mwcc8z8' target='_blank'><br />📍 Av. Avellaneda 2270, Virreyes.</a>
                                  </small>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Transparencia Proactiva*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#proactivaModal">
                          Transparencia Proactiva
                        </button>
                        <div className="modal fade" id="proactivaModal" tabIndex="-1" aria-labelledby="proactivaModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="proactivaModalLabel">Transparencia Proactiva</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <p className="mb-4">La transparencia proactiva es toda aquella información que los sujetos obligados divulgan de manera voluntaria, más allá de las obligaciones que estipula la normativa vigente.</p>
                                
                                <div className="accordion" id="transparenciaAccordion">
                                  <div className="accordion-item">
                                    <h2 className="accordion-header">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#informesGestion" aria-expanded="true" aria-controls="informesGestion">
                                        <i className="bi bi-file-earmark-bar-graph me-2 text-primary"></i>
                                        <strong>Informes de Gestión</strong>
                                      </button>
                                    </h2>
                                    <div id="informesGestion" className="accordion-collapse collapse show" data-bs-parent="#transparenciaAccordion">
                                      <div className="accordion-body">
                                        <div className="d-flex align-items-center">
                                          <i className="bi bi-download text-primary me-3 fs-4"></i>
                                          <div>
                                            <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/Informe-de-Gestion-Universidad-Nacional-del-Delta-2024.pdf" target="_blank" className="text-decoration-none fw-bold">
                                              📊 Informe de Gestión Universidad Nacional del Delta 2024
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#estadisticas" aria-expanded="false" aria-controls="estadisticas">
                                        <i className="bi bi-graph-up me-2 text-success"></i>
                                        <strong>Estadísticas</strong>
                                      </button>
                                    </h2>
                                    <div id="estadisticas" className="accordion-collapse collapse" data-bs-parent="#transparenciaAccordion">
                                      <div className="accordion-body">
                                        <div class="alert alert-info">
                                          <i className="bi bi-info-circle me-2"></i>
                                          <strong>En desarrollo</strong>
                                        </div>
                                        <p className="mb-0">La Universidad Nacional del Delta se encuentra realizando el Informe de Gestión 2023, para los cuales se estipulan los indicadores de gestión particulares para el informe estadístico, que serán cargados en diciembre del año corriente.</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#planificacion" aria-expanded="false" aria-controls="planificacion">
                                        <i className="bi bi-bullseye me-2 text-warning"></i>
                                        <strong>Planificación Estratégica</strong>
                                      </button>
                                    </h2>
                                    <div id="planificacion" className="accordion-collapse collapse" data-bs-parent="#transparenciaAccordion">
                                      <div className="accordion-body">
                                        <p className="mb-3">Accedé al Plan Estratégico de la Universidad Nacional del Delta, en el que se establecen las metas a ser cumplidas por la institución en un plazo de seis años.</p>
                                        <div className="text-center">
                                          <a href="https://undelta.edu.ar/wp-content/uploads/2025/02/PLANIFICACION-ESTRATEGICA.pdf" target="_blank" className="btn btn-outline-warning">
                                            🎯 Conocé la planificación estratégica de la Universidad
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#politicas" aria-expanded="false" aria-controls="politicas">
                                        <i className="bi bi-gear me-2 text-info"></i>
                                        <strong>Políticas Estratégicas</strong>
                                      </button>
                                    </h2>
                                    <div id="politicas" className="accordion-collapse collapse" data-bs-parent="#transparenciaAccordion">
                                      <div className="accordion-body">
                                        <p className="mb-3">Accedé a información sobre las principales políticas que lleva adelante la Universidad Nacional del Delta.</p>
                                        <div className="d-flex align-items-center">
                                          <i className="bi bi-file-earmark-text text-info me-3 fs-4"></i>
                                          <div>
                                            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/390000-394999/394281/res2742me.pdf" target="_blank" className="text-decoration-none fw-bold">
                                              📄 Conocé el Estatuto de la Universidad Nacional del Delta
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="accordion-item">
                                    <h2 className="accordion-header">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#integridad" aria-expanded="false" aria-controls="integridad">
                                        <i className="bi bi-shield-check me-2 text-danger"></i>
                                        <strong>Política de integridad</strong>
                                      </button>
                                    </h2>
                                    <div id="integridad" className="accordion-collapse collapse" data-bs-parent="#transparenciaAccordion">
                                      <div className="accordion-body">
                                        <div className="d-flex align-items-center">
                                          <i className="bi bi-file-earmark-text text-danger me-3 fs-4"></i>
                                          <div>
                                            <a href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/390000-394999/394281/res2742me.pdf" target="_blank" className="text-decoration-none fw-bold">
                                              📄 Conocé el Estatuto de la Universidad Nacional del Delta
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Participación ciudadana*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#participacionModal">
                          Participación ciudadana
                        </button>
                        <div className="modal fade" id="participacionModal" tabIndex="-1" aria-labelledby="participacionModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="participacionModalLabel">Participación ciudadana</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <p className="mb-4">Los espacios de participación promueven el involucramiento de la ciudadanía para que, con sus inquietudes, ideas y preferencias, contribuya en la elaboración de políticas públicas y en la toma de decisiones.</p>
                                
                                <div className="card border-primary mb-4">
                                  <div className="card-body text-center">
                                    <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                                    <p className="card-text">Conocé el <strong>Catálogo de espacios de participación ciudadana</strong> disponible en el Portal Nacional de Transparencia.</p>
                                    <a href="https://portal.transparencia.gob.ar/participacion/espaciosDeParticipacion" target="_blank" className="btn btn-primary">
                                      <i className="bi bi-box-arrow-up-right me-2"></i>
                                      Acceder al Portal Nacional de Transparencia
                                    </a>
                                  </div>
                                </div>
                                
                                <div className="alert alert-info text-center">
                                  <i className="bi bi-info-circle fs-4 mb-3"></i>
                                  <h6 className="alert-heading">Estado Actual</h6>
                                  <p className="mb-0">En estos momentos, la Universidad Nacional del Delta no cuenta con espacios de participación ciudadana en curso.</p>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Declaraciones juradas*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#declaracionesModal">
                          Declaraciones juradas
                        </button>
                        <div className="modal fade" id="declaracionesModal" tabIndex="-1" aria-labelledby="declaracionesModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="declaracionesModalLabel">Declaraciones juradas</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <p className="mb-4">Ponemos a disposición el listado de autoridades de la Agencia de Acceso a la Información Pública que deben presentar anualmente ante la Oficina Anticorrupción sus Declaraciones Juradas Patrimoniales Integrales, en cumplimiento del artículo 5° inciso m) de la Ley de Ética Nº 25.188. Quienes accedieron a sus cargos en una fecha posterior a la última presentación aún no cuentan con esta declaración.</p>
                                
                                <div className="alert alert-success text-center mb-4">
                                  <i className="bi bi-check-circle-fill fs-4 me-2"></i>
                                  <strong>El 100% de los funcionarios y funcionarias de la Agencia cumplen con su obligación de presentar sus declaraciones juradas.</strong>
                                </div>
                                
                                <div className="text-center">
                                  <p className="mb-3">Podés consultar las declaraciones juradas en el sitio de la Oficina Anticorrupción completando un formulario en línea.</p>
                                  <a href="https://www.argentina.gob.ar/consultar-declaraciones-juradas-de-funcionarios-publicos" target="_blank" className="btn btn-primary">
                                    🔍 Conocé cómo hacerlo
                                  </a>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Presupuesto*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#presupuestoModal">
                          Presupuesto
                        </button>
                        <div className="modal fade" id="presupuestoModal" tabIndex="-1" aria-labelledby="presupuestoModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="presupuestoModalLabel">Presupuesto</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                La Oficina Nacional de Presupuesto del Ministerio de Economía publica en su sitio, en formatos abiertos, información detallada desde 2002 del presupuesto asignado por ley, la estructura programática y las metas físicas presupuestarias de los organismos y entidades, así como la ejecución.<br />La Universidad Nacional del Delta pone a disposición pública las resoluciones aprobatorias de los presupuestos para cada uno de los períodos de referencia.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Compras y contrataciones*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#comprasModal">
                          Compras y contrataciones
                        </button>
                        <div className="modal fade" id="comprasModal" tabIndex="-1" aria-labelledby="comprasModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="comprasModalLabel">Compras y contrataciones</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body text-center">
                                <i className="bi bi-cart-check fs-1 text-primary mb-4"></i>
                                <p className="mb-4">Las compras y contrataciones de la Universidad Nacional del Delta están publicadas en nuestro portal de compras públicas.</p>
                                
                                <a href="https://undelta.edu.ar/compras-y-contrataciones/#" target="_blank" className="btn btn-primary btn-lg">
                                  <i className="bi bi-box-arrow-up-right me-2"></i>
                                  Acceder al Portal de Compras Públicas
                                </a>
                                
                                <div className="alert alert-info mt-4">
                                  <i className="bi bi-info-circle me-2"></i>
                                  En el portal encontrarás información completa sobre licitaciones, contrataciones directas y procesos de compra.
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Actos administrativos*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#actosModal">                          
                          Actos administrativos
                        </button>
                        <div className="modal fade" id="actosModal" tabIndex="-1" aria-labelledby="actosModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="actosModalLabel">Actos administrativos</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <p className="mb-3">Podés acceder a los actos administrativos de la Universidad Nacional del Delta en nuestra sección de normativa.</p>
                                <p className="mb-4">Si querés conocer los actos de naturaleza pública que realiza el Estado Nacional, podés ingresar al <a href="https://www.boletinoficial.gob.ar/" target="_blank" className="text-decoration-none">Boletín Oficial</a>.</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Permisos y concesiones*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#permisosModal">                          
                          Permisos y concesiones
                        </button>
                        <div className="modal fade" id="permisosModal" tabIndex="-1" aria-labelledby="permisosModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="permisosModalLabel">Permisos y concesiones</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                Los permisos y las concesiones son las maneras que el Estado tiene de ceder el uso de un bien y/o el manejo, la explotación, la operación o la prestación de un servicio público.Actualmente, esta Universidad no otorga ni permisos ni concesiones.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Acordadas y sentencias*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#acordadasModal">                          
                          Acordadas y sentencias
                        </button>
                        <div className="modal fade" id="acordadasModal" tabIndex="-1" aria-labelledby="acordadasModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="acordadasModalLabel">Acordadas y sentencias</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                Conforme con la <a href="http://www.argentina.gob.ar/normativa/nacional/ley-26856-215004/texto" target="_blank" className="text-decoration-none">Ley N° 26.856</a> cada organismo debe publicar integramente todas las acordadas y resoluciones que dicte, el mismo día de su dictado. Mientras que las sentencias deberán ser publicadas una vez notificadas a todas las partes correspondientes. Siempre en formato digital y con acceso gratuito.<br />Actualmente, esta Universidad no publica acordadas ni sentencias.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/*Catálogo de datos abiertos*/}
                      <div className="col-md-4 col-sm-6 mb-4">
                        <button type="button" className="tema-btn" data-bs-toggle="modal" data-bs-target="#datosModal">                          
                          Catálogo de datos abiertos
                        </button>
                        <div className="modal fade" id="datosModal" tabIndex="-1" aria-labelledby="datosModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="datosModalLabel">Catálogo de datos abiertos</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                La Ley de Acceso a la Información Pública y el <a href="https://www.argentina.gob.ar/normativa/nacional/decreto-117-2016-257755" target="_blank" className="text-decoration-none">Decreto Nº117/16</a> prevén la publicación de los datos públicos en formatos electrónicos abiertos con el fin de eliminar toda barrera a su acceso y fomentar su reutilización.<br />En esta sección podés encontrar los conjuntos de datos documentados de acuerdo con el <a href="https://datosgobar.github.io/paquete-apertura-datos/perfil-metadatos/" target="_blank" className="text-decoration-none">Perfil de Aplicación Nacional de Metadatos para Datos Abiertos</a>. Para acceder a los datos te recomendamos visitar el <a href="https://datos.gob.ar/" target="_blank" className="text-decoration-none">Portal Nacional de Datos Públicos</a>.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transparencia;