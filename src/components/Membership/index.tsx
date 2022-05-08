import Button from "../Button";
import Input from "../Input";
import { Container } from "./styles";

function Membership() {
  return (
    <Container>
      <div>
        <h1>Join our membership to get special offer</h1>
        <div>
          <Input placeholder="Enter your email address" />
          <Button primary>Join</Button>
        </div>
      </div>
    </Container>
  );
}

export default Membership;
