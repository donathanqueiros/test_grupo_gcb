import styled from "styled-components";
import Title from "../Title";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 7px;
`;

export const Form = styled.form`
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 30px;
`;

export const AdressInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > ${Title}:first-child {
    width: 100%;
    text-align: center;
    margin-top: 32px;
    margin-bottom: 16px;
  }
`;

export const Header = styled.div`
  margin-bottom: 16px;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4px 0px;

  ${Title} {
    padding-bottom: 4px;
  }
`;

export const About = styled(Title)`
  margin: 16px auto;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
