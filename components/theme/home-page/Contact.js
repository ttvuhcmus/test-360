import React from "react";
import { ContactStyles } from "./styles/ContactStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";
import { Button } from "../../styles/Button";

const Contact = () => {
  return (
    <ContactStyles>
      <div className="contact">
        <Container column>
          <div className="contact__heading">
            <Heading text="Contact Me" title="Get in Touch" center />
          </div>
          <div className="contact__body">
            <form className="contact__form">
              <div className="contact__row">
                <input type="text" name="text" placeholder="Name" />
                <input type="email" name="text" placeholder="Email" />
              </div>
              <div className="contact__row">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="contact__row">
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
            <div className="contact__info">
              <div className="contact__address">
                <div className="contact__icon center">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact__card">
                  <span className="contact__topic">Call Me</span>
                  <span>201-354-4443</span>
                  <span>201-354-4443</span>
                </div>
              </div>
              <div className="contact__address">
                <div className="contact__icon center">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact__card">
                  <span className="contact__topic">E-mail</span>
                  <span>contact@hardy.com</span>
                  <span>info@hardy.com</span>
                </div>
              </div>
              <div className="contact__address">
                <div className="contact__icon center">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact__card">
                  <span className="contact__topic">Location</span>
                  <span>474 Central Road</span>
                  <span>New York</span>
                </div>
              </div>
            </div>
          </div>
          <Button maxSize primary>
            Send Message
          </Button>
        </Container>
      </div>
    </ContactStyles>
  );
};

export default Contact;
