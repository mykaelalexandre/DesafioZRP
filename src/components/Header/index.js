import React from "react";
import PokeImage from "../../assets/pokeapimage.png";
import { Container } from "./styles";

function Header() {
  return (
    <>
      <Container>
        <img src={PokeImage} alt="Pokeapi"></img>
      </Container>
    </>
  );
}

export default Header;
