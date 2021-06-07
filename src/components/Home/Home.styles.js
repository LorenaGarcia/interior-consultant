import styled from "styled-components";

const Container = styled.header`
  display: grid;
  height: 100%;
  justify-content: center;
  grid-template-columns: 46% 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  grid-template-areas: "main sidebar";

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 2rem;
    grid-template-areas:
      "main"
      "sidebar";
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 2rem;
    grid-template-areas:
      "main"
      "sidebar";
  }
`;

const GridMain = styled.div`
  grid-area: main;
`;

const GridSidebar = styled.div`
  grid-area: sidebar;
`;

export { Container, GridMain, GridSidebar };
