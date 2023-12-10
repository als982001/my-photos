import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

interface IProps {
  children: ReactNode;
  handleModal: () => void;
}

export default function ModalWrapper({ children, handleModal }: IProps) {
  return (
    <Wrapper
      onClick={() => {
        handleModal();
      }}
    >
      {children}
    </Wrapper>
  );
}
