

import React from 'react';
import { Link } from 'react-scroll';
import Scrollspy from 'react-scrollspy';
import './Navbar.css';
import CVFile from '../src/assets/My-Resume.pdf';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">CHIEMELIE</a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Scrollspy
              className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center"
              items={['home', 'about', 'services', 'skills']}
              currentClassName="active"
              offset={-100}
            >
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={500} spy={true} exact="true" activeClass="active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={500} spy={true} exact="true" activeClass="active">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" smooth={true} duration={500} spy={true} exact="true" activeClass="active">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services" smooth={true} duration={500} spy={true} exact="true" activeClass="active">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500} spy={true} exact="true" activeClass="active">
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                  href={CVFile}
                  download="My-Resume.pdf"
                >
                  <button className='btn btn-lg shadow'>Download CV</button>
                </a>
              </li>
            </Scrollspy>
          </div>
        </div>
      </nav>
    </div>

  );
}
