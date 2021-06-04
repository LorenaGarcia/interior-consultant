import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  text-align: center;

  @media (max-width: 480px) {
    margin: 0px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0px;
  }
`;

const Image = styled.img`
  margin-right: 10px;
  width: 100%;
`;

const ContainerFloat = styled.div`
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

const ContainerImage = styled.div`
  float: left;
  margin-left: 20px;
  margin-top: 10px;
`;

const ImageUser = styled.img`
  width: 50px;
  border-radius: 50px;
`;

const ContainerText = styled.div`
  text-align: left;
  margin-left: 80px;
`;

const Name = styled.p`
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

const Description = styled.p`
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

const TextFooter = styled.p`
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

export {
  Container,
  Image,
  ContainerFloat,
  ContainerImage,
  ImageUser,
  ContainerText,
  Name,
  Description,
  TextFooter,
};
