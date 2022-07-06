import React from 'react'

// Style
import { Section, Title, Description, Body } from './style'

// Components
import { SliderSmartphone } from '../../components'

const SmartphoneScreenshots: React.FC = () => (
  <Section>
    <Title>Aplicativo de SmartPhone</Title>
    <Description>
      Aqui estão algumas imagens para você ter uma ideia
    </Description>
    <Description>de como ele está.</Description>

    <Body>
      <SliderSmartphone width={310} height={600} />
    </Body>
  </Section>
)

export default SmartphoneScreenshots
