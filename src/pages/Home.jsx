import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faTiktok,

} from "@fortawesome/free-brands-svg-icons";
import ChiemeliePic from "../assets/mypicture.png";
import "./Home.css";
import { faMouse } from "@fortawesome/free-solid-svg-icons";
import Sticker1 from "../assets/6.png"
import Sticker2 from "../assets/1 (1).png"
import Typewriter from 'typewriter-effect';

export default function Home() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <div className="hero_container">
        <div className="container ">
          <div className="row hero_section">
            <div className="col-lg-6 col-md-6 hero_left">
              <div className="hero_left_text">
                <h4>Hello, I'm</h4>

                <h1>Alokwu Chiemelie</h1>

                <div className="text_container">
                  <span>
                    <p>A</p>{" "}
                    <p>
                      <a
                        href="https://en.wikipedia.org/wiki/Programmer"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "teal", textDecoration: "none" }}
                      >


                        Software Developer
                        <span className="sr-only">Software Developer</span>
                      </a>
                    </p>{" "}
                    <p>from</p>{" "}
                    <p style={{ color: "tomato" }}>
                      <a
                        href="https://en.wikipedia.org/wiki/Africa"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "tomato" }}
                      >
                        Africa
                        <span className="sr-only">Link to Africa</span>
                      </a>
                    </p>

                  </span>
                </div>
                <div className="hero_intro">
                  <span>
                    <p>I'm</p>

                    <p style={{ color: "Highlight" }}>
                      <a
                        href="https://www.w3schools.com/whatis/whatis_fullstack.asp"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "Highlight", textDecoration: "none" }}
                      >
                        Software/ Fullstack Web Developer
                        <span className="sr-only">
                          Link to Software/ Fullstack Web Developer
                        </span>
                      </a>
                    </p>


                  </span>

                  <span>
                    <p> based in </p>

                    <p style={{ color: "#00ab55" }}>Nigeria, </p>
                  </span>
                  <span>
                    <p>and I'm very passionate and dedicated to my work. </p>
                  </span>
                </div>

                <div className="about_social_section">
                  <div
                    className="btn btn-lg shadow about_me_button"
                    onClick={(e) => scrollToSection(e, "about")}
                  >
                    About Me
                  </div>
                  <span className="social-icons">
                    <a
                      href="https://www.facebook.com/alokwu.ezekielc"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="social-icon facebook-icon"
                      />
                      <span className="sr-only">Facebook</span>
                    </a>

                    <a
                      href="https://instagram.com/chiemelie101?igshid=ZDc4ODBmNjlmNQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="social-icon instagram-icon"
                      />
                      <span className="sr-only">Instagram</span>
                    </a>

                    <a
                      href="https://twitter.com/AlokwuC?t=CdOwWAYqYB8rqHWizZqYwg&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="social-icon twitter-icon"
                      />
                      <span className="sr-only">Twitter</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/alokwu-chiemelie-4a6523194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="social-icon linkedin-icon"
                      />
                      <span className="sr-only">LinkedIn</span>
                    </a>

                    <a
                      href="https://www.tiktok.com/@code_with_chiemelie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="TikTok"
                    >
                      <FontAwesomeIcon
                        icon={faTiktok}
                        className="social-icon tiktok-icon"
                      />
                      <span className="sr-only">TikTok</span>
                    </a>

                    <a
                      href="https://github.com/mazitek1996"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="social-icon github-icon"
                        aria-label="GitHub"
                      />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </span>
                </div>
                <img src={Sticker2} alt="" className="img-fluid sticker_image2 d-none d-md-block" />

              </div>
            </div>

            <div className="col-lg-6 col-md-6 hero_right">
              <div className="my_pic">
                <img src={ChiemeliePic} alt="Chiemelie" className="img-fluid" />

              </div>
              <img src={Sticker1} alt="" className="img-fluid sticker_image d-none d-md-block" />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
