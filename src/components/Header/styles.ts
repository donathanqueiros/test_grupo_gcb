import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: calc(1366px - 137px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 103px;
`;

export const Logo = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: bold;
`;

export const Menus = styled.div`
  width: 455px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
`;
