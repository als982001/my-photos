import styled from "styled-components";

const Contaienr = styled.section`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Button = styled.button<{ bgColor: string }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin: 0 3px;
  background-color: ${(props) => props.bgColor};
  border: none;
  outline: none;
`;

export default function CircleButtons() {
  return (
    <Contaienr>
      <Button bgColor={"rgba(234, 61, 61, 1)"} />
      <Button bgColor={"rgba(255, 175, 36, 1)"} />
      <Button bgColor={"rgba(42, 197, 50, 1)"} />
    </Contaienr>
  );
}
