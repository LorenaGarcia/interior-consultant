import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;

  @media (min-width: 481px) and (max-width: 768px) {
    /* margin-top: -60px; */
  }
`;

export const Title = styled.p`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 61px;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 46px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 36px;
    line-height: 46px;
  }
`;

export const SubTitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 17px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const More = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 50px;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 17px;
  }
`;

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

export default Description;
