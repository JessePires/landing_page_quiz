import React from 'react'
import { Element } from 'react-scroll'

// Styles
import { Section, Title, Description } from './style'

// Components
import { SliderControlPainel } from '../../components'

const ControlPainel: React.FC = () => (
  <Element name="ControlPainel">
    <Section>
      <Title>Painel de Controle</Title>
      <Description>
        Aqui estão algumas imagens para você ter uma ideia de como ele está.
      </Description>
      <SliderControlPainel />
    </Section>
  </Element>
)

export default ControlPainel
