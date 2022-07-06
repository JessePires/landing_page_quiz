import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const NextButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  svg {
    height: 40px;
    width: 40px;
  }

  svg path {
    stroke: white;
  }
`

export const PrevButton = styled.button`
  cursor: pointer;
  margin-right: 20px; // Por causa do width +20 no index.tsx

  background-color: transparent;
  border: none;

  svg {
    height: 40px;
    width: 40px;
  }

  svg path {
    stroke: white;
  }
`
