import styled from "styled-components";

export const PostStyles = styled.li`
  width: 90%;
  margin: 0 auto;

  .post {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size: 2.5rem;
    transition: all 0.25s linear;

    &__image {
      width: 100%;
      height: 25rem;
      object-fit: cover;
    }

    &__date {
      display: inline-block;
      padding: 2rem;
      font-style: italic;
      font-weight: 300;
    }

    &__text {
      font-weight: 800;
      color: var(--secondary-color);
      line-height: 1.5;
      padding: 0 2rem 1.5rem;
    }
  }

  .post:hover {
    background-color: var(--light-color);
    box-shadow: 5px 5px 15px 0px;
    transform: rotateX(15deg);
  }

  @media screen and (max-width: 1023px) {
    .post {
      &__image {
        height: 20rem;
      }

      &__date {
        font-size: 1.5rem;
        padding: 1.5rem;
      }

      &__text {
        font-size: 2rem;
        line-height: 1.3;
        padding: 0 1.5rem 1rem;
      }
    }
  }

  @media screen and (max-width: 360px) {
    width: 70%;

    .post {
      &__image {
        height: 15rem;
      }

      &__date {
        font-size: 1rem;
        padding: 1.5rem;
      }

      &__text {
        font-size: 1.5rem;
        line-height: 1.3;
        padding: 0 1.5rem 1rem;
      }
    }
  }
`;
