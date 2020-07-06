import styled, { css } from "styled-components";

export const ProgressStyles = styled.li`
  width: 45%;

  .progress {
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

    &:hover {
      .progress__bar {
        &::before {
          animation: leftToRight 1s forwards;
        }
      }
    }

    @keyframes leftToRight {
      0% {
        width: 0%;
      }
      100% {
        width: ${(props) => props.percent}%;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .progress {
      margin-bottom: 30px;

      &__info {
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .progress {
      margin-bottom: 20px;

      &__info {
        margin-bottom: 5px;
      }

      &__bar {
        height: 5px;

        &::before {
          height: 5px;
        }
      }
    }
  }
`;
