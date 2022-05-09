import styled from "styled-components";

export const StyledButton = styled.button<{ primary?: boolean; theme: any }>`
  border: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  padding: 0px 14px;
  min-height: 52px;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : "#fff"};
  span {
    color: ${({ primary, theme }) => (primary ? "#fff" : theme.colors.primary)};
    font-weight: bold;
    font-size: 16px;
  }
`;
