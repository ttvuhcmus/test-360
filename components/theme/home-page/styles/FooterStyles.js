import styled from "styled-components";

export const FooterStyles = styled.div`
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42rem;
    background-color: var(--secondary-color);
    color: var(--light-color);
    font-size: 2rem;

    &__image {
      width: 90px;
      height: 90px;
      border: 2px solid var(--primary-color);
    }

    &__list-icon {
      display: flex;
      margin-bottom: 6rem;
    }

    &__text {
      text-align: center;
      margin: 3rem 0;
      padding: 0 20rem;
      line-height: 1.5;
    }

    &__item {
      width: 3rem;
      height: 3rem;
      background-color: var(--primary-color);
      border-radius: 5px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;
