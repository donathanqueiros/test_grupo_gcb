import "./App.css";

import Header from "./components/Header";
import Apresentation from "./components/Apresentation";
import Recipes from "./components/Recipes";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Membership from "./components/Membership";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "1366px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        background: "#FFF",
      }}
    >
      <Header />
      <Apresentation />
      <Recipes />
      <Services />
      <Blog />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;
