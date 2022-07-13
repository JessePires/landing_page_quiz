import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font: 400 16px Poppins, sans-serif;
  }

  /* media quieries para responsividade baseada no font-size */
  html {
    @media ( max-width: 1080px) {
        font-size: 93.75%; /* 15px */
    }
    @media ( max-width: 720px) {
        font-size: 87.5%; /* 14px */
    }
    @media ( max-width: 480px) {
        font-size: 81.25%; /* 13px */
    }
    @media ( max-width: 300px) {
        font-size: 62.5%; /* 10px */
    }
  }

  .swiper-3d .swiper-slide-shadow {
    background: transparent;
  }
`
