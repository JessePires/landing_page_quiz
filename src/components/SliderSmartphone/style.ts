import styled from "styled-components";

interface SliderContainerProps {
  width: number;
}

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const SliderContainer = styled.div<SliderContainerProps>`
  height: 100%;
  width: ${({ width }) => width}px;
  justify-content: center;
  align-items: center;
  position: relative;

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
`;
