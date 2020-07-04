import styled, { css } from "styled-components";

export const ClientStyles = styled.li`
  .client {
    width: 80%;
    display: flex;
    flex-direction: column;

    &__user {
      display: flex;
      align-items: center;
    }

    &__avatar {
      width: 11rem;
      height: 11rem;
      object-fit: cover;
      border: 2px solid var(--primary-color);
      border-radius: 50%;
    }

    &__card {
      display: flex;
      justify-content: space-between;
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
      font-size: 2rem;
      color: var(--primary-color);
    }

    &__content {
      margin-top: 3rem;
      font-size: 2rem;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 1023px) {
    .client {
      &__avatar {
        width: 8rem;
        height: 8rem;
      }

      &__name {
        font-size: 1.5rem;
      }

      &__card {
        width: calc(100% - 8rem);
        padding-left: 2rem;
      }

      &__regency {
        margin-top: 1rem;
      }

      &__rating {
        font-size: 1rem;
      }

      &__content {
        margin-top: 2rem;
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }
  }

  @media screen and (max-width: 374px) {
    .client {
      width: 90%;

      &__avatar {
        width: 7rem;
        height: 7rem;
      }

      &__name {
        font-size: 1.5rem;
      }

      &__card {
        width: calc(100% - 7rem);
        padding-left: 1rem;
      }

      &__regency {
        margin-top: 1rem;
      }

      &__rating {
        font-size: 1rem;
      }

      &__content {
        margin-top: 1.5rem;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    }
  }
`;
