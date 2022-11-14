import React from "react";

// Logo Img
import LogoImg from "../../assets/images/logo.png"

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="container">
        <div className="footer-widgets-wrap">
          <div className="row">
            <div className="col-lg-9">
              <div className="widget clearfix">
                <img
                  src={LogoImg}
                  alt="Foto"
                  className="alignleft"
                  style={{
                    marginTop: "8px",
                    paddingRight: "18px",
                    borderRight: "1px solid /4A4A4A",
                  }}
                />
                <p>
                  We believe in <strong>Simple</strong>,{" "}
                  <strong>Creative</strong> &amp; <strong>Flexible</strong>{" "}
                  Design Standards with a Retina &amp; Responsive Approach.
                  Browse the amazing Features this template offers.
                </p>
                <div className="line" style={{margin: "30px 0"}}></div>
                <div className="row col-mb-30">
                  <div className="col-lg-3 col-6 widget_links">
                    <ul>
                      <li>
                        <a href="/">Inicio</a>
                      </li>
                      <li>
                        <a href="/">Nosotros</a>
                      </li>
                      <li>
                        <a href="/">FAQs</a>
                      </li>
                      <li>
                        <a href="/">Soporte</a>
                      </li>
                      <li>
                        <a href="/">Contacto</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-6 widget_links">
                    <ul>
                      <li>
                        <a href="/">Tienda</a>
                      </li>
                      <li>
                        <a href="/">Portfolio</a>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Eventos</a>
                      </li>
                      <li>
                        <a href="/">Foros</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-6 widget_links">
                    <ul>
                      <li>
                        <a href="/">Corporación</a>
                      </li>
                      <li>
                        <a href="/">Agencia</a>
                      </li>
                      <li>
                        <a href="/">eCommerce</a>
                      </li>
                      <li>
                        <a href="/">Personal</a>
                      </li>
                      <li>
                        <a href="/">Una página</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-6 widget_links">
                    <ul>
                      <li>
                        <a href="/">Restaurante</a>
                      </li>
                      <li>
                        <a href="/">Matrimonio</a>
                      </li>
                      <li>
                        <a href="/">Muestras</a>
                      </li>
                      <li>
                        <a href="/">Revista</a>
                      </li>
                      <li>
                        <a href="/">Lanzamiento</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5 mt-lg-0">
              <div className="widget clearfix">
                <div className="row col-mb-30">
                  <div className="col-12">
                    <div className="footer-big-contacts">
                      <span>Llámanos:</span>
                      (1) 22 55412474
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="footer-big-contacts">
                      <span>Escríbenos:</span>
                      ejemplo@ejemplo.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget subscribe-widget clearfix">
                <div className="row col-mb-30">
                  <div className="col-12 col-sm-6 clearfix">
                    <a
                      href="/"
                      className="social-icon si-dark si-colored si-facebook mb-0"
                      style={{marginRight: "10px"}}
                    >
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="/">
                      <small style={{ display: "block", marginTop: "3px" }}>
                        <strong>Dale like</strong>
                        <br />
                        en Facebook
                      </small>
                    </a>
                  </div>
                  <div className="col-12 col-sm-6 clearfix">
                    <a
                      href="/"
                      className="social-icon si-dark si-colored si-rss mb-0"
                      style={{marginRight: "10px"}}
                    >
                      <i className="bi bi-rss"></i>
                      <i className="bi bi-rss"></i>
                    </a>
                    <a href="/">
                      <small style={{display: "block", marginTop: "3px"}}>
                        <strong>Subscribete</strong>
                        <br />
                        en RSS Feeds
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="copyrights">
        <div className="container">
          <div className="row justify-content-between col-mb-30">
            <div className="col-12 col-md-auto text-center text-md-start">
              Copyrights © 2022 Todos los derechos reservados by Sebastian Silva.
              <br />
              <div className="copyright-links">
                <a href="/">Termininos de uso</a> / <a href="/">Política de Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
