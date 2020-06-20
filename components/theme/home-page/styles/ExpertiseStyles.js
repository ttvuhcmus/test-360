import styled from "styled-components";

export const ExpertiseStyles = styled.div`
  .expertise {
    height: 68rem;
    background-color: var(--light-gray-color);
    font-size: 2rem;

    &__list {
      margin: 30px 0;
      color: var(--secondary-color);
      font-weight: bold;
      font-size: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;
