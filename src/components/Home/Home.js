import React from "react";
import { Container, GridMain, GridSidebar } from "./Home.styles";
import { Views } from "../Views";
import { Description } from "../Description";

const Home = () => {
  return (
    <Container>
      <GridMain>
        <Description />
      </GridMain>
      <GridSidebar>
        <Views />
      </GridSidebar>
    </Container>
  );
};

export { Home };
