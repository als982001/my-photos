import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdIosShare } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineRotateLeft } from "react-icons/ai";

import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Icons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Options() {
  return (
    <Container>
      <Icons>
        <Icon>
          <IoMdInformationCircleOutline size={23} />
        </Icon>
        <Icon>
          <MdIosShare size={23} />
        </Icon>
        <Icon>
          <FaRegHeart size={23} />
        </Icon>
        <Icon>
          <AiOutlineRotateLeft size={23} />
        </Icon>
      </Icons>
      <Search />
    </Container>
  );
}
