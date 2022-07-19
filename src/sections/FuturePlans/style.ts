import styled from 'styled-components'
// Assets
import Background from '../../assets/bg_future_plans.svg'

// Components
import { NextButtonComponent, PrevButtonComponent } from '../../components'

export const Section = styled.div`
  overflow-x: hidden;
  padding: 100px 30px;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  min-height: 865px;

  @media (max-width: 1150px) {
    padding: 100px 30px;
    min-height: auto;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 510px) {
    font-size: 2.5rem;
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const RevertColor = styled.span`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
`

export const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .swiper-slide {
    display: flex;
    opacity: 0.7;
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
`

export const ContentSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;

  @media (max-width: 790px) {
    width: 80%;
  }
`

export const PrevButton = styled(PrevButtonComponent)`
  svg path {
    stroke: ${({ theme }) => theme.colors.black};
  }
`

export const NextButton = styled(NextButtonComponent)`
  svg path {
    stroke: ${({ theme }) => theme.colors.black};
  }
`
