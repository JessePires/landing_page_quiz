import React from 'react'

// Styles
import { Container, Screen, Speaker, Power, Volume } from './style'

type SmartphoneProps = {
  width?: number
  height?: number
  style?: React.CSSProperties
  image?: string
}

const Smartphone: React.FC<SmartphoneProps> = ({
  width,
  height,
  image,
  ...props
}) => (
  <Container width={width} height={height} {...props}>
    <Speaker />
    <Volume />
    <Screen alt="" src={image} />
    {/* <Power /> */}
  </Container>
)

Smartphone.defaultProps = {
  width: 320,
  height: 640,
  image: '',
  style: {},
}

export default Smartphone
