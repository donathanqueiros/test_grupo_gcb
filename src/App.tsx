import "./App.css";

import Header from "./components/Header";
import Apresentation from "./components/Apresentation";
import Recipes from "./components/Recipes";
import Services from "./components/Services";
import Blog from "./components/Blog";
import styled from "styled-components";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  box-sizing: border-box;
`;

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Muli"],
      },
    });
  }, []);

  return (
    <Container className="App">
      <Header />
      <Apresentation />
      <Recipes />
      <Services />
      <Blog />
      <Membership />
      <Footer />
    </Container>
  );
}

export default App;
