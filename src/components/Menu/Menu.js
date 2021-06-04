import React from "react";
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerRightMobile,
  TextRight,
  RowMenu,
  RowMenuCheck,
} from "./Menu.styles";
import { MenuMobile } from "../MenuMobile";

const Menu = () => {
  return (
    <Container>
      <ContainerLeft>
        <TextRight>This Interior</TextRight>
      </ContainerLeft>
      <ContainerRight>
        <RowMenuCheck>Home</RowMenuCheck>
        <RowMenu>Collection</RowMenu>
        <RowMenu>About</RowMenu>
        <RowMenu>Contact</RowMenu>
      </ContainerRight>

      <ContainerRightMobile>
        <MenuMobile />
      </ContainerRightMobile>
    </Container>
  );
};

export { Menu };
