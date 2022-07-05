import styled from 'styled-components'

// Assets
import Background from '../../assets/bg_header.png'
import LogoImage from '../../assets/logo.png'
import Arrow from '../../assets/seta_enrolada.svg'
import Line from '../../assets/minhoca.svg'

export const Section = styled.section`
  height: 839px;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  padding: 30px 100px;
`

export const Header = styled.header`
  justify-content: space-between;
  display: flex;
`

export const Logo = styled.img.attrs({
  src: LogoImage.src,
  draggable: false,
})`
  height: 150px;
`

export const Navbar = styled.nav``

export const NavbarLink = styled.a`
  &:not(:last-child) {
    margin-right: 40px;
  }

  font-weight: 500;
  color: white;
  text-decoration: none;
`
export const Body = styled.div`
  margin-top: 40px;
  display: flex;
  height: 100%;
  width: 100%;
`

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: fit-content;
`

export const MockupContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
`

export const RightSide = styled.div`
  width: 50%;
  position: relative;
`

export const WelcomeText = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 21px;
  margin-bottom: 15px;
`

export const Title = styled.p`
  color: white;
  line-height: 56px;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 15px;
`

export const Description = styled.p`
  line-height: 30px;
  color: white;
  font-size: 1rem;
  margin-bottom: 15px;
`

export const ArrowEffect = styled.img.attrs({
  src: Arrow.src,
  draggable: false,
})`
  height: 45px;
`

export const LineEffect = styled.img.attrs({
  src: Line.src,
  draggable: false,
})`
  position: absolute;
`
