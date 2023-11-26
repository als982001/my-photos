import styled from "styled-components";
import { IoMdPhotos } from "react-icons/io";
import { SiCircle } from "react-icons/si";
import { HiUserCircle } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";
import { CiClock1 } from "react-icons/ci";
import { PiDownloadSimple } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Buttons = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1fr, 6);
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

const Button = styled.button<{ currentPage: boolean }>`
  width: 100%;
  height: 30px;
  padding-left: 30px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.currentPage ? props.theme.darkGray : props.theme.gray};

  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.h4`
  margin-left: 10px;
`;

interface IProps {
  buttonSize: string;
}

export default function PhotoButtons({ buttonSize }: IProps) {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Buttons>
      <Title>사진</Title>
      <Button
        currentPage={location.pathname === "/storage"}
        onClick={() => {
          navigate("/storage");
        }}
      >
        <IoMdPhotos size={buttonSize} />
        <ButtonText>보관함</ButtonText>
      </Button>
      <Button
        currentPage={location.pathname === "/memories"}
        onClick={() => {
          navigate("/memories");
        }}
      >
        <SiCircle size={buttonSize} />
        <ButtonText>추억</ButtonText>
      </Button>
      <Button
        currentPage={location.pathname === "/people"}
        onClick={() => {
          navigate("/people");
        }}
      >
        <HiUserCircle size={buttonSize} />
        <ButtonText>사람들</ButtonText>
      </Button>
      <Button
        currentPage={location.pathname === "/location"}
        onClick={() => {
          navigate("/location");
        }}
      >
        <GrMapLocation size={buttonSize} />
        <ButtonText>장소</ButtonText>
      </Button>
      <Button
        currentPage={location.pathname === "/recent"}
        onClick={() => {
          navigate("/recent");
        }}
      >
        <CiClock1 size={buttonSize} />
        <ButtonText>최근 항목</ButtonText>
      </Button>
      <Button
        currentPage={location.pathname === "/imported"}
        onClick={() => {
          navigate("/imported");
        }}
      >
        <PiDownloadSimple size={buttonSize} />
        <ButtonText>가져온 항목</ButtonText>
      </Button>
    </Buttons>
  );
}
