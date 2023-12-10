import styled from "styled-components";
import useCheckWidth from "../Hooks/useCheckWidth";
import Title from "./Header/Title";
import ImageResize from "./Header/ImageResizer";
import Options from "./Header/Options";

const Container = styled.header<{ overHalf: boolean }>`
  position: absolute;
  top: 0;
  left: 235px;
  width: calc(100% - ${(props) => (props.overHalf ? "235px" : "0")});
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) => props.theme.gray};
`;

export default function Header() {
  const { overHalf } = useCheckWidth();

  return (
    <Container overHalf={overHalf}>
      <ImageResize />
      <Title />
      <Options />
    </Container>
  );
}
