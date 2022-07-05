import React from 'react'
import { IPhone7 } from 'react-device-mockups'

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
  ArrowEffect,
  MockupContainer,
  LineEffect,
} from './style'

// Components
import { Button } from '../../components/index'

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
        <MockupContainer>
          <div style={{ zIndex: 2 }}>
            <IPhone7 width={300} color="black">
              {/* <iframe
              title="showcase"
              src="https://example.com"
              style={{
                width: '100%',
                height: '100%',
                margin: 0,
              }}
            /> */}
            </IPhone7>
          </div>
          <div
            style={{
              position: 'absolute',
              transform: 'translateY(22px) translateX(114px) rotate(19deg);',
              zIndex: 1,
            }}
          >
            <IPhone7 width={280} color="black">
              {/* <iframe
              title="showcase"
              src="https://example.com"
              style={{
                width: '100%',
                height: '100%',
                margin: 0,
              }}
            /> */}
            </IPhone7>
          </div>
        </MockupContainer>

        <ArrowEffect />
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

        <Button>SOBRE NÓS</Button>
        <LineEffect />
      </RightSide>
    </Body>
  </Section>
)

export default Headline
