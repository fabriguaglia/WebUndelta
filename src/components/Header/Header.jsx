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
            to="/donar"
            style={{ lineHeight: 1 }}
          >
            Donar
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
              <h5 className="offcanvas-title" id="offcanvasTopLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Link
                to="/inicio"
                onClick={handleLinkClick}
                className="text-white text-decoration-none d-block mb-2"
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                onClick={handleLinkClick}
                className="text-white text-decoration-none d-block mb-2"
              >
                Nosotros
              </Link>
              <Link
                to="/donar"
                onClick={handleLinkClick}
                className="text-white text-decoration-none d-block mb-2"
              >
                Donar
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}
