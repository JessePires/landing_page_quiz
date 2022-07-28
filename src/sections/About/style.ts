import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Section = styled.section`
  overflow-x: hidden;
  padding: 100px 30px;

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

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const AuthorWrapper = styled(motion.div)`
  display: flex;
  /* justify-content: center; */
  margin: 30px;
  height: 100%;

  @media (max-width: 900px) {
    margin: 30px 0;
  }
`

export const AuthorImage = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
`

export const AuthorInformations = styled.div`
  padding: 0 10px;
`

export const AuthorName = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
`

export const AuthorDescription = styled.p`
  font-size: 0.95rem;
`
