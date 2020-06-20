import styled from "styled-components";

export const AboutStyles = styled.div`
  .about {
    height: 90rem;
  }

  .about-image {
    width: 40%;
    height: 58rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10rem;
      height: 10rem;
      border-top: 3px solid var(--primary-color);
      border-left: 3px solid var(--primary-color);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10rem;
      height: 10rem;
      border-bottom: 3px solid var(--primary-color);
      border-right: 3px solid var(--primary-color);
    }

    &__avatar {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      object-fit: cover;
    }
  }

  .about-content {
    width: 60%;
    padding-left: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .heading {
      &__description {
        font-size: 2rem;
        font-weight: 300;
      }
    }

    .contact {
      font-size: 2rem;
      margin: 4rem 0;

      &__table {
        width: 100%;
      }

      &__icon {
        font-size: 2.5rem;
        color: var(--primary-color);
      }

      &__topic {
        width: 6rem;
        font-weight: bold;
        padding: 1rem 9rem 1rem 0;
      }

      &__description {
        padding-left: 4.5rem;
      }
    }

    .interests {
      color: var(--secondary-color);

      &__title {
        font-size: 3rem;
        margin-bottom: 2rem;
        font-weight: 800;
      }

      &__list {
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
      }

      &__item {
        margin-right: 4rem;
      }

      &__icon {
        font-size: 4rem;
        color: var(--primary-color);
        margin-right: 1.5rem;
      }
      &__text {
        font-weight: bold;
      }
    }
  }
`;
