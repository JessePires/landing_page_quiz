import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard, EffectCards } from 'swiper'
import { useMediaQuery } from 'react-responsive'

import NextButton from '../NextSwipperButton'
import PrevButton from '../PrevSwipperButton'

// Style
import { Container, SliderContainer, ContentSlider } from './style'

// Assets
import Initial from '../../assets/mobile_screenshots/initial.png'
import Avatar from '../../assets/mobile_screenshots/avatar.png'
import QuizList from '../../assets/mobile_screenshots/new_quiz.png'
import Menu from '../../assets/mobile_screenshots/menu.png'
import QuizDescription from '../../assets/mobile_screenshots/quiz_description.png'
import Question from '../../assets/mobile_screenshots/question.png'
import EndQuiz from '../../assets/mobile_screenshots/fim_quiz.png'
import Ranking from '../../assets/mobile_screenshots/ranking.png'
import Search from '../../assets/mobile_screenshots/pesquisa.png'
import Class from '../../assets/mobile_screenshots/turmas.png'
import ClassInfo from '../../assets/mobile_screenshots/turma_info.png'

// Components
import Smartphone from '../Smartphone'

type SmartPhoneSlider = {
  width?: number
  height?: number
  style?: React.CSSProperties
}

const SmartPhoneSlider: React.FC<SmartPhoneSlider> = ({
  width,
  height,
  ...props
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' })

  const images = [
    Initial,
    Avatar,
    Menu,
    QuizList,
    QuizDescription,
    Question,
    EndQuiz,
    Ranking,
    Search,
    Class,
    ClassInfo,
  ]

  const correctWidth = isMobile ? width + 80 : width + 230

  return (
    <Container {...props}>
      <SliderContainer width={correctWidth}>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          modules={[Navigation, Autoplay, Keyboard, EffectCards]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          // loop
          centeredSlides
          navigation
          roundLengths
          effect={isMobile ? 'slide' : 'cards'}
          observer
        >
          <div className="swiper-button-prev">
            <PrevButton />
          </div>
          <div className="swiper-button-next">
            <NextButton />
          </div>

          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ContentSlider>
                <Smartphone width={width} height={height} image={item.src} />
              </ContentSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Container>
  )
}

SmartPhoneSlider.defaultProps = {
  width: 320,
  height: 640,
  style: {},
}

export default SmartPhoneSlider
