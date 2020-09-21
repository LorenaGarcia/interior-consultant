import React, { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 480px) {
    width: 100%;
  }

  a {
    padding: 15px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #d1d1d1;
    }
  }

  .TextBold {
    font-weight: bold;
  }
`;

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => "#FFFFFF"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a className="TextBold" href="/">
        Home
      </a>
      <a href="/">Collection</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  const ShowMenu = () => {
    setOpen(!open);
    return <Menu open={open} />;
  };

  return (
    <Container>
      <Menu open={open} />
      <StyledBurger open={open} onClick={() => ShowMenu()}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </Container>
  );
};

export default MenuMobile;
