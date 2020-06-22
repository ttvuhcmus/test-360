import styled, { css } from "styled-components";

export const ClientStyles = styled.li`
  .client {
    width: 80%;
    display: flex;
    flex-direction: column;

    &__avatar {
      width: 11rem;
      height: 11rem;
      object-fit: cover;
      border: 2px solid var(--primary-color);
      border-radius: 50%;
    }

    &__card {
      display: flex;
      width: calc(100% - 11rem);
      padding-left: 3rem;
    }

    &__info {
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-size: 2rem;
      font-weight: bold;
      color: var(--secondary-color);
    }

    &__regency {
      font-size: 1.5rem;
      font-style: italic;
      margin-top: 1.5rem;
    }

    &__rating {
      font-size: 2.5rem;
      margin-left: auto;
      color: var(--primary-color);
    }

    &__content {
      margin-top: 3rem;
      font-size: 2rem;
      line-height: 1.3;
    }
  }
`;
