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
      width: 42%;
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
      background-color: var(--primary-color);
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      color: var(--light-color);
      font-size: 3rem;
    }
  }
`;
