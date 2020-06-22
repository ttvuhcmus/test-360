import React from "react";
import { FooterStyles } from "./styles/FooterStyles";
import { Container } from "../../styles/Container";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <Container center column>
          <img src="/logo.png" alt="logo" className="footer__image" />
          <p className="footer__text">
            Extremely we promotion remainder eagerness enjoyment an. Ham her
            demands removal bought minuter raising invited gay.
          </p>
          <ul className="footer__list-icon">
            <li className="footer__item center">
              <i className="fab fa-facebook-f footer__icon"></i>
            </li>
            <li className="footer__item center">
              <i className="fab fa-twitter footer__icon"></i>
            </li>
            <li className="footer__item center">
              <i className="fab fa-linkedin-in footer__icon"></i>
            </li>
            <li className="footer__item center">
              <i className="fab fa-pinterest-p footer__icon"></i>
            </li>
          </ul>
          <span>All Right Reserved by PixelsUi</span>
        </Container>
      </div>
    </FooterStyles>
  );
};

export default Footer;
