import React from "react";
import {
  Container,
  Image,
  ContainerFloat,
  ContainerImage,
  ImageUser,
  ContainerText,
  Name,
  Description,
  TextFooter,
} from "./Views.styles";
import Image1 from "../../images/photo1.png";
import Image2 from "../../images/photo2.png";

const Views = () => {
  return (
    <Container>
      <Image src={Image1} />
      <ContainerFloat>
        <ContainerImage>
          <ImageUser src={Image2} />
        </ContainerImage>
        <ContainerText>
          <Name>Aliza Webber</Name>
          <Description>Interior designer</Description>
        </ContainerText>
        <TextFooter>Designed in 2020 by Aliza Webber</TextFooter>
      </ContainerFloat>
    </Container>
  );
};

export { Views };
