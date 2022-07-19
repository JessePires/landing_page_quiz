import styled from "styled-components";

export const PrevButton = styled.button`
  cursor: pointer;
  margin-right: 20px; // Por causa do width +20 no index.tsx

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
