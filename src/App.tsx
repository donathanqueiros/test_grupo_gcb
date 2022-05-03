import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 103px;
  background-color: red;
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 768px;
  background-color: green;
`;

const Second = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 768px;
  background-color: pink;
`;

const Third = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 757px;
  background-color: blue;
`;
const Fourth = styled.div`
  height: 768px;
  background-color: yellow;
`;

const Fifth = styled.div`
  height: 673px;
  background-color: orange;
`;

const Footer = styled.footer`
  height: 103px;
  background-color: purple;
`;

const Logo = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: bold;
`;

const Menus = styled.div`
  width: 455px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
`;

const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  width: 130px;
  height: 52px;
  background-color: #fff;

  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: 16px;
  }
`;

const Headline = styled.div`
  width: 412px;
  height: 284px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  h1 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 48px;
  }

  div {
    width: 100%;
    display: flex;
  }
`;

const Title = styled.div`
  width: 510px;
  height: 104px;
`;

const Input = styled.input`
  border: 1 solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 100%;
  height: 52px;
  background-color: #fff;
`;

const Recipe = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1092px;
  height: 486px;
`;

const RecipeCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 528px;
  height: 225px;

  img {
    width: 253px;
    height: 225px;
    border-radius: 5px 0 0 5px;
  }

  div {
    width: 187px;

    h1 {
      font-size: 24px;
    }
  }
`;

const Content = styled.div`
  width: 420px;
  height: 454px;
`;
function App() {
  return (
    <div className="App">
      <Header>
        <div>
          <Logo>Healthy Food</Logo>
        </div>

        <Menus>
          <span>HEALTHY RECIPES</span>
          <span>BLOG</span>
          <span>JOIN</span>
          <Button>
            <span>REGISTER</span>
          </Button>
        </Menus>
      </Header>
      <First>
        <Headline>
          <h1>Ready for Trying a new recipe?</h1>

          <div>
            <Input placeholder="Search healthy recipes" />
            <Button>
              <span>SEARCH</span>
            </Button>
          </div>
        </Headline>
      </First>

      <Second>
        <Title>
          <h1>Our Best Recipes</h1>
          <span>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </span>
        </Title>

        <Recipe>
          <RecipeCard>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <div>
              <h1>Broccoli Salad with Bacon</h1>
              <Button>See Recipe</Button>
            </div>
          </RecipeCard>
          <RecipeCard>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <div>
              <h1>Broccoli Salad with Bacon</h1>
              <Button>See Recipe</Button>
            </div>
          </RecipeCard>
          <RecipeCard>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <div>
              <h1>Broccoli Salad with Bacon</h1>
              <Button>See Recipe</Button>
            </div>
          </RecipeCard>
          <RecipeCard>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <div>
              <h1>Broccoli Salad with Bacon</h1>
              <Button>See Recipe</Button>
            </div>
          </RecipeCard>
        </Recipe>
      </Second>
      <Third>
        <Content>
          <h2>The best services ready To serve you</h2>
          <span>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </span>
          <Button>Know More</Button>
        </Content>
      </Third>
      <Fourth>
        <div>
          <h2>teste</h2>
          <span>logo</span>
        </div>
        <div>
          <div>card recipe</div>
          <div>card recipe</div>
          <div>card recipe</div>
        </div>
      </Fourth>
      <Fifth>
        <div>
          <h2>teste</h2>
          <div>
            <input />
            <button></button>
          </div>
        </div>
      </Fifth>
      <Footer>
        <div>
          <span>logo</span>
        </div>
        <div>
          <span>healthy recipes</span>
          <button>register</button>
        </div>
      </Footer>
    </div>
  );
}

export default App;
