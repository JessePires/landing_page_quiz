import styled from "styled-components";

export const StyledButton = styled.button`
  background: white;
  padding: 0 40px;
  height: 65px;
  border: 0;

  color: ${(props) => props.theme.colors.darkPurple};
  font-weight: 800;
  font-size: 1.5em;
  cursor: pointer;
  line-height: 32px;

  opacity: 0.9;
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 1;
  }
`;
