import React from 'react'

import { Section, Title, Description, RevertColor } from './style'

// Components
import { Button } from '../../components'

const WhoItIsIndicated: React.FC = () => (
  <Section>
    <Title>Para quem é indicado?</Title>
    <Description>Se interessou pelas nossas ferramentas? </Description>
    <Description>
      Veja se elas são <RevertColor>indicadas para você.</RevertColor>
    </Description>

    <Button>ME INTERESSEI!</Button>
  </Section>
)

export default WhoItIsIndicated
