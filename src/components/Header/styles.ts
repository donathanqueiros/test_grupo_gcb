import styled from "styled-components";
import { devices } from "../../styles/divice";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1366px;
  padding: 0 calc(1366px * 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 103px;

  @media ${devices.laptop} {
    padding: 0 calc(1366px * 0.04);
  }

  @media ${devices.tablet} {
    padding: 8px calc(1366px * 0.02);
    flex-direction: column;
  }
`;

export const Logo = styled.span`
  ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0;
`;

export const Menus = styled.div`
  width: 455px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    letter-spacing: 0.02em;
  }
  > span {
    ${(props) => props.theme.fonts.secondary};
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
`;
