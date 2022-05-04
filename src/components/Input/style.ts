import styled from "styled-components";

export const StyledInput = styled.input`
  box-sizing: border-box;
  border: 1 solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 100%;
  height: 52px;
  background-color: #fff;
  padding: 16px;

  ::placeholder {
    font-size: 16px;
    color: #b4b4b4;
  }
`;
