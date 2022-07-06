import styled from 'styled-components'

// Assets
import Background from '../../assets/bg_section.svg'

// Components
import { Button } from '../../components'

export const StyledButton = styled(Button)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
  }

  svg {
    margin-right: 10px;
    width: 35px;
    height: 35px;
  }
`

export const Section = styled.section`
  height: 839px;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1150px) {
    padding: 10px 30px;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 510px) {
    font-size: 2.5rem;
  }
`

export const SubTitle = styled(Title)`
  font-size: 1.2rem;
  margin-top: 60px;
  margin-bottom: 30px;

  @media (max-width: 510px) {
    font-size: 1rem;
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
  font-weight: 700;
`

export const NormalText = styled.p`
  color: white;
  font-size: 1rem;
`

export const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    :last-child {
      margin-top: 40px;
    }
  }
`
