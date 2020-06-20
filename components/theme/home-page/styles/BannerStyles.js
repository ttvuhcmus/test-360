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
      width: 76rem;
      font-size: 2rem;
      margin: 2.5rem 0;
      line-height: 1.5;
    }
  }
`;
