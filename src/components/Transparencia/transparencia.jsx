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
                                Contenido sobre Misión y servicios a la ciudadanía...
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
                              <div className="modal-body">
                                Contenido sobre Organigrama, autoridades y personal...
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
                                Contenido sobre Escalas salariales...
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
                                Contenido sobre Transferencias...
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
                                Contenido sobre Gestión de la información...
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
                                Contenido sobre Auditorías y evaluaciones...
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
                                Contenido sobre Obsequios y viajes...
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
                                Contenido sobre cómo solicitar información...
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
                                Contenido sobre Transparencia Proactiva...
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
                                Contenido sobre Participación ciudadana...
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
                                Contenido sobre Declaraciones juradas...
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
                                Contenido sobre Presupuesto...
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
                              <div className="modal-body">
                                Contenido sobre Compras y contrataciones...
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
                                Contenido sobre Actos administrativos...
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
                                Contenido sobre Permisos y concesiones...
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
                                Contenido sobre Acordadas y sentencias...
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
                                Contenido sobre Catálogo de datos abiertos...
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