import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 111rem;
  margin: 0 auto;
  display: flex;

  ${(props) =>
    props.nav &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.info &&
    css`
      flex-direction: column;
    `}
`;
