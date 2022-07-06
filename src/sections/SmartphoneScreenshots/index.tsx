import React from 'react'
import { useMediaQuery } from 'react-responsive'

// Style
import { Section, Title, Description, Body } from './style'

// Components
import { SliderSmartphone } from '../../components'

const SmartphoneScreenshots: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <Section>
      <Title>Aplicativo de SmartPhone</Title>
      {!isMobile && (
        <>
          <Description>
            Aqui estão algumas imagens para você ter uma ideia
          </Description>
          <Description>de como ele está.</Description>
        </>
      )}

      {isMobile && (
        <Description>
          Aqui estão algumas imagens para você ter uma ideia de como ele está
        </Description>
      )}

      <Body>
        <SliderSmartphone width={310} height={600} />
      </Body>
    </Section>
  )
}

export default SmartphoneScreenshots
