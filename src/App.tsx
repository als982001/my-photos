import axios from "axios";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Imported from "./Pages/Imported";
import Memories from "./Pages/Memories";
import People from "./Pages/People";
import Storage from "./Pages/Storage";
import NotFound from "./Pages/NotFound";
import Recent from "./Pages/Recent";
import Location from "./Pages/Location";
import MyAlbum from "./Pages/MyAlbum";
import SharedAlbum from "./Pages/SharedAlbum";
import MediaType from "./Pages/MediaType";
import MyProject from "./Pages/MyProject";

const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

const Contents = styled.section``;

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Contents>
        <Routes>
          <Route path="/imported" element={<Imported />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/people" element={<People />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/myalbum" element={<MyAlbum />} />
          <Route path="/shared" element={<SharedAlbum />} />
          <Route path="/mediatype" element={<MediaType />} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/" element={<Recent />} />
        </Routes>
      </Contents>
    </Wrapper>
  );
}

export default App;
