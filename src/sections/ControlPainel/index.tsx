import React from 'react'

// Styles
import { Section, Title, Description } from './style'

// Components
import { SliderControlPainel } from '../../components'

const ControlPainel: React.FC = () => (
  <Section>
    <Title>Painel de Controle</Title>
    <Description>
      Aqui estão algumas imagens para você ter uma ideia de como ele está.
    </Description>
    <SliderControlPainel />
  </Section>
)

export default ControlPainel
