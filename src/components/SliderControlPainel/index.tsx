import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard, EffectCards } from 'swiper'

// Style
import {
  Container,
  SliderContainer,
  ContentSlider,
  ImageWrapper,
  Image,
  StyledNextButton,
  StyledPrevButton,
} from './style'

// Assets
import Class from '../../assets/control_painel_screenshots/class.png'
import ClassDetails from '../../assets/control_painel_screenshots/class_details.png'
import CreateClass from '../../assets/control_painel_screenshots/create_class.png'
import CreateQuestion from '../../assets/control_painel_screenshots/create_question.png'
import CreateQuiz from '../../assets/control_painel_screenshots/create_quiz.png'
import DBQuestion from '../../assets/control_painel_screenshots/db_question.png'
import EditClass from '../../assets/control_painel_screenshots/edit_class.png'
import Faq from '../../assets/control_painel_screenshots/faq.png'
import Login from '../../assets/control_painel_screenshots/login.png'
import QuizQuestions from '../../assets/control_painel_screenshots/quiz_questions.png'
import Quizzes from '../../assets/control_painel_screenshots/quizzes.png'
import SearchImage from '../../assets/control_painel_screenshots/search_image.png'
import StatisticsQuizQuestion from '../../assets/control_painel_screenshots/statistics_quiz_question.png'
import StatisticsQuizStudent from '../../assets/control_painel_screenshots/statistics_quiz_student.png'
import EditQuiz from '../../assets/control_painel_screenshots/edit_quiz.png'

const SliderControlPainel: React.FC = () => {
  const images = [
    Login,
    Quizzes,
    CreateQuiz,
    EditQuiz,
    QuizQuestions,
    CreateQuestion,
    DBQuestion,
    SearchImage,
    StatisticsQuizQuestion,
    StatisticsQuizStudent,
    Class,
    EditClass,
    CreateClass,
    Faq,
    ClassDetails,
  ]

  return (
    <Container>
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
          modules={[Navigation, Autoplay, Keyboard, EffectCards]}
          className="mySwiper"
          style={{ width: '100%' }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
        >
          <div className="swiper-button-prev">
            <StyledPrevButton />
          </div>
          <div className="swiper-button-next">
            <StyledNextButton />
          </div>

          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ContentSlider>
                <ImageWrapper>
                  <Image alt="" src={item.src} />
                </ImageWrapper>
              </ContentSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </Container>
  )
}

export default SliderControlPainel
