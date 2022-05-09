import styled from "styled-components";
import { IInputProps } from ".";

export const StyledInput = styled.input<IInputProps>`
  box-sizing: border-box;
  border: 1 solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 100%;
  height: 52px;
  background-color: #fff;
  padding: 10px;

  ::placeholder {
    font-size: 16px;
    color: #b4b4b4;
  }

  ${({ sizee }) => {
    switch (sizee) {
      case "sm":
        return `height: 22px;`;
      case "md":
        return `height: 32px;`;
      case "lg":
        return `height: 52px;`;
      default:
        return `height: ${sizee}px;`;
    }
  }}
`;
