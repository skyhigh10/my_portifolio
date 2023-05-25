import React, { useEffect, useRef } from "react";
import "./Skills.css";
import HeroImage from "../assets/earth.png";

import Angular from "../assets/icons/angular.svg";
import AWS from "../assets/icons/amazon.svg";
import HTML from "../assets/icons/html.svg";
import NodeJS from "../assets/icons/nodejs.svg";
import PHP from "../assets/icons/php.svg";
import Python from "../assets/icons/python.svg";
import ReactJS from "../assets/icons/react.svg";
import Ruby from "../assets/icons/ruby.svg";
import { FaCode, FaGlobe, FaMobile, FaNodeJs } from "react-icons/fa";

export default function Skills() {
  const earthRef = useRef(null);
  const orbit1Ref = useRef(null);
  const orbit2Ref = useRef(null);
  const orbit3Ref = useRef(null);
  const orbit4Ref = useRef(null);
  const orbit5Ref = useRef(null);
  const orbit6Ref = useRef(null);
  const orbit7Ref = useRef(null);
  const orbit8Ref = useRef(null);

  useEffect(() => {
    const rotationSpeed1 = 1; // Adjust the rotation speed as needed
    const rotationSpeed2 = 2;
    const rotationSpeed3 = 1.5;
    const rotationSpeed4 = 1.8;
    const rotationSpeed5 = 1.2;
    const rotationSpeed6 = 1.7;
    const rotationSpeed7 = 1.3;
    const rotationSpeed8 = 1.6;

    let rotationAngle1 = 0;
    let rotationAngle2 = 0;
    let rotationAngle3 = 0;
    let rotationAngle4 = 0;
    let rotationAngle5 = 0;
    let rotationAngle6 = 0;
    let rotationAngle7 = 0;
    let rotationAngle8 = 0;

    const animatePlanets = () => {
      rotationAngle1 += rotationSpeed1;
      rotationAngle2 += rotationSpeed2;
      rotationAngle3 += rotationSpeed3;
      rotationAngle4 += rotationSpeed4;
      rotationAngle5 += rotationSpeed5;
      rotationAngle6 += rotationSpeed6;
      rotationAngle7 += rotationSpeed7;
      rotationAngle8 += rotationSpeed8;

      const radius1 = 75; // Radius of orbit1
      const radius2 = 125; // Radius of orbit2
      const radius3 = 150; // Radius of orbit3
      const radius4 = 200; // Radius of orbit4
      const radius5 = 100; // Radius of orbit5
      const radius6 = 180; // Radius of orbit6
      const radius7 = 160; // Radius of orbit7
      const radius8 = 140; // Radius of orbit8

      const x1 = Math.cos((rotationAngle1 * Math.PI) / 180) * radius1;
      const y1 = Math.sin((rotationAngle1 * Math.PI) / 180) * radius1;

      const x2 = Math.cos((rotationAngle2 * Math.PI) / 180) * radius2;
      const y2 = Math.sin((rotationAngle2 * Math.PI) / 180) * radius2;

      const x3 = Math.cos((rotationAngle3 * Math.PI) / 180) * radius3;
      const y3 = Math.sin((rotationAngle3 * Math.PI) / 180) * radius3;

      const x4 = Math.cos((rotationAngle4 * Math.PI) / 180) * radius4;
      const y4 = Math.sin((rotationAngle4 * Math.PI) / 180) * radius4;

      const x5 = Math.cos((rotationAngle5 * Math.PI) / 180) * radius5;
      const y5 = Math.sin((rotationAngle5 * Math.PI) / 180) * radius5;

      const x6 = Math.cos((rotationAngle6 * Math.PI) / 180) * radius6;
      const y6 = Math.sin((rotationAngle6 * Math.PI) / 180) * radius6;

      const x7 = Math.cos((rotationAngle7 * Math.PI) / 180) * radius7;
      const y7 = Math.sin((rotationAngle7 * Math.PI) / 180) * radius7;

      const x8 = Math.cos((rotationAngle8 * Math.PI) / 180) * radius8;
      const y8 = Math.sin((rotationAngle8 * Math.PI) / 180) * radius8;

      earthRef.current.style.transform = `rotate(${rotationAngle1}deg)`;
      orbit1Ref.current.style.transform = `translate(${x1}px, ${y1}px) rotate(${-rotationAngle1}deg)`;
      orbit2Ref.current.style.transform = `translate(${x2}px, ${y2}px) rotate(${-rotationAngle2}deg)`;
      orbit3Ref.current.style.transform = `translate(${x3}px, ${y3}px) rotate(${-rotationAngle3}deg)`;
      orbit4Ref.current.style.transform = `translate(${x4}px, ${y4}px) rotate(${-rotationAngle4}deg)`;
      orbit5Ref.current.style.transform = `translate(${x5}px, ${y5}px) rotate(${-rotationAngle5}deg)`;
      orbit6Ref.current.style.transform = `translate(${x6}px, ${y6}px) rotate(${-rotationAngle6}deg)`;
      orbit7Ref.current.style.transform = `translate(${x7}px, ${y7}px) rotate(${-rotationAngle7}deg)`;
      orbit8Ref.current.style.transform = `translate(${x8}px, ${y8}px) rotate(${-rotationAngle8}deg)`;

      requestAnimationFrame(animatePlanets);
    };

    animatePlanets();
  }, []);

  return (
    <section id="skills">
      <div className="skill_container">
        <div className="skill_container container">
          <div className="row">
            <div className="col-lg-6 col-md-6 skill_left">
              <div className="skill_left_container">
                <div className="skill_title">
                  <h2>My Skills</h2>
                </div>
                <div className=" shadow skill_card">
                  <div className="skill_text_container">
                    <h3>Website /Web App Development</h3>
                    <p>
                      I am a full-stack web developer who can build custom
                      websites with frontend, server-side, and database
                      functionality. I use a variety of technologies and
                      frameworks to create high-quality, user-friendly web
                      applications that meet the needs of my clients.{" "}
                    </p>
                  </div>
                  <FaCode color="teal" />
                </div>

                <div className=" shadow skill_card">
                  <div className="skill_text_container">
                    <h3>Mobile App Development</h3>
                    <p>
                      I am a mobile app developer who can create custom mobile
                      applications for both Android and iOS platforms.
                    </p>
                  </div>
                  <FaMobile color="turquoise" />
                </div>

                <div className=" shadow skill_card">
                  <div className="skill_text_container">
                    <h3>SOftware Development</h3>
                    <p>
                      I am a software developer who specializes in developing
                      and designing custom software for machines and equipment.
                    </p>
                  </div>
                  <FaNodeJs color="#00ab55" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 skill_right">
              <div className="hero_left_image ">
                <div className="earth-container">
                  <img
                    src={HeroImage}
                    alt="Earth"
                    className="earth img-fluid"
                    ref={earthRef}
                    style={{ position: "relative" }}
                  />
                  <img
                    src={Angular}
                    alt="Angular"
                    className="planet orbit1"
                    ref={orbit1Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={AWS}
                    alt="AWS"
                    className="planet orbit2"
                    ref={orbit2Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={HTML}
                    alt="HTML"
                    className="planet orbit3"
                    ref={orbit3Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={NodeJS}
                    alt="NodeJS"
                    className="planet orbit4"
                    ref={orbit4Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={PHP}
                    alt="PHP"
                    className="planet orbit5"
                    ref={orbit5Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={Python}
                    alt="Python"
                    className="planet orbit6"
                    ref={orbit6Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={ReactJS}
                    alt="ReactJS"
                    className="planet orbit7"
                    ref={orbit7Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <img
                    src={Ruby}
                    alt="Ruby"
                    className="planet orbit8"
                    ref={orbit8Ref}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
