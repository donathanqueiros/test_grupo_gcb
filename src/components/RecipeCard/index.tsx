import Button from "../Button";
import { Container } from "./styles";

interface Props {
  title: string;
  onClick?: () => void;
  src: string;
}
const RecipeCard = ({ src, title, onClick }: Props) => {
  return (
    <Container>
      <img src={src} alt="" />
      <div>
        <h1>{title}</h1>
        <Button primary onClick={onClick}>
          <span>See Recipe</span>
        </Button>
      </div>
    </Container>
  );
};

export default RecipeCard;
