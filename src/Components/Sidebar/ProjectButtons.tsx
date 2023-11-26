import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { useState } from "react";

const Buttons = styled.section`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-rows: repeat(1fr, 2);
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

export default function ProjectButtons() {
  const [isOpen, setIsOpen] = useState({
    myproject: false,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOpenButton = (buttonType: "myproject", open: boolean) => {
    const result = { ...isOpen };

    result[buttonType] = open;

    setIsOpen((prev) => result);
  };

  return (
    <Buttons>
      <Title>프로젝트</Title>
      <Row currentPage={location.pathname === "/myproject"}>
        <OpenButton>
          {isOpen.myproject ? (
            <FaAngleDown
              onClick={() => {
                handleClickOpenButton("myproject", false);
              }}
            />
          ) : (
            <FaAngleRight
              onClick={() => {
                handleClickOpenButton("myproject", true);
              }}
            />
          )}
        </OpenButton>
        <Button onClick={() => navigate("/myproject")}>
          <IoIosAlbums size={buttonSize} />
          <ButtonText>나의 프로젝트</ButtonText>
        </Button>
      </Row>
    </Buttons>
  );
}
