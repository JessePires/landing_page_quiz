import styled from 'styled-components'
import { motion } from 'framer-motion'

// Assets
import Background from '../../assets/bg_section.svg'
import Arrow from '../../assets/seta_enrolada.svg'

// Components
import { Button } from '../../components'

export const Section = styled.section`
  overflow-x: hidden;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 30px;

  @media (max-width: 1150px) {
    padding: 20px 30px;
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
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
`
export const RevertColor = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`

export const Card = styled(motion.div)`
  display: flex;
  margin: 40px 0;
  width: 60%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const CardIcon = styled.div`
  svg {
    height: 5em;
    width: 5em;
    color: white;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const CardTitle = styled(Title)`
  font-size: 1.2em;
  text-align: left;
`
export const CardDescription = styled.p`
  color: white;
  font-size: 1rem;
`
export const ArrowEffect = styled.img.attrs({
  src: Arrow.src,
  draggable: false,
})`
  height: 50px;
  position: absolute;
  right: -146px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const StyledButton = styled(Button)`
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const WrapperButton = styled(motion.div)`
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
`
