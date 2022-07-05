import React from 'react'

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
} from './style'

import { Smartphone } from '../../components'

const Headline: React.FC = () => (
  <Section>
    <Header>
      <Logo />

      <Navbar>
        <NavbarLink href="#">About</NavbarLink>

        <NavbarLink href="#">Contact</NavbarLink>

        <NavbarLink href="#">Press</NavbarLink>
      </Navbar>
    </Header>

    <Body>
      <LeftSide>
        <Smartphone width={320} height={640} style={{ zIndex: 2 }} />
        <Smartphone
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
        <WelcomeText>Seja bem-vindo ao projeto do Quiz Gamificado.</WelcomeText>
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

export default Headline
