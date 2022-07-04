import React from "react";
import {AppProps} from '../../node_modules/next/app';
import { ThemeProvider } from "styled-components";
import 'normalize.css/normalize.css';

// STYLE
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp;
