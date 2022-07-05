import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  width: number
  height: number
}

type SmartphoneProps = {
  width?: number
  height?: number
  style: React.CSSProperties
  image?: string
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: #121212;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #3a4245;
`

export const Screen = styled.img`
  width: 97%;
  height: 98%;
  background: #121515;
  border-radius: 31px;
`

export const Speaker = styled.div`
  position: absolute;
  width: 50px;
  height: 5px;
  top: 1.2em;
  z-index: 3;
  background: #121212;
  border-radius: 5px;
`

export const Power = styled.div`
  width: 3px;
  height: 43px;
  position: absolute;
  right: -5px;
  top: 8em;
  background: #121212;
`

export const Volume = styled.div`
  width: 3px;
  height: 90px;
  position: absolute;
  left: -5px;
  top: 8em;
  background: #121212;
`

const Smartphone: React.FC<SmartphoneProps> = ({
  width,
  height,
  image,
  ...props
}) => (
  <Container width={width} height={height} {...props}>
    <Speaker />
    <Power />
    <Volume />
    <Screen alt="" src={image} />
  </Container>
)

Smartphone.defaultProps = {
  width: 320,
  height: 640,
  image: '',
}

export default Smartphone
