import styled from "styled-components";

export const ExpertiseStyles = styled.div`
  .expertise {
    height: 68rem;
    background-color: var(--light-gray-color);
    font-size: 2rem;

    &__text {
      color: var(--primary-color);
      font-size: 3rem;
    }

    &__title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 5rem;
      margin: 25px 0 55px 0;
    }

    &__list {
      color: var(--secondary-color);
      font-weight: bold;
      font-size: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;
