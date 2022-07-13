import styled from "styled-components";

export const Section = styled.section`
  overflow-x: hidden;
  padding-top: 100px;
  width: 100%;

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
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  width: 50%;
  margin-bottom: 30px;

  @media (max-width: 590px) {
    width: 90%;
  }
`;
