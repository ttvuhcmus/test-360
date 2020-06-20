import React from "react";
import { InfoStyles } from "./styles/InfoStyles";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";

const Info = () => {
  return (
    <InfoStyles>
      <div className="info">
        <ul className="list-icon">
          <li className="list-icon__item">
            <a href="" className="list-icon__link">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-icon__item">
            <a href="" className="list-icon__link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-icon__item">
            <a href="" className="list-icon__link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="list-icon__item">
            <a href="" className="list-icon__link">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
        <Container info>
          <h2 className="info__greeting">Hi, I am</h2>
          <h1 className="info__name">Mary Hardy</h1>
          <h2 className="info__job">Digital Marketing Expert</h2>
          <p className="info__intro">
            Shot what able cold new the see hold. Friendly as an betrayed
            formerly <br />
            he. Morning because as to society behaved moments
          </p>
          <div className="info__button">
            <Button primary bigSize>
              Download CV
            </Button>
            <Button white bigSize>
              Contact Me
            </Button>
          </div>
        </Container>
        <ul className="list-experience">
          <li className="list-experience__item center">
            <div className="list-experience__icon center">
              <i className="fas fa-medal"></i>
            </div>
            <div className="list-experience__content">
              <div className="list-experience__title">8 Years Job</div>
              <div className="list-experience__explain">Experience</div>
            </div>
          </li>
          <li className="list-experience__item center">
            <div className="list-experience__icon center">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="list-experience__content">
              <div className="list-experience__title">8 Years Job</div>
              <div className="list-experience__explain">Experience</div>
            </div>
          </li>
          <li className="list-experience__item center">
            <div className="list-experience__icon center">
              <i className="fas fa-headset"></i>
            </div>
            <div className="list-experience__content">
              <div className="list-experience__title">8 Years Job</div>
              <div className="list-experience__explain">Experience</div>
            </div>
          </li>
        </ul>
      </div>
    </InfoStyles>
  );
};

export default Info;
