import axios from "axios";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Routes } from "react-router-dom";

const Wrapper = styled.section``;

const Contents = styled.section``;

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  return (
    <Wrapper>
      <Header />
      <Contents>
        <Sidebar />
        <Routes></Routes>
      </Contents>
    </Wrapper>
  );
}

export default App;
