import styled from "styled-components";

export const BlogStyles = styled.div`
  .blog {
    height: 78rem;
    background-color: var(--light-gray-color);

    &__list {
      width: 100%;
    }
  }

  @media screen and (max-width: 1023px) {
    .blog {
      height: 70rem;
    }
  }
  @media screen and (max-width: 424px) {
    .blog {
      height: 40rem;

      &__list {
        margin-top: 1rem;
      }
    }
  }
`;
