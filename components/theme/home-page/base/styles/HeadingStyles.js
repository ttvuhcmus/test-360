import styled, { css } from "styled-components";

export const HeadingStyles = styled.div`
  .heading {
    &__text {
      color: var(--primary-color);
      font-size: 3rem;
    }

    &__title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 5rem;
      margin: 25px 0 30px 0;
    }

    ${(props) =>
      props.center &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
  }

  @media screen and (max-width: 1023px) {
    .heading {
      &__text {
        font-size: 2.5rem;
      }

      &__title {
        font-size: 4rem;
        margin: 15px 0 20px 0;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .heading {
      &__text {
        font-size: 2rem;
      }

      &__title {
        font-size: 3rem;
        margin: 10px 0 15px 0;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .heading {
      &__text {
        font-size: 1.5rem;
      }

      &__title {
        font-size: 2.5rem;
        margin: 5px 0 10px 0;
      }
    }
  }
`;
