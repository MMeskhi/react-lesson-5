import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoDescription from "./components/VideoDescription";
import styled from "styled-components";
import "./App.css";

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2% auto;
`;

function App() {
  return (
    <div>
      <PlayerContainer>
        <VideoPlayer />
        <VideoDescription />
      </PlayerContainer>
    </div>
  );
}

export default App;
