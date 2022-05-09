import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;

  height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 48px;
  background-color: #fafafc;

  > div:first-child {
    align-self: center;
    max-width: 510px;
    margin-bottom: 32px;
    h1 {
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};
    }

    span {
      display: flex;
      text-align: center;
      font-size: 16px;
      color: #9e9baf;
    }
  }
`;

export const CardList = styled.div`
  box-sizing: border-box;
  flex-direction: row;
  padding-left: 10%;
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  > div {
    margin: 0 12px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
