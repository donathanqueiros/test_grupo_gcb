import styled from "styled-components";

import FinalImage from "../../assets/FinalImage.svg";
import { devices } from "../../styles/divice";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 673px;
  background-image: url(${FinalImage});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  padding-left: 10%;
  padding-right: 10%;

  > div {
    width: 454px;
    min-height: 168px;

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

    @media ${devices.laptop} {
      background-color: rgba(255, 255, 255, 0.6);
      box-sizing: content-box;
      padding: 16px 16px;
    }
  }
`;
