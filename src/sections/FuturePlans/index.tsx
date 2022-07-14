import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import dynamic from "next/dynamic";

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

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const FuturePlans: React.FC = () => {
  const config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };

  return (
    <Section>
      {/* <ParticlesBg type="custom" config={config} bg /> */}
      <Title>Planos Futuros</Title>
      <Description>
        Veja abaixo as funcionalidades que pretendemos adicionar.{" "}
        <RevertColor>Vem coisa boa por aí!</RevertColor>
      </Description>

      <SliderContainer>
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          loop
          centeredSlides
          navigation
          roundLengths
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swipperSlider">
            <ContentSlider style={{ height: 350 }}>
              <Card title="Engajamento por bonificação" width="100%">
                A cada quiz respondido, o aluno receberá uma bonificação de
                acordo com sua pontuação. A ideia é promover mais engajamento.
              </Card>
            </ContentSlider>
          </SwiperSlide>
          <SwiperSlide className="swipperSlider">
            <ContentSlider style={{ height: 350 }}>
              <Card title="Questionários ao vivo">
                Com essa funcionalidade, o professor poderá disponibilizar o
                quiz e os alunos respondê-lo em tempo real, por exemplo, no
                horário de aula.
              </Card>
            </ContentSlider>
          </SwiperSlide>
          <SwiperSlide className="swipperSlider">
            <ContentSlider style={{ height: 350 }}>
              <Card title="Aprimorar a análise estatística">
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
};

export default FuturePlans;
