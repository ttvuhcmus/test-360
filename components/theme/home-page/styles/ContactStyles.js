import styled from "styled-components";

export const ContactStyles = styled.div`
  .contact {
    height: 81.5rem;
    display: flex;
    align-items: center;

    &__heading {
      width: 70%;
    }

    &__body {
      display: flex;
      margin: 3rem 0 4rem;
    }

    &__form {
      width: 70%;
    }

    &__info {
      width: 30%;
      padding-left: 3.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    input,
    textarea {
      padding: 1rem 2rem;
      font-size: 2rem;
      outline: none;
      border: 1px solid var(--gray-color);
    }

    &__row {
      display: flex;
      justify-content: space-between;
    }

    input[name="text"] {
      width: 45%;
    }

    input[name="subject"] {
      width: 100%;
      margin: 2rem 0;
    }
    textarea[name="message"] {
      width: 100%;
    }

    &__address {
      display: flex;
    }

    &__card {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      margin: 0 2.5rem;
    }

    &__topic {
      color: var(--secondary-color);
      font-weight: bold;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    &__icon {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      font-size: 3rem;
      background-color: var(--primary-color);
      color: var(--light-color);
      box-shadow: var(--primary-color) 0 0 0 2px;
      transition: all 0.25s linear;

      &:hover {
        color: var(--primary-color);
        background-color: var(--light-color);
        box-shadow: var(--primary-color) 0 0 0 4px;
      }

      &:hover {
        i {
          animation: toRightFromLeft 0.3s forwards;
        }
      }

      @keyframes toRightFromLeft {
        49% {
          transform: translate(100%);
        }
        50% {
          opacity: 0;
          transform: translate(-100%);
        }
        51% {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 1110px) {
    .contact {
      &__icon {
        width: 5rem;
        height: 5rem;
        font-size: 2rem;
      }

      &__card {
        font-size: 1.5rem;
      }

      &__topic {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .contact {
      height: 70rem;

      input,
      textarea {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        outline: none;
        border: 1px solid var(--gray-color);
      }

      &__icon {
        width: 4rem;
        height: 4rem;
        font-size: 1.5rem;
      }

      &__card {
        font-size: 1rem;
      }

      &__topic {
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 374px) {
    .contact {
      height: 35rem;

      input,
      textarea {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        outline: none;
        border: 1px solid var(--gray-color);
      }

      input[name="subject"] {
        margin: 1rem 0;
      }

      &__heading {
        width: 100%;
      }

      &__body {
        margin: 1rem 0 2rem;
      }

      &__form {
        width: 100%;
      }
      &__info {
        display: none;
      }
    }
  }
`;
