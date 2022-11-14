import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div id="top-bar">
      <div className="container clearfix">
        <div className="row justify-content-between">
          <div className="col-12 col-md-auto">
            <ul id="top-social">
              <li>
                <Link to="/" className="si-facebook">
                  <span className="ts-icon">
                    <i className="bi bi-facebook"></i>
                  </span>
                  <span className="ts-text">Facebook</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="si-twitter">
                  <span className="ts-icon">
                    <i className="bi bi-twitter"></i>
                  </span>
                  <span className="ts-text">Twitter</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="si-dribbble">
                  <span className="ts-icon">
                    <i className="bi bi-dribbble"></i>
                  </span>
                  <span className="ts-text">Dribbble</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="si-github">
                  <span className="ts-icon">
                    <i className="bi bi-github"></i>
                  </span>
                  <span className="ts-text">Github</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="si-pinterest">
                  <span className="ts-icon">
                    <i className="bi bi-pinterest"></i>
                  </span>
                  <span className="ts-text">Pinterest</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="si-instagram">
                  <span className="ts-icon">
                    <i className="bi bi-instagram2"></i>
                  </span>
                  <span className="ts-text">Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-auto">
            <div className="top-links">
              <ul className="top-links-container">
                <li className="top-links-item">
                  <Link to="/">Locations</Link>
                  <ul className="top-links-sub-menu">
                    <li className="top-links-item">
                      <Link to="/">San Francisco</Link>
                    </li>
                    <li className="top-links-item">
                      <Link to="/">London</Link>
                    </li>
                    <li className="top-links-item">
                      <Link to="/">Amsterdam</Link>
                    </li>
                  </ul>
                </li>
                <li className="top-links-item">
                  <Link to="faqs.html">FAQs</Link>
                </li>
                <li className="top-links-item">
                  <Link to="contact.html">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
