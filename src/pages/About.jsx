import React from "react";
import "./About.css";
import Illust from "../assets/illustration_dashboard.png";
export default function About() {
  return (
    <section id="about">
      <div className="about_root">
        <div className="about_container container">
          <div className="row">
            <div className="col-ld-6 col-md-6 about_left">
              <div className="about_left_container">
                <img src={Illust} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="col-ld-6 col-md-6 about_right">
              <div className="about_left_text_container">
                <div className="about_intro">
                  <h4>I'm a Software Developer</h4>
                  <h1>
                    I can build & develope any type of app or website you want
                  </h1>
                </div>

                <div className="about_intro_text">
                  <p>
                    Hi, I'm Alokwu Chiemelie Ezekiel, a software developer and
                    entrepreneur. I'm passionate about technology and love the
                    challenge of solving problems and creating new things. I'm
                    always looking for ways to use my skills to make a positive
                    impact on the world.
                  </p>
                  <p>
                    I've been working as a software developer for over 5 years
                    and have a strong understanding of software development
                    principles and practices. I'm proficient in a variety of
                    programming languages, including JavaScript,TypeScript,
                    Python, and C++. I'm also experienced in a variety of
                    software development tools and technologies.
                  </p>

                  <p>
                    I'm also an entrepreneur and have co-founded a software
                    development company that specializes in creating custom
                    software solutions for businesses. I'm passionate about
                    using my skills to help businesses grow and succeed.
                  </p>

                  <p>
                    I'm always looking for new challenges and opportunities to
                    learn and grow. I'm excited to see what the future holds and
                    am confident that I can use my skills and passion to make a
                    positive impact on the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
