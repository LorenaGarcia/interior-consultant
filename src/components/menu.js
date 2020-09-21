import React from "react";
import styled from "styled-components";
import MenuMobile from "./menuMobile";

export const Container = styled.div`
  margin-top: 10px;
`;

export const ContainerLeft = styled.div`
  float: left;
`;

export const ContainerRight = styled.div`
  float: right;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 65%;
  }
`;

export const ContainerRightMobile = styled.div`
  float: right;
  flex-flow: row wrap;
  justify-content: flex-end;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  display: none;

  @media (max-width: 480px) {
    display: flex;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 60%;
  }
`;

export const TextRight = styled.div`
  vertical-align: middle;
  height: 20px;
  padding: 8px;
  border: 1px solid #ffffff;
  font-family: Crimson Pro;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const RowMenu = styled.div`
  padding: 0.5em;
`;

export const RowMenuCheck = styled.div`
  padding: 0.5em;
  font-weight: bold;
`;

const Menu = () => {
  return (
    <Container>
      <ContainerLeft>
        <TextRight>This Interior</TextRight>
      </ContainerLeft>
      <ContainerRight>
        <RowMenuCheck>Home</RowMenuCheck>
        <RowMenu>Collection</RowMenu>
        <RowMenu>About</RowMenu>
        <RowMenu>Contact</RowMenu>
      </ContainerRight>

      <ContainerRightMobile>
        <MenuMobile />
      </ContainerRightMobile>
    </Container>
  );
};

export default Menu;
