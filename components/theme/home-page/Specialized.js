import React from "react";
import { SpecializedStyles } from "./styles/SpecializedStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";
import Slider from "react-slick";

const Specialized = () => {
  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 374,
        settings: {
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <SpecializedStyles>
      <div className="specialized">
        <Container column>
          <Heading text="Specialized In" title="What I Offer" center />
          <ul className="specialized__list">
            <Slider {...settings}>
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
                  <i className="fas fa-volume-up"></i>
                </div>
                <h6 className="specialized__title">Facebook Marketing</h6>
                <p className="specialized__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus corrupti aut.
                </p>
              </li>
              <li className="specialized__item">
                <div className="specialized__icon center">
                  <i className="fab fa-youtube"></i>
                </div>
                <h6 className="specialized__title">Youtube Marketing</h6>
                <p className="specialized__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus corrupti aut.
                </p>
              </li>
              <li className="specialized__item">
                <div className="specialized__icon center">
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <h6 className="specialized__title">Content Writing</h6>
                <p className="specialized__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus corrupti aut.
                </p>
              </li>
              <li className="specialized__item">
                <div className="specialized__icon center">
                  <i className="fas fa-carrot"></i>
                </div>
                <h6 className="specialized__title">Web Design</h6>
                <p className="specialized__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus corrupti aut.
                </p>
              </li>
              <li className="specialized__item">
                <div className="specialized__icon center">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h6 className="specialized__title">Design Graphic</h6>
                <p className="specialized__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus corrupti aut.
                </p>
              </li>
            </Slider>
          </ul>
        </Container>
      </div>
    </SpecializedStyles>
  );
};

export default Specialized;
