import styled from "styled-components";

export const SpecializedStyles = styled.div`
  .specialized {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__item {
      border: 1px solid var(--gray-color);
      width: 25%;
      position: relative;
      padding: 7rem 3.5rem 3rem;
      border-top-right-radius: 75px;
      margin: 5rem 0 8.5rem;
    }

    &__icon {
      width: 8rem;
      height: 8rem;
      border-radius: 10px;
      color: var(--light-color);
      font-size: 5rem;
      background-color: var(--primary-color);
      position: absolute;
      top: 0;
      left: 4rem;
      transform: translateY(-50%);
    }

    &__title {
      margin-bottom: 3rem;
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 2.5rem;
    }

    &__text {
      font-size: 2rem;
      line-height: 1.3;
    }
  }

  .specialized__item:hover {
    background-color: var(--primary-color);
    color: var(--light-color);

    .specialized__icon {
      background-color: var(--light-color);
      color: var(--primary-color);
      box-shadow: 0 0 20px 0;
    }

    .specialized__title {
      color: var(--light-color);
    }
  }
`;
