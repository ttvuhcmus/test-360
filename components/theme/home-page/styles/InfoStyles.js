import styled from "styled-components";

export const InfoStyles = styled.div`
  .info {
    height: 100rem;
    background-image: linear-gradient(
      to bottom right,
      var(--light-color),
      var(--gray-color)
    );
    position: relative;
    display: flex;
    align-items: center;
    color: var(--secondary-color);

    &__greeting {
      color: var(--primary-color);
      font-size: 4rem;
    }

    &__name {
      font-weight: 900;
      font-size: 10rem;
      margin: 2.5rem 0;
    }

    &__job {
      font-weight: bold;
      font-size: 4rem;
    }

    &__intro {
      font-weight: 300;
      font-size: 2rem;
      margin: 2.5rem 0 3rem 0;
      line-height: 1.5;
    }

    &__button button {
      margin-right: 3rem;
    }
  }

  .list-icon {
    position: absolute;
    top: 50%;
    left: 7rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;

    &__item {
      padding: 2rem;
    }

    &__link {
      color: var(--secondary-color);
      font-size: 3rem;

      i {
        transition: all 0.25s linear;
      }

      &:hover {
        i {
          transform: scale(1.5);
        }
      }
    }
  }

  .list-experience {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 100px;
    max-width: 111rem;
    width: 80%;
    height: 20rem;
    box-shadow: -5px -5px 20px 15px var(--gray-color);
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__item {
      width: 33.33%;

      &:nth-child(2) {
        border-left: 1px solid var(--secondary-color);
        border-right: 1px solid var(--secondary-color);
      }
    }

    &__icon {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      color: var(--light-color);
      font-size: 4rem;

      &:after {
        position: absolute;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        content: "";
        background-color: var(--primary-color);
        transition: all 0.25s linear;
        z-index: -1;
      }

      &:hover {
        color: var(--primary-color);
        box-shadow: var(--primary-color) 0 0 0 4px;
      }

      &:hover::after {
        transform: scale(1.3);
        opacity: 0;
      }
    }

    &__content {
      padding: 0 1.5rem;
    }

    &__title {
      font-size: 2.5rem;
      color: var(-secondary-color);
      font-weight: 800;
      margin-bottom: 0.5rem;
    }

    &__explain {
      font-size: 2rem;
      color: var(--primary-color);
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1439px) {
    .list-icon {
      position: absolute;
      top: 50%;
      left: auto;
      right: 5rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .info {
      height: 80rem;

      &__greeting {
        font-size: 3rem;
      }

      &__name {
        font-size: 8rem;
        margin: 2rem 0;
      }

      &__job {
        font-size: 3rem;
      }

      &__intro {
        font-size: 2rem;
        line-height: 1.3;
      }
    }

    .list-experience {
      height: 15rem;

      &__icon {
        width: 5rem;
        height: 5rem;
        font-size: 3rem;

        &:after {
          width: 5rem;
          height: 5rem;
        }
      }

      &__content {
        padding: 0 1rem;
      }

      &__title {
        font-size: 2rem;
      }

      &__explain {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .list-icon {
      display: none;
    }

    .info {
      height: 60rem;

      &__greeting {
        font-size: 2.5rem;
      }

      &__name {
        font-size: 6rem;
        margin: 1rem 0;
      }

      &__job {
        font-size: 2rem;
      }

      &__intro {
        font-size: 1.5rem;
      }
    }

    .list-experience {
      height: 10rem;

      &__icon {
        width: 4rem;
        height: 4rem;
        font-size: 2rem;

        &:after {
          width: 4rem;
          height: 4rem;
        }
      }

      &__content {
        padding: 0 1rem;
      }

      &__title {
        font-size: 1.5rem;
      }

      &__explain {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .info {
      height: 45rem;

      &__greeting {
        font-size: 2rem;
      }

      &__name {
        font-size: 5rem;
        margin: 1rem 0;
      }

      &__job {
        font-size: 1.5rem;
      }

      &__intro {
        margin: 2rem 0 2.5rem 0;
        font-size: 1rem;
      }

      &__button button {
        margin-right: 2rem;
      }
    }

    .list-experience {
      height: 6rem;

      &__icon {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.5rem;

        &:after {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      &__content {
        padding: 0 0.5rem;
      }

      &__title {
        margin-bottom: 0.25rem;
        font-size: 1rem;
      }

      &__explain {
        font-size: 0.75rem;
      }
    }
  }
`;
