import styled, { css } from "styled-components";

export const ProgressStyles = styled.li`
  .progress {
    width: 47.5rem;
    margin-bottom: 35px;

    &__info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    &__bar {
      width: 100%;
      height: 10px;
      background-color: var(--gray-color);
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => props.percent}%;
        height: 10px;
        background-color: var(--primary-color);
      }
    }
  }
`;
