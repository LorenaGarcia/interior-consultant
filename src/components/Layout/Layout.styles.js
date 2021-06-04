import styled from "styled-components";

const Container = styled.header`
  height: 100vh;
  display: grid;
  grid-gap: 2rem;
  margin: 1rem 3rem;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2rem 1rem;
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const Main = styled.div`
  grid-area: main;
`;

const ContainerFooter = styled.footer`
  grid-area: footer;
`;

export { Container, Header, Main, ContainerFooter };
