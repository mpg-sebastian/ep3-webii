import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/images/logo.png";
import Logo2 from "../../assets/images/logo@2x.png";

function Header() {
  return (
    <header id="header" className="header-size-sm" data-sticky-shrink="false">
      <div className="container">
        <div className="header-row">
          <div id="logo" className="ms-auto ms-lg-0 me-lg-auto">
            <Link to="/" className="standard-logo">
              <img src={Logo1} alt="Canvas Logo" />
            </Link>
            <Link to="/" className="retina-logo">
              <img
                src={Logo2}
                alt="Canvas Logo"
              />
            </Link>
          </div>
          <div className="header-misc d-none d-lg-flex">
            <ul className="header-extras">
              <li>
                <i className="i-plain icon-call m-0"></i>
                <div className="he-text">
                  Llámanos
                  <span>(1) 22 54215821</span>
                </div>
              </li>
              <li>
                <i className="i-plain icon-line2-envelope m-0"></i>
                <div className="he-text">
                  Escríbenos
                  <span>
                    <Link
                      to="/"
                      className="__cf_email__"
                    >
                      ejemplo@ejemplo.com
                    </Link>
                  </span>
                </div>
              </li>
              <li>
                <i className="i-plain icon-line-clock m-0"></i>
                <div className="he-text">
                  Horario
                  <span>Mon - Sat, 10AM to 6PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="header-wrap">
        <div className="container">
          <div className="header-row justify-content-between flex-row-reverse flex-lg-row justify-content-lg-center">
            <div className="header-misc">
              <div id="top-search" className="header-misc-icon">
                <Link to="/" id="top-search-trigger">
                  <i className="icon-line-search"></i>
                  <i className="icon-line-cross"></i>
                </Link>
              </div>
            </div>
            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100">
                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                <path d="m 30,50 h 40"></path>
                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
              </svg>
            </div>

            <nav className="primary-menu with-arrows">
              <ul className="menu-container">
                <li className="menu-item current">
                  <Link className="menu-link" to="/">
                    <div>Inicio</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="menu-link"
                    to="/about"
                  >
                    <div>Nosotros</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone"></div>
    </header>
  );
}

export default Header;
