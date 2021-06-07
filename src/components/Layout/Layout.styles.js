import styled from "styled-components";

const Container = styled.header`
  display: grid;
  height: 100vh;
  grid-gap: 2rem;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const Header = styled.header`
  grid-area: header;
  margin: 1rem 3rem;
  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2rem 1rem;
  }
`;

const Main = styled.div`
  grid-area: main;
  margin: 1rem 3rem;
  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2rem 1rem;
  }
`;

const ContainerFooter = styled.footer`
  grid-area: footer;
  margin: 1rem 3rem;
  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2rem 1rem;
  }
`;

export { Container, Header, Main, ContainerFooter };
