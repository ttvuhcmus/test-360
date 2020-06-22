import styled from "styled-components";

export const TestimonialStyles = styled.div`
  .testimonial {
    height: 66rem;

    &__list {
      margin-top: 4rem;
    }
  }

  .slick-dots {
    bottom: -60px;

    .slick-active {
      div {
        background-color: var(--primary-color);
      }
    }
  }

  .slick-slide.slick-current + div {
    .client {
      margin-left: auto;
    }
  }
`;
