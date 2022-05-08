import { useState } from "react";
import Button from "../Button";
import Modal from "react-modal";
import { Container, Logo, Menus } from "./styles";
import Register from "../Register";
import Welcome from "../Welcome";

const customStyles = {
  content: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "0",
  },
};

Modal.setAppElement("#root");

const Header = () => {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalWelcome, setShowModalWelcome] = useState(false);

  const openModalRegister = () => setShowModalRegister(true);

  const closeModalRegister = () => setShowModalRegister(false);

  const openModalWelcome = () => setShowModalWelcome(true);

  const closeModalWelcome = () => setShowModalWelcome(false);

  const onSubmitRegister = () => {
    closeModalRegister();
    openModalWelcome();
  };

  return (
    <Container>
      <div>
        <Logo>Healthy Food</Logo>
      </div>

      <Menus>
        <span>HEALTHY RECIPES</span>
        <span>BLOG</span>
        <span>JOIN</span>
        <Button onClick={openModalRegister}>REGISTER</Button>
      </Menus>

      <Modal
        isOpen={showModalRegister}
        onRequestClose={closeModalRegister}
        style={customStyles}
      >
        <Register onSubmit={onSubmitRegister} />
      </Modal>

      <Modal
        isOpen={showModalWelcome}
        onRequestClose={closeModalWelcome}
        style={{
          ...customStyles,
          content: {
            ...customStyles.content,
            height: "302px",
          },
        }}
      >
        <Welcome OnContinue={closeModalWelcome} />
      </Modal>
    </Container>
  );
};

export default Header;
