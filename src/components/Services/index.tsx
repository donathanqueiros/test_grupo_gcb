import React from "react";
import Button from "../Button";
import { Container, Content, Text } from "./styles";

function Services() {
  return (
    <Container>
      <Content>
        <h1>The best services ready To serve you</h1>
        <Text>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
          <br />
          <br /> Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
          <br />
          <br /> A small river named Duden flows by their place and supplies it
          with the necessary regelialia.
        </Text>
        <Button primary>Know More</Button>
      </Content>
    </Container>
  );
}

export default Services;
