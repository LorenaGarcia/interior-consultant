import styled from "styled-components";

const Container = styled.div``;

const ContainerLeft = styled.div`
  float: left;
`;

const ContainerRight = styled.div`
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

const ContainerRightMobile = styled.div`
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

const TextRight = styled.div`
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

const RowMenu = styled.div`
  padding: 0.5em;
`;

const RowMenuCheck = styled.div`
  padding: 0.5em;
  font-weight: bold;
`;

export {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerRightMobile,
  TextRight,
  RowMenu,
  RowMenuCheck,
};
