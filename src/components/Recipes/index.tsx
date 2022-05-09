import RecipeCard from "../RecipeCard";
import { Container, RecipeList, Title } from "./styles";
import food1 from "../../assets/img/comida_1.svg";
import food2 from "../../assets/img/comida_2.svg";
import food3 from "../../assets/img/comida_3.svg";
import food4 from "../../assets/img/comida_4.svg";

const dataCards = [
  { name: "Broccoli Salad with Bacon", src: food1 },
  { name: "Classic Beef Burgers", src: food2 },
  { name: "Classic Potato Salad", src: food3 },
  { name: "Cherry Cobbler on the Grill", src: food4 },
];

function Recipes() {
  return (
      <Container id="recipes">
        <Title>
          <h1>Our Best Recipes</h1>
          <span>
            Far far away, behin1d the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </span>
        </Title>

        <RecipeList>
          {dataCards.map(({ name, src }, index) => (
            <RecipeCard key={index} title={name} src={src} />
          ))}
        </RecipeList>
      </Container>
  );
}

export default Recipes;
