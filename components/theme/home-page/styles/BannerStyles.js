import styled from "styled-components";

export const BannerStyles = styled.div`
  .banner {
    background-color: var(--primary-color);
    color: var(--light-color);
    height: 46rem;
    position: relative;

    &__title {
      font-size: 5rem;
      font-weight: bold;
    }

    &__text {
      width: 90%;
      font-size: 2rem;
      margin: 2.5rem 0;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 1023px) {
    .banner {
      height: 35rem;

      &__title {
        font-size: 4rem;
      }

      &__text {
        font-size: 1.5rem;
        line-height: 1.3;
      }
    }
  }

  @media screen and (max-width: 374px) {
    .banner {
      height: 25rem;

      &__title {
        font-size: 2.5rem;
      }

      &__text {
        margin: 1.5rem 0;
        font-size: 1rem;
        line-height: 1.3;
      }
    }
  }
`;
