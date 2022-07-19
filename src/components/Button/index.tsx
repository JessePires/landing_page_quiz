import React from "react";
import { StyledButton } from "./style";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC = ({ children, ...props }: ButtonProps) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  href: "",
};

export default Button;
