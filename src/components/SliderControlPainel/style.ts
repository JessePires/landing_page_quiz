import styled from "styled-components";
import ImageNext from "next/image";

// Components
import NextButton from "../NextSwipperButton";
import PrevButton from "../PrevSwipperButton";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: fit-content;
  align-items: center;
`;

export const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .swiper-slide {
    display: flex;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
    transition: all 200ms linear;
    transform: scale(0.8);
  }

  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
  }

  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev::after {
    display: none;
  }
`;

export const ContentSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled(ImageNext)`
  width: 100%;
  height: 100%;
`;

export const StyledNextButton = styled(NextButton)`
  padding-right: 30px;
  svg path {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledPrevButton = styled(PrevButton)`
  padding-left: 30px;
  svg path {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;
