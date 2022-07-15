import styled from 'styled-components'
import { motion } from 'framer-motion'

interface WrapperProps {
  width: string
  height: string
}

export const Wrapper = styled(motion.div)<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  width: ${({ width }) => width};
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08);
  background: ${({ theme }) => theme.colors.white};
  height: ${({ height }) => height};
  justify-content: center;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;

    :first-child {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 550px) {
    margin-bottom: 20px;
    width: 100%;

    :first-child {
      margin-bottom: 30px;
    }
  }
`

export const StyledIcon = styled.div`
  svg {
    width: 90px;
    height: 90px;
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 10px;
`

export const Note = styled.span`
  color: #d3d3d3;
  align-self: flex-end;
  font-size: 0.9rem;
`
