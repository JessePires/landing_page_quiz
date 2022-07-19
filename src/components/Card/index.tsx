import React from "react";

// Style
import { Wrapper, Title, StyledIcon, Note } from "./style";

type Card = {
  icon?: JSX.Element;
  title?: string;
  children: JSX.Element | string;
  note?: string;
  width?: string;
  height?: string;
};

const Card: React.FC<Card> = ({
  icon,
  title,
  note,
  children,
  width,
  height,
}) => (
  <Wrapper
    width={width}
    height={height}
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition: { duration: 0.8 },
    }}
    transition={{ type: "spring", duration: 5, bounce: 0.6 }}
    viewport={{
      once: false,
    }}
  >
    <Note>{note}</Note>
    <StyledIcon>{icon}</StyledIcon>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

Card.defaultProps = {
  icon: <span />,
  title: "teste",
  note: "",
  width: "35%",
  height: "100%",
};

export default Card;
