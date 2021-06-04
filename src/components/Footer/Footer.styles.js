import styled from "styled-components";

const Container = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #a9a9a9;
  text-align: center;
`;

const Hr = styled.hr`
  align-content: center;
  width: 80%;
  visibility: hidden;

  @media (max-width: 480px) {
    visibility: visible;
  }
`;

export { Container, Hr };
