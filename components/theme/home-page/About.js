import React from "react";
import { AboutStyles } from "./styles/AboutStyles";
import { Container } from "../../styles/Container";

const About = () => {
  return (
    <AboutStyles>
      <div className="about center">
        <Container>
          <div className="about-image center">
            <img
              src="/about.jpg"
              alt="picture"
              className="about-image__avatar"
            />
          </div>
          <div className="about-content">
            <div className="heading">
              <h3 className="heading__intro">My Intro</h3>
              <h2 className="heading__title">About Me</h2>
              <p className="heading__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                architecto quia maiores sint delectus voluptates molestias
                necessitatibus culpa voluptatibus ipsa commodi consequuntur
                fuga, quam dolor nesciunt consequatur iusto assumenda dolorum!
              </p>
            </div>
            <div className="contact">
              <table className="contact__table">
                <tbody>
                  <tr>
                    <td className="contact__icon">
                      <i className="fas fa-user"></i>
                    </td>
                    <td className="contact__topic">Name</td>
                    <td>:</td>
                    <td className="contact__description">Mary Hardy</td>
                  </tr>
                  <tr>
                    <td className="contact__icon">
                      <i className="fas fa-phone"></i>
                    </td>
                    <td className="contact__topic">Phone</td>
                    <td>:</td>
                    <td className="contact__description">425-869-4369</td>
                  </tr>
                  <tr>
                    <td className="contact__icon">
                      <i className="fas fa-envelope"></i>
                    </td>
                    <td className="contact__topic">Email</td>
                    <td>:</td>
                    <td className="contact__description">
                      maryhardy@hotmail.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="interests">
              <h3 className="interests__title">My Interests</h3>
              <ul className="interests__list">
                <li className="interests__item center">
                  <i className="fas fa-headphones interests__icon"></i>
                  <span className="interests__text">Music</span>
                </li>
                <li className="interests__item center">
                  <i className="fas fa-suitcase-rolling interests__icon"></i>
                  <span className="interests__text">Travel</span>
                </li>
                <li className="interests__item center">
                  <i className="fas fa-film interests__icon"></i>
                  <span className="interests__text">Movie</span>
                </li>
                <li className="interests__item center">
                  <i className="fas fa-camera interests__icon"></i>
                  <span className="interests__text">Photo</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </AboutStyles>
  );
};

export default About;
