import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import "normalize.css/normalize.css";

// STYLE
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
