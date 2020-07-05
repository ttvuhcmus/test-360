import styled from "styled-components";

export const PortfolioStyles = styled.div`
  .portfolio {
    height: 116rem;
    background-color: var(--light-gray-color);

    .list-menu {
      display: flex;
      margin: 3rem 0 3.5rem 0;

      &__item {
        margin: 0 2rem;
      }

      &__link {
        font-size: 2rem;
        color: var(--secondary-color);
        font-weight: bold;
        text-decoration: none;
      }
    }

    .list-image {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .portfolio {
      height: 90rem;

      .list-menu {
        display: flex;
        margin: 3rem 0 3.5rem 0;

        &__item {
          margin: 0 2rem;
        }

        &__link {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 424px) {
    .portfolio {
      height: 65rem;

      .list-menu {
        margin: 2rem 0 2.5rem 0;

        &__item {
          margin: 0 0.5rem;
        }

        &__link {
          font-size: 1rem;
        }
      }

      .list-image {
        justify-content: space-around;
      }
    }
  }
`;
