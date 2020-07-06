import styled from "styled-components";

export const NavStyles = styled.div`
  .nav {
    height: 15rem;
    position: relative;

    &__image {
      width: 90px;
      height: 90px;
      border: 2px solid var(--primary-color);
    }

    &__list {
      display: flex;
      margin-left: auto;
    }

    &__item {
      margin-right: 40px;
    }

    &__link {
      color: var(--secondary-color);
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.25s linear;
    }

    &__item:first-child a {
      color: var(--primary-color);
    }

    &__button-menu {
      display: none;
      position: relative;
      margin-left: 2rem;
    }

    &__button {
      position: relative;
      border: none;
      outline: none;
      background-color: var(--primary-color);
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
      z-index: 200;
    }

    &__background {
      position: absolute;
      top: 0;
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      background-image: radial-gradient(
        var(--primary-color),
        var(--secondary-color)
      );
      z-index: 100;
      transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &__icon {
      position: relative;

      &,
      &::before,
      &::after {
        width: 2rem;
        height: 2px;
        background-color: var(--light-color);
        display: inline-block;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.25s linear;
      }

      &::before {
        top: -0.6rem;
      }
      &::after {
        top: 0.6rem;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .nav {
      height: 12.5rem;

      &__image {
        width: 80px;
        height: 80px;
      }

      &__item {
        margin-right: 17.5px;
      }

      &__link {
        font-size: 1.75rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .nav {
      height: 10rem;

      &__home {
        margin-right: auto;
      }

      &__image {
        width: 60px;
        height: 60px;
      }

      &__button-menu {
        display: block;
      }

      &__list {
        display: none;
      }
    }
  }

  .afterBackground {
    transform: scale(100);
  }

  .afterButton {
    background-color: var(--secondary-color);

    .nav__icon {
      & {
        background-color: transparent;
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }
    }
  }

  .afterMenu {
    display: auto;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 150;
    animation: moveLeft 1s linear;

    .nav__item {
      margin-bottom: 2rem;
    }

    .nav__link {
      text-transform: uppercase;
    }
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(-100rem);
    }
    80% {
      transform: translateX(10rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes moveRight {
    0% {
      transform: translateX(10rem);
    }
    20% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100rem);
    }
  }

  @media screen and (max-width: 360px) {
    .nav {
      height: 8rem;

      &__image {
        width: 50px;
        height: 50px;
      }

      &__button-menu {
        display: block;
      }

      &__button {
        height: 3rem;
        width: 3rem;
      }

      &__background {
        height: 3rem;
        width: 3rem;
      }

      &__icon {
        width: 1.5rem;

        &::after {
          width: 1.5rem;
          top: 0.4rem;
        }
        &::before {
          width: 1.5rem;
          top: -0.4rem;
        }
      }

      &__link {
        font-size: 1.5rem;
      }
    }
  }
`;
