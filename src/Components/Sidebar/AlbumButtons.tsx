import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import styled from "styled-components";

import { RootState } from "../../Redux/Stores";
import { handleSelectAlbumType } from "../../Redux/Actions";

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
  const navigate = useNavigate();
  const location = useLocation();

  const albumState = useSelector(
    (state: RootState) => state.albumSidebarReducer
  );

  const dispatch = useDispatch();

  const clickAlbumType = (key: string, value: boolean) => {
    dispatch(handleSelectAlbumType(key, value));
  };

  return (
    <Buttons>
      <Title>앨범</Title>
      <Row currentPage={location.pathname === "/mediatype"}>
        <OpenButton>
          {albumState.mediatype ? (
            <FaAngleDown
              onClick={() => {
                clickAlbumType("mediatype", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                clickAlbumType("mediatype", true);
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
          {albumState.shared ? (
            <FaAngleDown
              onClick={() => {
                clickAlbumType("shared", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                clickAlbumType("shared", true);
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
          {albumState.myalbum ? (
            <FaAngleDown
              onClick={() => {
                clickAlbumType("myalbum", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                clickAlbumType("myalbum", true);
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
