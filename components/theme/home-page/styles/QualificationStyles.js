import styled from "styled-components";

export const QualificationStyles = styled.div`
  .qualification {
    height: 75rem;

    &__heading {
      color: var(--secondary-color);
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 5.5rem;

      i {
        margin-right: 2rem;
      }
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__list {
      width: 45%;
    }

    &__item {
      border-left: 1px solid var(--primary-color);
      padding-left: 5rem;
      margin-bottom: 4rem;
      margin-left: 1.5rem;
      position: relative;
      z-index: 10;

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--primary-color);
      }

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid var(--primary-color);
      }

      &:hover,
      &:hover {
        animation: bottomToTop 1s forwards;
      }

      @keyframes bottomToTop {
        0% {
          opacity: 0;
          transform: translateX(-30px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    &__job {
      color: var(--secondary-color);
      font-size: 2rem;
      font-weight: 800;
    }

    &__position {
      color: var(--secondary-color);
      font-size: 1.5rem;
      display: inline-block;
      margin: 1rem 0 2rem;
    }

    &__time {
      color: var(--primary-color);
      font-size: 1rem;

      i {
        margin-right: 1rem;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .qualification {
      height: 70rem;

      &__heading {
        font-size: 2.5rem;
        margin-bottom: 5rem;

        i {
          margin-right: 1.5rem;
        }
      }

      &__item {
        padding-left: 4rem;
        margin-bottom: 3rem;
      }

      &__job {
        font-size: 1.5rem;
      }

      &__position {
        font-size: 1.25rem;
        margin: 1rem 0 2rem;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .qualification {
      height: 45rem;

      &__heading {
        font-size: 2rem;
        margin-bottom: 3rem;

        i {
          margin-right: 0.5rem;
        }
      }

      &__row {
        margin-top: 1rem;
      }

      &__item {
        padding-left: 2rem;
        margin-bottom: 2rem;
        margin-left: 0;
      }

      &__job {
        font-size: 1rem;
      }

      &__position {
        font-size: 0.75rem;
        margin: 0.5rem 0 1rem;
      }

      &__time {
        font-size: 0.5rem;
      }
    }
  }
`;
