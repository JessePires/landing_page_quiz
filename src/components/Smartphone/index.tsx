import { StaticImageData } from 'next/image'
import React from 'react'

// Styles
import { Container, Screen, Speaker, Power, Volume } from './style'

type SmartphoneProps = {
  width?: number
  height?: number
  style?: React.CSSProperties
  image?: StaticImageData
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
    <Screen
      priority
      placeholder="blur"
      width={width - 15}
      height={height - 15}
      alt=""
      src={image}
    />
    <Power />
  </Container>
)

Smartphone.defaultProps = {
  width: 320,
  height: 640,
  image: {
    src: '',
    height: 0,
    width: 0,
    blurDataURL: '',
  },
  style: {},
}

export default Smartphone
