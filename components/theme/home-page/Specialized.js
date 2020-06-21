import React from "react";
import { SpecializedStyles } from "./styles/SpecializedStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";

const Specialized = () => {
  return (
    <SpecializedStyles>
      <div className="specialized">
        <Container specialized>
          <Heading text="Specialized In" title="What I Offer" center />
          <ul className="specialized__list">
            <li className="specialized__item">
              <div className="specialized__icon center">
                <i className="fas fa-tag n"></i>
              </div>
              <h6 className="specialized__title">SEO</h6>
              <p className="specialized__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus corrupti aut.
              </p>
            </li>
            <li className="specialized__item">
              <div className="specialized__icon center">
                <i className="fas fa-tag n"></i>
              </div>
              <h6 className="specialized__title">Facebook Marketing</h6>
              <p className="specialized__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus corrupti aut.
              </p>
            </li>
            <li className="specialized__item">
              <div className="specialized__icon center">
                <i className="fas fa-tag n"></i>
              </div>
              <h6 className="specialized__title">Youtube Marketing</h6>
              <p className="specialized__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus corrupti aut.
              </p>
            </li>

            <li className="specialized__item">
              <div className="specialized__icon center">
                <i className="fas fa-tag n"></i>
              </div>
              <h6 className="specialized__title">Content Writing</h6>
              <p className="specialized__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus corrupti aut.
              </p>
            </li>
            <li className="specialized__item">
              <div className="specialized__icon center">
                <i className="fas fa-tag n"></i>
              </div>
              <h6 className="specialized__title">Web Design</h6>
              <p className="specialized__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus corrupti aut.
              </p>
            </li>
            <li className="specialized__item">
              <div className="specialized__icon center">
                <i className="fas fa-tag n"></i>
              </div>
              <h6 className="specialized__title">Design Graphic</h6>
              <p className="specialized__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus corrupti aut.
              </p>
            </li>
          </ul>
        </Container>
      </div>
    </SpecializedStyles>
  );
};

export default Specialized;
