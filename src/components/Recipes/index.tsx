import React from "react";
import Button from "../Button";
import { Container, Recipes as RecipesList, RecipeCard, Title } from "./styles";

function Recipes() {
  return (
    <Container>
      <Title>
        <h1>Our Best Recipes</h1>
        <span>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </span>
      </Title>

      <RecipesList>
        <RecipeCard>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div>
            <h1>Broccoli Salad with Bacon</h1>
            <Button primary>
              <span>See Recipe</span>
            </Button>
          </div>
        </RecipeCard>
        <RecipeCard>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div>
            <h1>Broccoli Salad with Bacon</h1>
            <Button primary>
              <span>See Recipe</span>
            </Button>
          </div>
        </RecipeCard>
        <RecipeCard>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div>
            <h1>Broccoli Salad with Bacon</h1>
            <Button primary>
              <span>See Recipe</span>
            </Button>
          </div>
        </RecipeCard>
        <RecipeCard>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div>
            <h1>Broccoli Salad with Bacon</h1>
            <Button primary>
              <span>See Recipe</span>
            </Button>
          </div>
        </RecipeCard>
      </RecipesList>
    </Container>
  );
}

export default Recipes;
