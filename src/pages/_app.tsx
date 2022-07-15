/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import mailgo, { MailgoConfig } from 'mailgo'
// STYLE
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

const mailgoConfig: MailgoConfig = {
  dark: true,
  showFooter: false,
  lang: 'pt-BR',
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    mailgo(mailgoConfig)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
