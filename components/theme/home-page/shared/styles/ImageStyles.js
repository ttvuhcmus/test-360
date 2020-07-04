import styled from "styled-components";

export const ImageStyles = styled.li`
  position: relative;
  width: 32%;

  .image {
    height: 30rem;
    margin-bottom: 30px;

    &__item {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .hover {
    width: 100%;
    height: 30rem;
    border-radius: 10px;
    background-color: var(--opacity-primary-color);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--light-color);
    opacity: 0;
    transition: all 0.25s linear;

    &__list-icon {
      width: 9.5rem;
      display: flex;
      justify-content: space-around;
      margin-bottom: 1.5rem;
    }

    &__icon {
      background-color: var(--light-color);
      color: var(--secondary-color);
      padding: 0.5rem;
      font-size: 3rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.25 s linear;
      position: relative;

      &:first-child:hover {
        color: #17aa56;
        animation: pulse 1s ease infinite;
      }

      &:last-child:hover {
        color: #ea515e;
        animation: pulse 1s ease infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
        100% {
          transform: scale(1);
        }
      }
    }

    &__title {
      font-weight: 800;
      font-size: 3rem;
    }
  }

  .hover:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1023px) {
    .image {
      height: 22rem;
      margin-bottom: 25px;
    }

    .hover {
      height: 22rem;

      &__list-icon {
        width: 9rem;
        margin-bottom: 1rem;
      }

      &__icon {
        font-size: 2.5rem;
      }

      &__title {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 374px) {
    width: 45%;

    .image {
      height: 12rem;
      margin-bottom: 15px;
    }

    .hover {
      height: 12rem;

      &__list-icon {
        width: 6rem;
        margin-bottom: 1rem;
      }

      &__icon {
        font-size: 1.5rem;
      }

      &__title {
        font-size: 1.5rem;
      }
    }
  }
`;
