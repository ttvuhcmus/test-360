import styled from "styled-components";

export const NavStyles = styled.div`
  .nav {
    height: 15rem;

    &__image {
      width: 90px;
      height: 90px;
      border: 2px solid var(--primary-color);
    }

    &__list {
      display: flex;
      margin-left: auto;
    }

    &__item {
      margin-right: 40px;
    }

    &__link {
      color: var(--secondary-color);
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
    }

    &__item:first-child a {
      color: var(--primary-color);
    }
  }
`;
