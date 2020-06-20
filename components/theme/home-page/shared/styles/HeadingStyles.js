import styled, { css } from "styled-components";

export const HeadingStyles = styled.div`
  .heading {
    &__text {
      color: var(--primary-color);
      font-size: 3rem;
    }

    &__title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 5rem;
      margin: 25px 0 30px 0;
    }

    ${(props) =>
      props.center &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
  }
`;
