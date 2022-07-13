import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
`;

export const PrevButton = styled.button`
  position: absolute;
  cursor: pointer;
  margin-right: 20px; // Por causa do width +20 no index.tsx
  background-color: transparent;
  border: none;
  z-index: 1;

  svg {
    height: 40px;
    width: 40px;
  }

  svg path {
    /* stroke: white; */
    stroke: black;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 1;
  right: 0;

  svg {
    height: 40px;
    width: 40px;
  }

  svg path {
    /* stroke: white; */
    stroke: black;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
