import styled from "styled-components";

export const Section = styled.div`
  overflow-x: hidden;
  padding-top: 100px;
  padding-bottom: 50px;

  @media (max-width: 1150px) {
    padding: 10px 30px;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 510px) {
    font-size: 2.5rem;
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const RevertColor = styled.span`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
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
`;

export const ContentSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;

  @media (max-width: 790px) {
    width: 80%;
  }
`;
