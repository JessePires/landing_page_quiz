import styled from "styled-components";

export const NextButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  svg {
    height: 40px;
    width: 40px;
  }

  svg path {
    stroke: white;
  }
`;
