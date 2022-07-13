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
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
`;

export const RevertColor = styled.span`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
`;
