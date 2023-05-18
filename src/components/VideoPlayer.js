import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const VideoPlayer = () => {
  return (
    <PlayerWrapper>
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/uAPUkgeiFVY"
        width="100%"
        height="100%"
        controls="true"
      />
    </PlayerWrapper>
  );
};
export default VideoPlayer;
