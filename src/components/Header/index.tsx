import React from "react";
import Button from "../Button";
import { Container, Logo, Menus } from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <Logo>Healthy Food</Logo>
      </div>

      <Menus>
        <span>HEALTHY RECIPES</span>
        <span>BLOG</span>
        <span>JOIN</span>
        <Button>REGISTER</Button>
      </Menus>
    </Container>
  );
};

export default Header;
