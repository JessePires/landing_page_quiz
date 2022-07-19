import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 100px;

  @media (max-width: 870px) {
    flex-direction: column-reverse;
    padding: 30px 0px;
  }
`

export const LeftSide = styled.div`
  display: flex;

  @media (max-width: 870px) {
    margin-top: 50px;
  }
`

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media (max-width: 1098px) {
    width: 75%;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    width: 100%;
    padding: 0px 100px;
  }

  @media (max-width: 520px) {
    padding: 0px 30px;
  }
`

export const Info = styled.div`
  display: flex;
  flex: 0.8;
  justify-content: space-between;
`

export const Explanation = styled.div`
  width: 50%;
  text-align: end;

  @media (max-width: 870px) {
    align-self: center;
    text-align: center;
    margin-top: 50px;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`

export const Paragraph = styled.p`
  font-size: 0.9rem;
`

export const Email = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: inherit;
`

export const Title = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 0px;
`

export const Link = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: inherit;
`
