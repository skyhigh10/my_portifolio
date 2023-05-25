import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 footer-left">
            <p className="footer-text">&copy; {new Date().getFullYear()} Alokwu Chiemelie. All rights reserved.</p>
          </div>

          <div className="col-lg-6 col-md-6 footer-right mb-4">
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/alokwu.ezekielc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="footer-social-icon facebook-icon"
                />
              </a>
              <a href="https://instagram.com/chiemelie101?igshid=ZDc4ODBmNjlmNQ==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer-social-icon instagram-icon"
                />
              </a>
              <a href="https://twitter.com/AlokwuC?t=CdOwWAYqYB8rqHWizZqYwg&s=09" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer-social-icon twitter-icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/alokwu-chiemelie-4a6523194" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="footer-social-icon linkedin-icon"
                />
              </a>
              <a href="https://www.tiktok.com/@code_with_chiemelie" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="footer-social-icon tiktok-icon"
                />
              </a>
              <a href="https://github.com/mazitek1996" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="footer-social-icon github-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
