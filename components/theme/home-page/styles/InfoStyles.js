import styled from "styled-components";

export const InfoStyles = styled.div`
  .info {
    height: 100rem;
    background-image: linear-gradient(to bottom right, #fff, #e5e5e7);
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
    color: var(--secondary-color);

    &__item {
      font-size: 3rem;
      padding: 2rem;
    }
  }

  .list-experience {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 100px;
    width: 111rem;
    height: 20rem;
    box-shadow: -10px -10px 20px 5px #e5e5e7;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__item {
      padding: 20px;
      width: 33.33%;

      &:nth-child(2) {
        border-left: 1px solid;
        border-right: 1px solid;
      }
    }

    &__icon {
      background-color: var(--primary-color);
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      color: white;
      font-size: 4rem;
    }

    &__content {
      padding: 0 1.5rem;
    }

    &__title {
      font-size: 3rem;
      color: var(--secondary-color);
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    &__explain {
      font-size: 2rem;
      color: var(--primary-color);
      font-weight: bold;
    }
  }
`;
