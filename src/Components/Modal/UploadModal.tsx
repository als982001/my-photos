import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ModalWrapper from "./ModalWrapper";
import useUploadImage from "../../Hooks/useUploadImage";
import { RootState } from "../../Redux/Stores";

const Container = styled.form`
  width: 500px;
  height: 500px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  background-color: white;
  z-index: 6;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img<{ isfull: boolean }>`
  width: auto;
  height: 100%;
  border-radius: 20px;
  object-fit: cover; // 이미지가 컨테이너를 채우면서 종횡비를 유지하도록 설정
`;

const Buttons = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 70px;
  background-color: Dodgerblue;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-size: 17px;
  font-weight: bold;
  color: white;

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

interface IProps {
  handleModal: () => void;
}

export default function UploadModal({ handleModal }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { image, imageUrl, handleUploadImage } = useUploadImage();

  const imageSizeState = useSelector(
    (state: RootState) => state.imageSizeReducer
  );

  return (
    <ModalWrapper handleModal={handleModal}>
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleUploadImage}
      />
      <Container
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <ImgContainer>
          <Img src={imageUrl} isfull={imageSizeState.isFull} />
        </ImgContainer>
        <Buttons>
          <Button onClick={() => {}}>이미지 등록</Button>
          <Button
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            이미지 선택
          </Button>
        </Buttons>
      </Container>
    </ModalWrapper>
  );
}
