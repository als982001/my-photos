import { useState } from "react";
import styled from "styled-components";
import { FaFileUpload } from "react-icons/fa";

import UploadModal from "../Modal/UploadModal";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid black;
  position: fixed;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
`;

export default function UploadImage() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Button
        onClick={() => {
          handleModal();
        }}
      >
        <FaFileUpload size={25} />
      </Button>
      {showModal && <UploadModal handleModal={handleModal} />}
    </>
  );
}
