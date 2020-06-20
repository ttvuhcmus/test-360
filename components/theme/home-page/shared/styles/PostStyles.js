import styled from "styled-components";

export const PostStyles = styled.li`
  .post {
    display: flex;
    flex-direction: column;
    height: 40rem;
    width: 35rem;
    font-size: 2.5rem;
    transition: all 0.25s linear;

    &__image {
      width: 35rem;
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
      padding: 0 2rem;
    }
  }

  .post:hover {
    background-color: var(--light-color);
    box-shadow: -5px -5px 20px 0px;
  }
`;
