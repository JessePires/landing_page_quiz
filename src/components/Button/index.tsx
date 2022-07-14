import React from 'react'
import { StyledButton } from './style'

interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC = ({ children, ...props }: ButtonProps) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
)

export default Button
