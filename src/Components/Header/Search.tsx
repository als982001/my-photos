import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 70%;
  border: none;
  border-radius: 5px;
  padding-left: 30px;

  &:focus {
    border: 1px solid blue;
  }
`;

const Icon = styled.div`
  height: 70%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5px;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Search() {
  return (
    <Container>
      <Icon>
        <FaMagnifyingGlass size={20} />
      </Icon>
      <Input placeholder="검색" />
    </Container>
  );
}
