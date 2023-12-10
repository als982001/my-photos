import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Sentence = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export default function Title() {
  const location = useLocation();

  const tempTotalPhoto = 500;
  const tempTotalVideo = 100;

  switch (location.pathname) {
    case "/recent":
      return (
        <Sentence>{`${tempTotalPhoto}장의 사진, ${tempTotalVideo}개의 비디오`}</Sentence>
      );
    case "/imported":
      return <Sentence>{`${tempTotalPhoto}장의 사진`}</Sentence>;
    case "/myproject":
      return <Sentence>나의 프로젝트</Sentence>;
    case "/mediatype":
    case "/shared":
    case "/myalbum":
      return <Sentence>앨범</Sentence>;
    default:
      return <Sentence></Sentence>;
  }
}
