import styled from "styled-components";
import { devices } from "../../styles/divice";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 544px;
  box-sizing: border-box;
  padding: 0 10%;

  height: 103px;

  > div:first-child {
    span {
      cursor: pointer;
      padding: 16px 0;
      font-size: 16px;
      color: #1d164d;
    }
  }

  > div:last-child {
    justify-content: end;
    span {
      cursor: pointer;
      margin: 16px;
      font-size: 16px;
      color: #9e9baf;
    }

    span:last-child {
      margin-right: 0;
    }
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
