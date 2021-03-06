import styled from "styled-components";
import Illustration from "../../assets/img/Illustration.svg";
import { devices } from "../../styles/divice";

export const Container = styled.div`
  background-image: url(${Illustration});
  background-repeat: no-repeat;

  background-position-x: right;
  background-position-y: top;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0 10%;
  height: 768px;


  @media ${devices.laptop} {
    background-position-x: 100% !important;
  }
  @media ${devices.tablet} {
    background-position-x: 55% !important;
  }
`;

export const Headline = styled.div`
  max-width: 412px;
  min-height: 284px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    Input {
      max-width: 343px;
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 48px;
    margin-bottom: 32px;
  }

  div {
    width: 100%;
    display: flex;

    Input {
      margin-right: 16px;
    }
  }

  @media ${devices.laptop} {
    background-color: rgba(255, 255, 255, 0.6);
    background-position-y: 10% !important;
    box-sizing: border-box;
    padding: 16px 16px;
  }
  @media ${devices.mobileL} {
    margin-top: 40px;
  }
  @media ${devices.mobileS} {
    margin-top: 68px;
  }
`;
