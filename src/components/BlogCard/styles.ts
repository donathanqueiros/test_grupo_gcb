import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  padding-bottom: 32px;
  width: 348px;
  height: 450px;
  box-shadow: 0px 15px 20px rgba(29, 22, 77, 0.08);
  border-radius: 7px;
  > img {
    height: 247px;
    border-radius: 7px 7px 0 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 32px 0px;
    padding-left: 24px;
    height: 139px;
    h1 {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      text-align: start;
      font-size: 24px !important;
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};
      margin-bottom: 24px;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      height: 52px;
      img {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        margin-right: 8px;
      }
      span {
        font-size: 16px;
        color: #9e9baf;
      }
    }
  }
`;
