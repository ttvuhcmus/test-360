import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 111rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  /* border: 1px solid; */

  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}


    @media screen and (max-width: 1439px) {
    padding: 2rem;
  }
`;
