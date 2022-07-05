import React from 'react'
import { StyledButton } from './style'

interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC = ({ children }: ButtonProps) => (
  <StyledButton type="button">{children}</StyledButton>
)

export default Button
