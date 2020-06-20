import styled from "styled-components";

export const ImageStyles = styled.li`
  position: relative;

  .image {
    width: 35rem;
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
    width: 35rem;
    height: 30rem;
    border-radius: 10px;
    margin-bottom: 30px;
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
      font-size: 3rem;
      padding: 0.5rem;
      border-radius: 5px;
      cursor: pointer;
    }

    &__title {
      font-weight: 800;
      font-size: 3rem;
    }
  }

  .hover:hover {
    opacity: 1;
  }
`;
