import { useEffect, useState } from "react";
import styled from "styled-components";
import { IUser } from "../../interfaces/User";
import Button from "../Button";
import Title from "../Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
`;

const Header = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 24px;
`;

function Welcome({ OnContinue }: { OnContinue?: () => void }) {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user") as string));
  }, []);

  return (
    <Container>
      <Header>
        <Title>Welcome {user?.name}</Title>
      </Header>
      <Content>
        <h2>Your account has been created successfully</h2>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button primary onClick={OnContinue}>
            Continue
          </Button>
        </div>
      </Content>
    </Container>
  );
}

export default Welcome;
