import React from "react";
import styled from "styled-components";
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";

export const Container = styled.div`
  margin: 10px;
  text-align: center;

  @media (max-width: 480px) {
    margin: 0px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0px;
  }
`;

export const Image = styled.img`
  margin-right: 10px;
  width: 100%;
`;

export const ContainerFloat = styled.div`
  margin-top: -70px;
  width: 300px;
  background-color: #181719;
  position: absolute;
  right: 10%;

  @media (min-width: 481px) and (max-width: 768px) {
    right: 12%;
    width: 250px;
  }
`;

export const ContainerImage = styled.div`
  float: left;
  margin-left: 20px;
  margin-top: 10px;
`;

export const ImageUser = styled.img`
  width: 50px;
  border-radius: 50px;
`;

export const ContainerText = styled.div`
  text-align: left;
  margin-left: 80px;
`;

export const Name = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #828282;
  margin-top: -10px;
  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const TextFooter = styled.p`
  margin-top: 30px;
  margin-left: 20px;
  width: 80%;
  text-align: left;
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 23px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

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

export default Views;
