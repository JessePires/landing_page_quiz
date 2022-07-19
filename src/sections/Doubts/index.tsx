import React from 'react'
import { MdEmail } from 'react-icons/md'
import { Element } from 'react-scroll'

import {
  Section,
  Title,
  Description,
  RevertColor,
  StyledButton,
  SubTitle,
  Body,
  Card,
  NormalText,
} from './style'

const Doubts: React.FC = () => {
  const openInNewTab = () => {
    window.open(
      'https://docsquizutfpr.netlify.app/',
      '_blank',
      'noopener,noreferrer'
    )
  }
  return (
    <Element name="Doubts">
      <Section>
        <Title>Dúvidas?</Title>
        <Description>Ficou interessado? Quer mais informaçõe?</Description>
        <Description>Entre em contato conosco...</Description>

        <SubTitle>
          Quer utilizar este sistema em sua escola/universidade?
        </SubTitle>
        <Body>
          <Card
            initial={{ opacity: 0, x: -300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{
              once: false,
            }}
            transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
          >
            <NormalText>
              Caso sua instituição <RevertColor>possua</RevertColor> um técnico
              de informática, informe para o mesmo seguir as instruções clicando
              em:
            </NormalText>

            <StyledButton onClick={openInNewTab}>
              Instruções para a Instalação
            </StyledButton>
          </Card>

          <Card
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
            <NormalText>
              Caso sua instituição <RevertColor>possua</RevertColor> um técnico
              de informática, informe para o mesmo seguir as instruções clicando
              em:
            </NormalText>

            <StyledButton href="mailto:quizutfpr@gmail.com">
              <MdEmail />
              quizutfpr@gmail.com
            </StyledButton>
          </Card>
        </Body>
      </Section>
    </Element>
  )
}

export default Doubts
