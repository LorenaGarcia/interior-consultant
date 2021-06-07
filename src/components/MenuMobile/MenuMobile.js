import React from "react";
import { Container, StyledMenu, StyledBurger } from "./MenuMobile.styles";

const MenuMobile = ({ open, setOpen }) => {
  return (
    <Container>
      {open && (
        <StyledMenu open={open}>
          <a className="TextBold" href="/">
            Home
          </a>
          <a href="/">Collection</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </StyledMenu>
      )}
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </Container>
  );
};

export { MenuMobile };
