import React from 'react'
import styled from 'styled-components'

type SmartphoneProps = {
  width: number
  height: number
  style: React.CSSProperties
}

export const Container = styled.div`
  position: relative;
  background: #121212;
  width: ${({ width }: SmartphoneProps) => width}px;
  height: ${({ height }: SmartphoneProps) => height}px;
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

const Smartphone: React.FC<SmartphoneProps> = ({ width, height, ...props }) => (
  <Container width={width} height={height} {...props}>
    <Speaker />
    <Power />
    <Volume />
    <Screen
      alt=""
      src="https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000"
    />
  </Container>
)

export default Smartphone
