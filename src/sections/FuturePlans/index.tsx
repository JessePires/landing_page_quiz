import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Components
import { Card } from "../../components";

// Styles
import {
  Section,
  Title,
  Description,
  RevertColor,
  SliderContainer,
  ContentSlider,
} from "./style";

const FuturePlans: React.FC = () => (
  <Section>
    <Title>Planos Futuros</Title>
    <Description>
      Veja abaixo as funcionalidades que pretendemos adicionar.{" "}
      <RevertColor>Vem coisa boa por aí!</RevertColor>
    </Description>

    <SliderContainer>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        centeredSlides
        navigation
        roundLengths
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
        style={{ width: "100%" }}
        breakpoints={{
          790: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ContentSlider style={{ height: 350 }}>
            <Card title="Engajamento por bonificação" width="90%">
              A cada quiz respondido, o aluno receberá uma bonificação de acordo
              com sua pontuação. A ideia é promover mais engajamento.
            </Card>
          </ContentSlider>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider style={{ height: 350 }}>
            <Card title="Questionários ao vivo" width="90%">
              Com essa funcionalidade, o professor poderá disponibilizar o quiz
              e os alunos respondê-lo em tempo real, por exemplo, no horário de
              aula.
            </Card>
          </ContentSlider>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider style={{ height: 350 }}>
            <Card title="Aprimorar a análise estatística" width="90%">
              Por meio da aplicação de técnicas de Aprendizagem de Máquina,
              vamos tentar aprimorar a análise estatística dos alunos para o
              professor.
            </Card>
          </ContentSlider>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  </Section>
);

export default FuturePlans;
