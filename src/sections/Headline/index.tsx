import React from 'react'
import { useMediaQuery } from 'react-responsive'

import {
  Section,
  Header,
  Logo,
  Navbar,
  NavbarLink,
  Body,
  LeftSide,
  RightSide,
  WelcomeText,
  Title,
  Description,
  LineEffect,
  StyledButton,
  NavbarDocumentationLink,
} from './style'

import { Smartphone } from '../../components'

// Assets
import Example1 from '../../assets/mobile_screenshots/example.png'
import Example2 from '../../assets/mobile_screenshots/example2.png'

const Headline: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 700px)' })

  return (
    <Section>
      <Header>
        <Logo />

        <Navbar>
          {!isTablet && (
            <>
              <NavbarLink href="#">Início</NavbarLink>
              <NavbarLink href="#">Início</NavbarLink>
              <NavbarLink href="#">Início</NavbarLink>
              <NavbarLink href="#">Início</NavbarLink>
            </>
          )}
          <NavbarDocumentationLink href="#">Técnico</NavbarDocumentationLink>
        </Navbar>
      </Header>

      <Body>
        <LeftSide>
          <Smartphone
            image={Example2.src}
            width={320}
            height={640}
            style={{ zIndex: 2 }}
          />
          <Smartphone
            image={Example1.src}
            width={300}
            height={600}
            style={{
              transform: 'rotateZ(19deg)',
              position: 'absolute',
              top: '16px',
              left: '115px',
            }}
          />
          {/* <ArrowEffect /> */}
        </LeftSide>
        <RightSide>
          <WelcomeText>
            Seja bem-vindo ao projeto do Quiz Gamificado.
          </WelcomeText>
          <Title>Totalmente gratuito e customizável!</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            egestas odio sapien dis massa massa massa. Accumsan, cras tristique
            adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque
            sed rutrum donec.
          </Description>

          <StyledButton>SOBRE NÓS</StyledButton>
          <LineEffect />
        </RightSide>
      </Body>
    </Section>
  )
}

export default Headline
