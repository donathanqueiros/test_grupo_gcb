import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 103px;
  background-color: red;
`;

const First = styled.div`
  height: 768px;
  background-color: green;
`;

const Second = styled.div`
  height: 768px;
  background-color: pink;
`;

const Third = styled.div`
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

function App() {
  return (
    <div className="App">
      <Header>
        <div>
          <span>logo</span>
        </div>

        <div>
          <span>healthy recipes</span>
          <span>blog</span>
          <span>join</span>
          <button>register</button>
        </div>
      </Header>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div>
  );
}

export default App;
