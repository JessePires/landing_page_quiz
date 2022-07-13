import styled from "styled-components";

export const Section = styled.section`
  overflow-x: hidden;
  /* height: 839px; */
  padding-top: 100px;

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

export const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 50px 50px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const UnorderedList = styled.ul`
  width: 90%;
`;

export const ListElementText = styled.li`
  font-size: 0.9rem;
`;
