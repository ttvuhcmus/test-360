import React from "react";
import { NavStyles } from "./styles/NavStyles";
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container";

const handleMenu = () => {
  let button = document.querySelector(".nav__button");
  let background = document.querySelector(".nav__background");
  let menu = document.querySelector(".nav__list");

  button.classList.toggle("afterButton");
  background.classList.toggle("afterBackground");
  menu.classList.toggle("afterMenu");

  if (background.classList.contains("afterBackground")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
};

const mouseOver = (event) => {
  const firstLink = document.querySelector(".nav__link");

  if (event.target.innerText !== firstLink.innerText) {
    event.target.style.color = "var(--primary-color)";
    firstLink.style.color = "var(--secondary-color)";
  }
};

const mouseOut = () => {
  const firstLink = document.querySelector(".nav__link");

  if (event.target.innerText !== firstLink.innerText) {
    event.target.style.color = "var(--secondary-color)";
    firstLink.style.color = "var(--primary-color)";
  }
};

const Nav = () => {
  return (
    <NavStyles>
      <div className="nav center">
        <Container center>
          <a href="#" className="nav__home">
            <img src="/img/logo.png" alt="logo" className="nav__image" />
          </a>

          <ul className="nav__list">
            <li
              className="nav__item"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                className="nav__link"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                My Intro
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                className="nav__link"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                className="nav__link"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                className="nav__link"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Testimonial
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                className="nav__link"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Blog
              </a>
            </li>
          </ul>
          <Button primary>Hire me</Button>

          <div className="nav__button-menu">
            <button className="nav__button center" onClick={handleMenu}>
              <span className="nav__icon">&nbsp;</span>
            </button>

            <div className="nav__background">&nbsp;</div>
          </div>
        </Container>
      </div>
    </NavStyles>
  );
};

export default Nav;
