import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Element } from 'react-scroll'

// Style
import { Section, Title, Description, Body } from './style'

// Components
import { SliderSmartphone } from '../../components'

const SmartphoneScreenshots: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  const widthMobile = isMobile ? 260 : 300
  const heightMobile = isMobile ? 530 : 600

  return (
    <Element name="SmartphoneScreenshots">
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

        <Body
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.3 },
          }}
          viewport={{
            once: false,
          }}
          transition={{ type: 'spring', duration: 5, bounce: 0.6 }}
        >
          <SliderSmartphone width={widthMobile} height={heightMobile} />
        </Body>
      </Section>
    </Element>
  )
}

export default SmartphoneScreenshots
