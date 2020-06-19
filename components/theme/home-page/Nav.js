import React from "react";
import { NavStyles } from "./styles/NavStyles";
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container";

const Nav = () => {
  return (
    <NavStyles>
      <div className="nav center">
        <Container nav>
          <a href="#">
            <img src="/logo.png" alt="logo" className="nav__image" />
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                My Intro
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Testimonial
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
          </ul>
          <Button primary>Hire me</Button>
        </Container>
      </div>
    </NavStyles>
  );
};

export default Nav;
