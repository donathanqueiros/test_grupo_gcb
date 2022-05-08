import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 15px 20px rgba(29, 22, 77, 0.08);
  max-width: 528px;
  height: 225px;
  width: 100%;
  padding-right: 42px;

  img {
    max-width: 253px;
    height: 100%;
    border-radius: 5px 0 0 5px;
    margin-right: 32px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 127px;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};
    }

    Button {
      width: 134px;
      height: 48px;
      border-radius: 7px;
    }
  }
`;
