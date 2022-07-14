import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, bindKeyboard } from "react-swipeable-views-utils";

// Icons
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

// Style
import {
  Container,
  PrevButton,
  NextButton,
  ImageWrapper,
  Image,
} from "./style";

// Assets
<<<<<<< HEAD
import CreateClass from "../../assets/control_painel_screenshots/create_class.png";
import CreateQuestion from "../../assets/control_painel_screenshots/create_question.png";
import CreateQuiz from "../../assets/control_painel_screenshots/create_quiz.png";
import Faq from "../../assets/control_painel_screenshots/faq.png";
import ListClass from "../../assets/control_painel_screenshots/list_class.png";
import ManageClass from "../../assets/control_painel_screenshots/manage_class.png";
import PainelControleQuizUTFPR from "../../assets/control_painel_screenshots/Painel-de-Controle-Quiz-UTFPR.png";
=======
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
>>>>>>> ac22043ac1ea14f099963b8d49ee7dce37c7ea62

const BindKeyboardSwipeableViews = bindKeyboard(autoPlay(SwipeableViews));

const SliderControlPainel: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
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
<<<<<<< HEAD
    ListClass,
    ManageClass,
    PainelControleQuizUTFPR,
  ];
=======
    ClassDetails,
  ]
>>>>>>> ac22043ac1ea14f099963b8d49ee7dce37c7ea62

  const handleNext = () => {
    setActiveImage((prevActiveImage) => (prevActiveImage + 1) % images.length);
  };

  const handleBack = () => {
    setActiveImage((prevActiveImage) => {
      if (prevActiveImage === 0) return images.length - 1;

      return (prevActiveImage - 1) % images.length;
    });
  };

  const handleChangeActiveImage = (step: number) => {
    setActiveImage(step);
  };

  return (
    <Container>
      {images.length > 1 && (
        <PrevButton onClick={handleBack}>
          <IoChevronBackOutline />
        </PrevButton>
      )}
      <BindKeyboardSwipeableViews
        enableMouseEvents
        index={activeImage}
        onChangeIndex={handleChangeActiveImage}
        className="SwipeableViews"
        // style={{
        //   width: width + 15,
        // }}
      >
        {images.map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <ImageWrapper key={idx}>
            <Image alt="" src={item.src} />
          </ImageWrapper>
        ))}
      </BindKeyboardSwipeableViews>
      {images.length > 1 && (
        <NextButton
          // disabled={activeImage === images.length - 1}
          onClick={handleNext}
        >
          <IoChevronForwardOutline />
        </NextButton>
      )}
    </Container>
  );
};

export default SliderControlPainel;
