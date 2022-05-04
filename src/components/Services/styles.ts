import styled from "styled-components";
import Services from "../../assets/Services.svg";

export const Container = styled.div`
  background-image: url(${Services});
  background-repeat: no-repeat;

  background-position-x: left;
  background-position-y: top;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;

  height: 757px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  height: 454px;
  margin-right: 250px;
  margin-top: 136.8px;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 32px;
  }

  Button {
    width: 150px;
    height: 42px;
    border-radius: 5px;
  }
`;

export const Text = styled.div`
  text-align: left;
  height: 238px;
  font-size: 16px;
  color: #9e9baf;
`;
