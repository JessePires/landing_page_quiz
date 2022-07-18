import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard, EffectCards } from 'swiper'
import { Element } from 'react-scroll'

// Components
import { Card } from '../../components'

// Styles
import {
  Section,
  Title,
  Description,
  RevertColor,
  SliderContainer,
  ContentSlider,
  PrevButton,
  NextButton,
} from './style'

const FuturePlans: React.FC = () => (
  <Element name="FuturePlans">
    <Section>
      <Title>Planos Futuros</Title>
      <Description>
        Veja abaixo as funcionalidades que pretendemos adicionar.{' '}
        <RevertColor>Vem coisa boa por aí!</RevertColor>
      </Description>

      <SliderContainer>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          loop
          centeredSlides
          navigation
          roundLengths
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Keyboard, EffectCards]}
          className="mySwiper"
          style={{ width: '100%' }}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            790: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
        >
          <div className="swiper-button-prev">
            <PrevButton style={{ stroke: 'black' }} />
          </div>
          <div className="swiper-button-next">
            <NextButton />
          </div>
          <SwiperSlide>
            <ContentSlider style={{ height: 350 }}>
              <Card title="Engajamento por bonificação" width="90%">
                A cada quiz respondido, o aluno receberá uma bonificação de
                acordo com sua pontuação. A ideia é promover mais engajamento.
              </Card>
            </ContentSlider>
          </SwiperSlide>
          <SwiperSlide>
            <ContentSlider style={{ height: 350 }}>
              <Card title="Questionários ao vivo" width="90%">
                Com essa funcionalidade, o professor poderá disponibilizar o
                quiz e os alunos respondê-lo em tempo real, por exemplo, no
                horário de aula.
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
  </Element>
)

export default FuturePlans
