import styled from "styled-components";

import useCheckWidth from "../Hooks/useCheckWidth";
import CircleButtons from "./Global/CircleButtons";
import PhotoButtons from "./Sidebar/PhotoButtons";

const Container = styled.aside<{ overHalf: boolean }>`
  width: 235px;
  height: 100%;
  position: absolute;
  left: 0;
  top: ${(props) => (props.overHalf ? "0" : "50px")};
  background-color: ${(props) => props.theme.gray};
  display: ${(props) => (props.overHalf ? "block" : "none")};
`;

const Buttons = styled.section<{ rowNum: number }>`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1fr, ${(props) => props.rowNum});
`;

const Title = styled.h3`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.theme.lightGray};
  padding-left: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  padding-left: 30px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.h4`
  margin-left: 10px;
`;

export default function Sidebar() {
  const buttonSize = "20px";
  const { overHalf } = useCheckWidth();

  return (
    <Container overHalf={overHalf}>
      <CircleButtons />
      <PhotoButtons buttonSize={buttonSize} />
      {/* <Buttons></Buttons>
      <Buttons></Buttons> */}
    </Container>
  );
}
