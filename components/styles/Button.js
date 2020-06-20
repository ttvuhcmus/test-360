import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 15rem;
  height: 5rem;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 40px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      color: var(--light-color);
      background-color: var(--primary-color);
    `};

  ${(props) =>
    props.bigSize &&
    css`
      width: 18rem;
      height: 6rem;
    `};

  ${(props) =>
    props.white &&
    css`
      color: var(--secondary-color);
      background-color: var(--light-color);
    `};
`;
