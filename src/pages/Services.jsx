/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Services.css";
import ServicePic from "../assets/illustration_dashboard.png";
import TechService from "../assets/tech3.png"
import TechService1 from "../assets/tech2.png"

export default function Services() {
  return (
    <section id="services">
      <div className="service_container">
        <div className=" container">
          <h2>Services</h2>

          <div className="row">
            <div className="col-lg-6 col-md-6 service_left">
              <h3>Web Development</h3>
              <p>
                I specialize in creating high-quality, user-friendly websites. I
                have experience with a variety of platforms, including
                <div className="service_platform">
                  <p>
                    <a
                      href="https://wordpress.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#32779a", textDecoration: "none" }}
                    >
                      WordPress
                      <span className="sr-only">Link to WordPress</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.drupal.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#24a5da", textDecoration: "none" }}
                    >
                      Drupal
                      <span className="sr-only">Link to Drupal</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.shopify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#96bf48", textDecoration: "none" }}
                    >
                      Shopify
                      <span className="sr-only">Link to Shopify</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.salesforce.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#209bd8", textDecoration: "none" }}
                    >
                      Salesforce
                      <span className="sr-only">Link to Salesforce</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://magento.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#ec6c24", textDecoration: "none" }}
                    >
                      Magento
                      <span className="sr-only">Link to Magento</span>
                    </a>
                  </p>
                  <p style={{ color: "teal" }}>etc.</p>
                </div>

                I am also proficient in a variety of programming languages and
                frameworks, including
                <div className="service_framework">
                  <p>
                    <a
                      href="https://nodejs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#42843c", textDecoration: "none" }}
                    >
                      Node.js
                      <span className="sr-only">Link to Node.js</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#f7d754", textDecoration: "none" }}
                    >
                      Python
                      <span className="sr-only">Link to Python</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#5ed4f3", textDecoration: "none" }}
                    >
                      React.js
                      <span className="sr-only">Link to React.js</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#a3b3ba", textDecoration: "none" }}
                    >
                      Next.js
                      <span className="sr-only">Link to Next.js</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0076c6", textDecoration: "none" }}
                    >
                      TypeScript
                      <span className="sr-only">Link to TypeScript</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://angular.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d6002f", textDecoration: "none" }}
                    >
                      Angular
                      <span className="sr-only">Link to Angular</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.php.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#aaadcf", textDecoration: "none" }}
                    >
                      PHP
                      <span className="sr-only">Link to PHP</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://dart.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007ec2", textDecoration: "none" }}
                    >
                      Dart
                      <span className="sr-only">Link to Dart</span>
                    </a>
                  </p>
                  <p style={{ color: "teal" }}>etc.</p>
                </div>

              </p>
              <p>
                I can help you with everything from design and development to
                SEO and marketing.
              </p>
              <img src={TechService} alt="My Website" className="img-fluid" />
            </div>

            <div className="col-lg-6 col-md-6 service_right">
              <h3>Mobile App Development</h3>
              <p>
                I am a cross-platform mobile app developer, and I can create
                apps for both Android and Apple devices. I use the latest
                technologies and best practices to ensure that your app is
                high-quality and user-friendly.
              </p>

              <div className="col-sm-12 service_right_inner">
                <h3>SEO</h3>
                <p>
                  I can help you improve your website's search engine ranking so
                  that it can be found by more potential customers. I use a
                  variety of techniques, including keyword research, on-page
                  optimization, and off-page optimization.
                </p>
              </div>

              <div className="service_right_image">
                <img src={TechService1} alt="My Website" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
