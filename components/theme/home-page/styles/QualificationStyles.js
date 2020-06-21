import styled from "styled-components";

export const QualificationStyles = styled.div`
  .qualification {
    height: 75rem;

    &__heading {
      color: var(--secondary-color);
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 5.5rem;

      i {
        margin-right: 2rem;
      }
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__list {
      width: 45%;
    }

    &__item {
      border-left: 1px solid var(--primary-color);
      padding-left: 5rem;
      margin-bottom: 4rem;
      margin-left: 1.5rem;
      position: relative;

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--primary-color);
      }

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid var(--primary-color);
      }
    }

    &__job {
      color: var(--secondary-color);
      font-size: 2rem;
      font-weight: 800;
    }

    &__position {
      color: var(--secondary-color);
      font-size: 1.5rem;
      display: inline-block;
      margin: 1rem 0 2rem;
    }

    &__time {
      color: var(--primary-color);
      font-size: 1rem;

      i {
        margin-right: 1rem;
      }
    }
  }
`;
