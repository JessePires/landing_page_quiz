import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper'

// Styles
import {
  Section,
  Title,
  Description,
  RevertColor,
  SliderContainer,
  ContentSlider,
} from './style'

const FuturePlans: React.FC = () => (
  <Section>
    <Title>Planos Futuros</Title>
    <Description>
      Veja abaixo as funcionalidades que pretendemos adicionar.{' '}
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
          <ContentSlider style={{ height: 300 }}>Slide 1</ContentSlider>
        </SwiperSlide>
        <SwiperSlide className="swipperSlider">
          <ContentSlider style={{ height: 300 }}>Slide 1</ContentSlider>
        </SwiperSlide>
        <SwiperSlide className="swipperSlider">
          <ContentSlider style={{ height: 300 }}>Slide 1</ContentSlider>
        </SwiperSlide>
        <SwiperSlide className="swipperSlider">
          <ContentSlider style={{ height: 300 }}>Slide 1</ContentSlider>
        </SwiperSlide>
        <SwiperSlide className="swipperSlider">
          <ContentSlider style={{ height: 300 }}>Slide 1</ContentSlider>
        </SwiperSlide>
        <SwiperSlide className="swipperSlider">
          <ContentSlider style={{ height: 300 }}>Slide 1</ContentSlider>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  </Section>
)

export default FuturePlans
