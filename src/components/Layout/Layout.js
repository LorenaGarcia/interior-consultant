import React from "react";
import { Container, Header, Main, ContainerFooter } from "./Layout.styles";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

const Layout = ({ children, open, setOpen }) => {
  return (
    <Container>
      <Header>
        <Menu open={open} setOpen={setOpen} />
      </Header>
      <Main>{children}</Main>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
};

export { Layout };
