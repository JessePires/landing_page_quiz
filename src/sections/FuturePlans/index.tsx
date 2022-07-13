import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// Styles
import { Section, Title, Description, RevertColor } from "./style";

const FuturePlans: React.FC = () => (
  <Section>
    <Title>Planos Futuros</Title>
    <Description>
      Veja abaixo as funcionalidades que pretendemos adicionar.{" "}
      <RevertColor>Vem coisa boa por aí!</RevertColor>
    </Description>
  </Section>
);

export default FuturePlans;
