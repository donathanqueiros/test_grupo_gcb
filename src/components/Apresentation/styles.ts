import styled from "styled-components";
import Illustration from "../../assets/Illustration.svg";

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

  height: 768px;
`;

export const Headline = styled.div`
  width: 412px;
  height: 284px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 48px;
    margin-bottom: 32px;
  }

  div {
    width: 100%;
    display: flex;
  }
`;
