import styled, { createGlobalStyle } from 'styled-components';

export const GlobalBodyStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  background-color: #e74c3c;
  width: 100vw;
  height: 100vh;
  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
