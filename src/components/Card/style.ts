import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  width: 35%;
  border-radius: 10px;
  box-shadow: 0px 3px 8px #d3d3d3;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;

    :first-child {
      margin-bottom: 30px;
    }
  }

  @media (min-width: 480px) and (max-width: 900px) {
    width: 45%;
  }

  @media (min-width: 900px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    margin-bottom: 20px;
    width: 100%;

    :first-child {
      margin-bottom: 30px;
    }
  }
`;

export const StyledIcon = styled.div`
  svg {
    width: 90px;
    height: 90px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const Note = styled.span`
  color: #d3d3d3;
  align-self: flex-end;
  font-size: 0.9rem;
`;
