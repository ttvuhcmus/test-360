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

  ${(props) =>
    props.expertise &&
    css`
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
    
  ${(props) =>
    props.portfolio &&
    css`
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}

  ${(props) =>
    props.banner &&
    css`
      justify-content: center;
      flex-direction: column;
    `}

  ${(props) =>
    props.blog &&
    css`
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}

  ${(props) =>
    props.contact &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.footer &&
    css`
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
`;
