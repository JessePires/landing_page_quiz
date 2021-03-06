import styled from 'styled-components'
import { motion } from 'framer-motion'

// Assets
import Background from '../../assets/bg_header.webp'
import LogoImage from '../../assets/logo.webp'
import Arrow from '../../assets/seta_enrolada.svg'
import Line from '../../assets/minhoca.svg'

// Components
import { Button } from '../../components/index'
import { ButtonProps } from '../../components/Button'

interface StyledButtonProps extends ButtonProps {
  onClick?(): void
}

export const Section = styled.section`
  overflow-x: hidden;
  min-height: 839px;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  padding: 10px 100px;

  @media (max-width: 1150px) {
    padding: 10px 30px;
  }
`

export const Header = styled.header`
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export const Logo = styled.img.attrs({
  src: LogoImage.src,
  draggable: false,
})`
  height: 150px;
  width: auto;

  @media (max-width: 480px) {
    height: 100px;
  }

  @media (max-width: 310px) {
    height: 60px;
  }
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavbarLink = styled.a`
  &:not(:last-child) {
    margin-right: 40px;
  }

  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 1rem;
`

export const Body = styled.div`
  margin-top: 40px;
  display: flex;
  height: 100%;
  width: 100%;
`

export const LeftSide = styled(motion.div)`
  width: 50%;
  position: relative;
  height: fit-content;

  @media (max-width: 1150px) {
    display: none;
  }
`

export const RightSide = styled(motion.div)`
  width: 50%;
  position: relative;
  height: fit-content;

  @media (max-width: 1150px) {
    width: 100%;
  }
`

export const WelcomeText = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Title = styled.p`
  color: white;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 10px;

  @media (max-width: 510px) {
    font-size: 2.5rem;
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Description = styled.p`
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const ArrowEffect = styled.img.attrs({
  src: Arrow.src,
  draggable: false,
})`
  height: 50px;
`

export const LineEffect = styled.img.attrs({
  src: Line.src,
  draggable: false,
})`
  position: absolute;

  @media (max-width: 1150px) {
    display: none;
  }
`

export const StyledButton = styled(Button)<StyledButtonProps>`
  @media (max-width: 1150px) {
    width: 100%;
  }
`

export const NavbarDocumentationLink = styled(NavbarLink)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.purple};
  padding: 10px;
  font-weight: 700;
`
