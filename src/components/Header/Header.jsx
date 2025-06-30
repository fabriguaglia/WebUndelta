import { useEffect, useState } from "react";
import { Link } from "react-router";
import Logo from "./logoUND.png";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    const offcanvasElement = document.getElementById("offcanvasTop");
    if (offcanvasElement) {
      const offcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasElement);
      if (offcanvas) offcanvas.hide();
    }

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <header
      className={`d-flex justify-content-between align-items-center px-4 py-3 fixed-top w-100 transition`}
      style={{
        backgroundColor: scrolled ? "#003B55" : "transparent",
        transition: "background-color 0.3s ease",
        zIndex: 1000,
      }}
    >
      <a href="/" className="icon ms-1" rel="noreferrer" style={{ marginLeft: "-20px" }}>
        <img className="greensock-icon" src={Logo} width="200" alt="Logo" />
      </a>
      <ul className="d-flex gap-4 list-unstyled mb-0 align-items-center">
        <li className="d-flex align-items-center">
          <Link
            className="text-white text-decoration-none fonttext"
            to="/"
            style={{ lineHeight: 1 }}
          >
            INICIO
          </Link>
        </li>
        <li className="d-flex align-items-center">
          <button
            className="btn text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            ≡
          </button>
          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="container-fluid">
                <div className="row">
                  {/* Columna izquierda */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                      </svg>
                      <Link
                        to="/sobre-nosotros"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        SOBRE NOSOTROS
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-graduation-cap me-3"></i>
                      <Link
                        to="/carreras"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        CARRERAS
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-user me-3"></i>
                      <Link
                        to="/contacto"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        CONTACTO
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-calendar me-3"></i>
                      <Link
                        to="/eventos"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        EVENTOS
                      </Link>
                    </div>
                  </div>
                  
                  {/* Columna derecha */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-laptop me-3"></i>
                      <Link
                        to="/campus-virtual"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        CAMPUS VIRTUAL
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-balance-scale me-3"></i>
                      <Link
                        to="/transparencia"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        TRANSPARENCIA
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-heart me-3"></i>
                      <Link
                        to="/fundacion-undelta"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        FUNDACIÓN UNDELTA
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-puzzle-piece me-3"></i>
                      <Link
                        to="/extension-universitaria"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        EXTENSIÓN UNIVERSITARIA
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}