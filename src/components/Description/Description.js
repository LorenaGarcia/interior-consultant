import React from "react";
import { Container, Title, SubTitle, More } from "./Description.styles";

const Description = () => {
  return (
    <Container>
      <Title>Modern interior</Title>
      <SubTitle>
        A full-Service residential & commercial interior design and staging
        company offering professional organizing & eco-services.
      </SubTitle>
      <More>Read more &#8594;</More>
    </Container>
  );
};

export { Description };
