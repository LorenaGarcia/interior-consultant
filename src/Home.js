import React from "react";
import styled from "styled-components";
import Footer from "./components/footer";
import Views from "./components/views";
import Description from "./components/description";
import Menu from "./components/menu";

export const Container = styled.header`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  grid-template-columns: 46% 2% 46%;
  grid-gap: 10px;
  grid-template-areas:
    "header header header header"
    "main . sidebar sidebar"
    "footer footer footer footer";

  @media (max-width: 480px) {
    grid-template-columns: 100%;
    grid-gap: 0px;
    margin: 12px;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: 100%;
    grid-gap: 0px;
    margin: 12px;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
`;

export const GridHeader = styled.header`
  grid-area: header;
  margin-top: 30px;
  margin-right: 70px;
  margin-left: 70px;

  @media (max-width: 480px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const GridMain = styled.div`
  grid-area: main;
  margin-left: 70px;

  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;

export const GridSidebar = styled.div`
  grid-area: sidebar;
  margin-right: 70px;

  @media (max-width: 480px) {
    margin-right: 0px;
  }
`;

export const GridFooter = styled.footer`
  grid-area: footer;
`;

const Home = () => {
  return (
    <Container>
      <GridHeader>
        <Menu />
      </GridHeader>
      <GridMain>
        <Description />
      </GridMain>
      <GridSidebar>
        <Views />
      </GridSidebar>
      <GridFooter>
        <Footer />
      </GridFooter>
    </Container>
  );
};

export default Home;
