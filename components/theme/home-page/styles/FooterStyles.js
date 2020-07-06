import styled from "styled-components";

export const FooterStyles = styled.div`
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42rem;
    background-color: var(--secondary-color);
    color: var(--light-color);
    font-size: 2rem;

    &__image {
      width: 90px;
      height: 90px;
      border: 2px solid var(--primary-color);
    }

    &__list-icon {
      display: flex;
      margin-bottom: 6rem;
    }

    &__text {
      text-align: center;
      margin: 3rem 0;
      padding: 0 20rem;
      line-height: 1.5;
    }

    &__item {
      width: 3rem;
      height: 3rem;
      background-color: var(--primary-color);
      border-radius: 5px;
      margin: 0 10px;
      cursor: pointer;
    }

    &__link {
      color: var(--light-color);
    }
  }

  @media screen and (max-width: 1023px) {
    .footer {
      height: 35rem;

      &__image {
        width: 80px;
        height: 80px;
      }

      &__list-icon {
        display: flex;
        margin-bottom: 5rem;
      }

      &__item {
        width: 2rem;
        height: 2rem;
        margin: 0 8px;
        font-size: 1.5rem;
      }

      &__text {
        font-size: 1.5rem;
        line-height: 1.3;
      }

      &__note {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer {
      &__image {
        width: 80px;
        height: 80px;
      }

      &__list-icon {
        display: flex;
        margin-bottom: 5rem;
      }

      &__item {
        width: 2rem;
        height: 2rem;
        margin: 0 8px;
        font-size: 1.5rem;
      }

      &__text {
        padding: 0 10rem;
      }

      &__note {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .footer {
      height: 25rem;

      &__image {
        width: 50px;
        height: 50px;
      }

      &__list-icon {
        margin-bottom: 2rem;
      }

      &__item {
        width: 2rem;
        height: 2rem;
        margin: 0 8px;
        font-size: 1.5rem;
      }

      &__text {
        margin: 1.5rem 0;
        padding: 0 0;
        font-size: 1rem;
      }

      &__note {
        font-size: 1rem;
      }
    }
  }
`;
