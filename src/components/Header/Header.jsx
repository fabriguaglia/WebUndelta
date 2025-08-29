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
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                      </svg>
                      <Link
                        to="/carreras"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        CARRERAS
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                      </svg>
                      <Link
                        to="/contacto"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        CONTACTO
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">    
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                      </svg>
                      <a
                        href="https://undelta.edu.ar/campus/login/index.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none"
                      >
                        CAMPUS VIRTUAL
                      </a>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                      </svg>
                      <Link
                        to="/transparencia"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        TRANSPARENCIA
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank mx-3" viewBox="0 0 16 16">
                        <path d="M5 10v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
                        <path d="M6 2v.341a6 6 0 0 0-1.308.653l-.416-1.247a1 1 0 0 0-1.749-.284l-.77 1.027a1 1 0 0 0-.149.917l.803 2.407A6 6 0 0 0 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8c0-.771-.146-1.509-.41-2.186l.801-2.407a1 1 0 0 0-.148-.917l-.77-1.027a1 1 0 0 0-1.75.284l-.415 1.247A6 6 0 0 0 10 2.34V2a2 2 0 1 0-4 0m1 0a1 1 0 0 1 2 0v.083a6 6 0 0 0-2 0zm5.941 2.595a6 6 0 0 0-.8-.937l.531-1.595.77 1.027zM3.86 3.658a6 6 0 0 0-.8.937L2.557 3.09l.77-1.027zm.18 3.772a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.142 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.142M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                      <Link
                        to="/extension-undelta"
                        onClick={handleLinkClick}
                        className="text-white text-decoration-none"
                      >
                        EXTENSIÓN UNDELTA
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