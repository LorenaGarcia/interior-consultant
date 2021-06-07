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

const Menu = ({ open, setOpen }) => {
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
        <MenuMobile open={open} setOpen={setOpen} />
      </ContainerRightMobile>
    </Container>
  );
};

export { Menu };
