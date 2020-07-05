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

  .slick-slide {
    .client {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1023px) {
    .testimonial {
      height: 60rem;
    }

    .slick-dots {
      li {
        margin: 0 2px;

        div {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 424px) {
    .testimonial {
      height: 40rem;
    }

    .slick-dots {
      li {
        margin: 0 2px;

        div {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;
