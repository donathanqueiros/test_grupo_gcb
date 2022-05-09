import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";
import Button from "../Button";
import Title from "../Title";
import { Container, Content, Header } from "./styles";

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
