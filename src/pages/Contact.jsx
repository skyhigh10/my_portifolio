import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "+2348023058314";
  const emailAddress = "example@example.com";

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`);
  };

  return (
    <section id="contact">
      <div className="contact_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 contact_left">
              <h1 className="display-4">Contact Me</h1>
              <p className="lead contact_lead">I'd love to hear from you!</p>
              <hr className="my-4" />
              <p>
                If you have any questions or inquiries, feel free to reach out
                to me.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 contact_right">
            <a
                className="whatsapp-icon "
                href="https://wa.me/+2348023058314"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <FaWhatsapp  />
                <p>WhatsApp Me</p>
              </a>
              <div className="contact_icons">
                <p onClick={handlePhoneClick}>
                  <FaPhone color="#00ab55" className="phoneIcon" /> Call me
                </p>
                <p onClick={handleEmailClick}>
                  <FaEnvelope color="#e06c49" className="EmailIcon" /> Email me
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
