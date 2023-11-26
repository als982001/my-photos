import styled from "styled-components";

import useCheckWidth from "../Hooks/useCheckWidth";
import CircleButtons from "./Global/CircleButtons";
import PhotoButtons from "./Sidebar/PhotoButtons";
import AlbumButtons from "./Sidebar/AlbumButtons";
import ProjectButtons from "./Sidebar/ProjectButtons";

const Container = styled.aside<{ overHalf: boolean }>`
  width: 235px;
  height: 100%;
  position: absolute;
  left: 0;
  top: ${(props) => (props.overHalf ? "0" : "50px")};
  background-color: ${(props) => props.theme.gray};
  display: ${(props) => (props.overHalf ? "block" : "none")};
`;

export default function Sidebar() {
  const { overHalf } = useCheckWidth();

  return (
    <Container overHalf={overHalf}>
      <CircleButtons />
      <PhotoButtons />
      <AlbumButtons />
      <ProjectButtons />
    </Container>
  );
}
