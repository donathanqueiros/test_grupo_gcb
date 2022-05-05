import { Formik } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Input from "../Input";
import Title from "../Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
`;

const Form = styled(Formik)`
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

const AdressInfo = styled.div`
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

const Header = styled.div`
  margin-bottom: 16px;
  width: 600px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
  }
`;

const Item = styled.div`
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

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const About = styled(Title)`
  margin: 16px auto;
`;

interface MyFormValues {
  name: string;
}

function Register() {
  const initialValues: MyFormValues = { name: "asdasd" };
  return (
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>

      <Form>
        <About size="sm">About you</About>
        <Row>
          <Item>
            <Title size={16}>Name</Title>
            <Input type="text" name="name" />
          </Item>
        </Row>
        {/* <Item>
          <Title size={16}>Birth date</Title>
          <Input sizee="md" />
          </Item>
          
        <Title size={16}>CPF</Title>
        <Input sizee="md" />

        <AdressInfo>
          <Title size="sm">Address</Title>
          <Item>
            <Title size={16}> zip code</Title>
            <Input sizee="md" />
            </Item>
            <Item>
            <Title size={16}>Name of street/Avenue</Title>
            <Input sizee="md" />
          </Item>
          <Item>
            <Title size={16}>Neighborhood </Title>
            <Input sizee="md" />
          </Item>
          <Item>
            <Title size={16}>Number</Title>
            <Input sizee="md" />
            </Item>
            
          <Item>
            <Title size={16}>City</Title>
            <Input sizee="md" />
            </Item>
            
            <Item>
            <Title size={16}>state</Title>
            <Input sizee="md" />
          </Item>
        </AdressInfo> */}

        <Button primary type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
