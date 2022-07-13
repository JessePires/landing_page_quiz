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
import CreateClass from "../../assets/control_painel_screenshots/create_class.png";
import CreateQuestion from "../../assets/control_painel_screenshots/create_question.png";
import CreateQuiz from "../../assets/control_painel_screenshots/create_quiz.png";
import Faq from "../../assets/control_painel_screenshots/faq.png";
import ListClass from "../../assets/control_painel_screenshots/list_class.png";
import ManageClass from "../../assets/control_painel_screenshots/manage_class.png";
import PainelControleQuizUTFPR from "../../assets/control_painel_screenshots/Painel-de-Controle-Quiz-UTFPR.png";

const BindKeyboardSwipeableViews = bindKeyboard(autoPlay(SwipeableViews));

const SliderControlPainel: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const images = [
    CreateClass,
    CreateQuestion,
    CreateQuiz,
    Faq,
    ListClass,
    ManageClass,
    PainelControleQuizUTFPR,
  ];

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
