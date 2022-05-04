import React, { useEffect, useState } from "react";
import Button from "../Button";
import Modal from "react-modal";
import { Container, Logo, Menus } from "./styles";
import Register from "../Register";

const customStyles = {
  content: {
    margin: "0 auto",

    maxWidth: "600px",
    boxSizeing: "border-box",
    padding: "0",
  },
};

Modal.setAppElement("#root");

const Header = () => {
  const [showModal, setShowModal] = useState(true);

  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <div>
        <Logo>Healthy Food</Logo>
      </div>

      <Menus>
        <span>HEALTHY RECIPES</span>
        <span>BLOG</span>
        <span>JOIN</span>
        <Button onClick={openModal}>REGISTER</Button>
      </Menus>

      <Modal
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Register />
      </Modal>
    </Container>
  );
};

export default Header;
