import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { scroller, Element } from 'react-scroll'

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
import Initial from '../../assets/mobile_screenshots/initial.webp'
import Avatar from '../../assets/mobile_screenshots/avatar.webp'

const Headline: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })

  const scrollTo = (to: string) => {
    scroller.scrollTo(to, {
      duration: 1000,
      smooth: 'easeInOutQuad',
      ignoreCancelEvents: true,
    })
  }

  return (
    <Element name="Headline">
      <Section>
        <Header>
          <Logo />

          <Navbar>
            {!isTablet && (
              <>
                <NavbarLink onClick={() => scrollTo('AvailableProducts')}>
                  Módulos
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo('WhoItIsIndicated')}>
                  Público Alvo
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo('ControlPainel')}>
                  Painel de Controle
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo('SmartphoneScreenshots')}>
                  App. Móvel
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo('FuturePlans')}>
                  Planos
                </NavbarLink>
                <NavbarLink onClick={() => scrollTo('Doubts')}>
                  Quero usar!
                </NavbarLink>
              </>
            )}
            <NavbarDocumentationLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://docsquizutfpr.netlify.app/"
            >
              Documentação
            </NavbarDocumentationLink>
          </Navbar>
        </Header>

        <Body>
          <LeftSide
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
            viewport={{
              once: false,
            }}
          >
            <Smartphone
              image={Initial}
              width={320}
              height={640}
              style={{ zIndex: 2 }}
            />
            <Smartphone
              image={Avatar}
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
          <RightSide
            initial={{ opacity: 0, x: 300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
            viewport={{
              once: false,
            }}
          >
            <WelcomeText>Seja bem-vindo ao projeto do Quiz UTFPR.</WelcomeText>
            <Title>Totalmente gratuito e customizável!</Title>
            <Description>
              O Quiz UTFPR é uma plataforma web e móvel para criação e análise
              de avaliações digitais. A plataforma é composta por um painel de
              controle utilizado para criação de quizzes e acompanhamento da
              evolução dos alunos, bem como um aplicativo móvel gamificado para
              que os alunos possam acessá-los e respondê-los.
            </Description>

            <StyledButton onClick={() => scrollTo('About')}>
              SOBRE NÓS
            </StyledButton>
            <LineEffect />
          </RightSide>
        </Body>
      </Section>
    </Element>
  )
}

export default Headline
