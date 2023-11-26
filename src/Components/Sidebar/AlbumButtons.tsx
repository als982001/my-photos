import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { useState } from "react";

const Buttons = styled.section`
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-rows: repeat(1fr, 4);
  margin-top: 20px;
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

const Row = styled.section<{ currentPage: boolean }>`
  width: 100%;
  height: 30px;
  background-color: ${(props) =>
    props.currentPage ? props.theme.darkGray : props.theme.gray};
  display: flex;
  align-items: center;
`;

const OpenButton = styled.button`
  padding-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.h4`
  margin-left: 10px;
`;

const buttonSize = "20px";

export default function AlbumButtons() {
  const [isOpen, setIsOpen] = useState({
    mediatype: false,
    shared: false,
    myalbum: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOpenButton = (
    buttonType: "mediatype" | "shared" | "myalbum",
    open: boolean
  ) => {
    const result = { ...isOpen };

    result[buttonType] = open;

    setIsOpen((prev) => result);
  };

  return (
    <Buttons>
      <Title>앨범</Title>
      <Row currentPage={location.pathname === "/mediatype"}>
        <OpenButton>
          {isOpen.mediatype ? (
            <FaAngleDown
              onClick={() => {
                handleClickOpenButton("mediatype", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                handleClickOpenButton("mediatype", true);
              }}
            />
          )}
        </OpenButton>
        <Button onClick={() => navigate("/mediatype")}>
          <IoIosAlbums size={buttonSize} />
          <ButtonText>미디어 유형</ButtonText>
        </Button>
      </Row>
      <Row currentPage={location.pathname === "/shared"}>
        <OpenButton>
          {isOpen.shared ? (
            <FaAngleDown
              onClick={() => {
                handleClickOpenButton("shared", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                handleClickOpenButton("shared", true);
              }}
            />
          )}
        </OpenButton>
        <Button onClick={() => navigate("/shared")}>
          <IoIosAlbums size={buttonSize} />
          <ButtonText>공유 앨범</ButtonText>
        </Button>
      </Row>
      <Row currentPage={location.pathname === "/myalbum"}>
        <OpenButton>
          {isOpen.myalbum ? (
            <FaAngleDown
              onClick={() => {
                handleClickOpenButton("myalbum", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                handleClickOpenButton("myalbum", true);
              }}
            />
          )}
        </OpenButton>
        <Button onClick={() => navigate("/myalbum")}>
          <IoIosAlbums size={buttonSize} />
          <ButtonText>나의 앨범</ButtonText>
        </Button>
      </Row>
    </Buttons>
  );
}
