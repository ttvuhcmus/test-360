import styled from "styled-components";

export const CardStyles = styled.li`
  border: 1px solid var(--gray-color);
  width: 95% !important;
  position: relative;
  padding: 7rem 3.5rem 3rem;
  border-top-right-radius: 75px;
  margin: 5rem 0 8.5rem;
  transition: all 0.25s linear;
  outline: none;

  .card {
    &__icon {
      width: 8rem;
      height: 8rem;
      border-radius: 10px;
      color: var(--light-color);
      font-size: 5rem;
      background-color: var(--primary-color);
      position: absolute;
      top: 0;
      left: 4rem;
      transform: translateY(-50%);
      transition: all 0.5s linear;
    }

    &__title {
      margin-bottom: 3rem;
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 2.5rem;
    }

    &__text {
      font-size: 2rem;
      line-height: 1.3;
    }
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--light-color);

    .card__icon {
      background-color: var(--light-color);
      color: var(--primary-color);
      box-shadow: 0 0 20px 0;
    }

    .card__title {
      color: var(--light-color);
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 6rem 2rem 3rem;
    margin: 5rem 0 6rem;

    .card {
      &__icon {
        font-size: 3rem;
        width: 6rem;
        height: 6rem;
      }

      &__title {
        margin-bottom: 2rem;
        font-size: 2rem;
      }

      &__text {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 360px) {
    width: 80% !important;
    margin: 5rem 0 6rem 2.5rem;

    .card {
      &__icon {
        font-size: 3rem;
        width: 5rem;
        height: 5rem;
      }

      &__title {
        font-size: 1.75rem;
      }

      &__text {
        font-size: 1.25rem;
      }
    }
  }
`;
