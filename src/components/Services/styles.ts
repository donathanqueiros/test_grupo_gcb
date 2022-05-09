import styled from "styled-components";
import Services from "../../assets/img/Services.svg";
import { devices } from "../../styles/divice";

export const Text = styled.div`
  width: 100%;
  text-align: left;
  min-height: 238px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #9e9baf;
`;

export const Container = styled.div`
  background-image: url(${Services});
  background-repeat: no-repeat;

  background-position-x: left;
  background-position-y: top;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;

  box-sizing: border-box;
  padding-right: 250px;
  padding-top: 136.8px;
  min-height: 757px;

  ${Text} {
    margin-bottom: 50px;
  }

  @media ${devices.laptopL} {
    padding-right: 150px;
  }

  @media ${devices.laptop} {
    padding-right: 0;
  }
  @media ${devices.tablet} {
    align-items: center;

    background-position-y: top;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  max-width: 418px;
  min-height: 454px;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 32px;
  }

  Button {
    min-width: 150px;
    min-height: 42px;
    border-radius: 5px;
    padding: 16px 32px;
  }

  @media ${devices.laptop} {
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: content-box;
    padding: 16px 16px;
  }
`;
