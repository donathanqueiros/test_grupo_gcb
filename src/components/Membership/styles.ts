import styled from "styled-components";

import FinalImage from "../../assets/FinalImage.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 673px;
  background-image: url(${FinalImage});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  padding-left: 137px;

  > div {
    width: 454px;
    height: 168px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};
      margin-bottom: 32px;
    }

    > div {
      display: flex;

      Input {
        max-width: 344px;
        margin-right: 16px;
      }

      Button {
        width: 93px;
        height: 54px;
        border-radius: 5px;
      }
    }
  }
`;
