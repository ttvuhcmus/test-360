import React from "react";
import { TestimonialStyles } from "./styles/TestimonialStyles";
import { Container } from "../../styles/Container";
import Heading from "./base/Heading";
import Client from "./base/Client";
import Slider from "react-slick";
import styled from "styled-components";

const CustomDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--gray-color);
`;

const Testimonial = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    customPaging: () => <CustomDot></CustomDot>,

    responsive: [
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <TestimonialStyles>
      <div className="testimonial center">
        <Container column>
          <Heading text="Testimonial" title="My Client Saying" center />
          <ul className="testimonial__list">
            <Slider {...settings}>
              <Client
                src="/img/avatar1.jpg"
                name="Raul K.Smith"
                regency="Client"
                rating="4"
              />
              <Client
                src="/img/avatar2.jpg"
                name="Asib Uz Zaman"
                regency="Client"
                rating="5"
              />
              <Client
                src="/img/avatar3.jpg"
                name="Cristiano Ronaldo"
                regency="Client"
                rating="4"
              />
              <Client
                src="/img/avatar4.jpeg"
                name="Lionel Messi"
                regency="Client"
                rating="3"
              />
              <Client
                src="/img/avatar5.jpg"
                name="Wayne Rooney"
                regency="Client"
                rating="1"
              />
              <Client
                src="/img/avatar6.jpg"
                name="Ricardo Kaka"
                regency="Client"
                rating="0"
              />
            </Slider>
          </ul>
        </Container>
      </div>
    </TestimonialStyles>
  );
};

export default Testimonial;
