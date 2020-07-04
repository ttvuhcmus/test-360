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
  transition: all 0.25s linear;

  :hover {
    transform: rotateX(15deg);
    box-shadow: #bd7c1d 0 4px 0 0;
  }

  :active {
    box-shadow: red 0 0 0 0;
    transform: translateY(4px);
  }

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

  ${(props) =>
    props.whitePrimary &&
    css`
      color: var(--primary-color);
      background-color: var(--light-color);
    `};

  ${(props) =>
    props.maxSize &&
    css`
      width: 22rem;
      height: 6rem;
    `};

  @media screen and (max-width: 1023px) {
    width: 10rem;
    height: 4rem;
    font-size: 1.5rem;

    ${(props) =>
      props.bigSize &&
      css`
        width: 12rem;
      `};
  }

  @media screen and (max-width: 374px) {
    width: 8rem;
    height: 3rem;
    font-size: 1rem;

    ${(props) =>
      props.bigSize &&
      css`
        width: 10rem;
      `};
  }
`;
