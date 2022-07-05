import styled from 'styled-components'

// Assets
import Background from '../../assets/bg_section.svg'

export const Section = styled.section`
  height: 839px;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 100px 100px;

  @media (max-width: 1150px) {
    padding: 10px 30px;
  }

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 3rem;

  @media (max-width: 510px) {
    font-size: 2.5rem;
  }
`
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.1rem;
`
export const RevertColor = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.colors.white};
`
