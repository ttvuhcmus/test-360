import React from "react";
import { TestimonialStyles } from "./styles/TestimonialStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";
import Client from "./shared/Client";
import Slider from "react-slick";
import styled from "styled-components";

const Testimonial = () => {
  const CustomDot = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: var(--gray-color);
  `;

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    customPaging: () => <CustomDot></CustomDot>,
  };

  return (
    <TestimonialStyles>
      <div className="testimonial center">
        <Container column>
          <Heading text="Testimonial" title="My Client Saying" center />
          <ul className="testimonial__list">
            <Slider {...settings}>
              <Client name="Raul K.Smith" regency="Client" rating="4" />
              <Client name="Asib Uz Zaman" regency="Client" rating="5" />
              <Client name="Cristiano Ronaldo" regency="Client" rating="4" />
              <Client name="Lionel Messi" regency="Client" rating="3" />
              <Client name="Wayne Rooney" regency="Client" rating="1" />
              <Client name="Ricardo Kaka" regency="Client" rating="0" />
            </Slider>
          </ul>
        </Container>
      </div>
    </TestimonialStyles>
  );
};

export default Testimonial;
