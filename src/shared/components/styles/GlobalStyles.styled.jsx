import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  color: black;
  font-family: 'Poppins', -apple-system, sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 100vw;
  min-height: 100vh;
  background:linear-gradient(180deg, rgba(196, 196, 196, 0.00) 25%, #BEDBB0 92.19%);

  }`;

export const GlobalStylesHome = createGlobalStyle`
body {
  padding: 0;
  color: black;
  font-family: 'Poppins', -apple-system, sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 100vw;
  min-height: 100vh;
  background:${({ theme }) => theme.colors.backgroundMain};
  }`;
