import Button from "../Button";
import Input from "../Input";
import { Container, Headline } from "./styles";
import SearchIcon from "../../assets/img/searchIcon.svg";
import Title from "../Title";

function Apresentation() {
  return (
    <Container>
      <Headline>
        <Title>Ready for Trying a new recipe?</Title>

        <div>
          <Input placeholder="Search healthy recipes" />
          <Button primary>
            <img src={SearchIcon} alt="React Logo" />
          </Button>
        </div>
      </Headline>
    </Container>
  );
}

export default Apresentation;
