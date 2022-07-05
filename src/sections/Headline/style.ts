import styled from 'styled-components'

// Assets
import Background from '../../assets/bg_header.png'
import LogoImage from '../../assets/logo.png'

export const Section = styled.section`
  height: 839px;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  padding: 30px;
`

export const Header = styled.header`
  background: red;
`

export const Logo = styled.img.attrs({
  src: LogoImage.src,
})`
  height: 150px;
`
