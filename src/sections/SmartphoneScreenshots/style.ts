import styled from 'styled-components'
import { motion } from 'framer-motion'

// Assets
import Background from '../../assets/bg_section.svg'

export const Section = styled.section`
  overflow-x: hidden;
  background-image: url('${Background.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-top: -7px;

  @media (max-width: 1150px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media (max-width: 550px) {
    padding-bottom: 50px;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 510px) {
    font-size: 2.5rem;
  }
`

export const Description = styled.p`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
`

export const Body = styled(motion.div)`
  margin-top: 30px;
`
