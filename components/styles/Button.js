import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 15rem;
  height: 5rem;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: var(--primary-color);
    `};
`;
