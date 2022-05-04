import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 103px;

  > div:first-child {
    span {
      margin-left: 137px;
      font-size: 16px;
      color: #1d164d;
    }
  }

  > div:last-child {
    span {
      font-size: 16px;
      color: #9e9baf;
    }

    span:last-child {
      margin-right: 137px;
      margin-left: 32px;
    }
  }
`;
