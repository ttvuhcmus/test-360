import styled from "styled-components";

export const BlogStyles = styled.div`
  .blog {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78rem;
    background-color: var(--light-gray-color);

    &__list {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
