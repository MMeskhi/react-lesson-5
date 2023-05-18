import React from "react";
import styled from "styled-components";

const DescContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 12px;
  margin-top: 6px;
`;

const DescriptionCont = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 100%;
  padding: 16px 16px 24px 16px;
  border-radius: 8px;
  margin-top: 20px;
`;

const DescriptionViews = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  background-color: ${(props) => (props.isLiked ? "#d3c4c4" : "transparent")};
  color: ${(props) => (props.isLiked ? "black" : "white")};
  border: 1px solid #ffffff99;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: ${(props) => (props.isLiked ? "0.8" : "0.8")};
  }
`;

const VideoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelInfoImg = styled.div`
  background-image: url("https://yt3.ggpht.com/V4FqOieQ9y9dnErXPUZNWl1hyLafxIK7F55n5M8LVhPBmEou8kAbNuMlUZx23DoJHvH1sWG56No=s0");
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const ChannelInfoA = styled.a`
  font-size: 16px;
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const YouTubePlayer = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isDisliked, setIsDisliked] = React.useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislikeClick = () => {
    setIsLiked(false);
    setIsDisliked(!isDisliked);
  };

  return (
    <DescContainer>
      <Title>Kendrick Lamar - The Heart Part 5</Title>
      <VideoInfo>
        <a href={"https://www.youtube.com/channel/UC3lBXcrKFnFAFkfVk5WuKcQ"}>
          <ChannelInfo>
            <ChannelInfoImg></ChannelInfoImg>
            <ChannelInfoA>Kendrick Lamar</ChannelInfoA>
          </ChannelInfo>
        </a>
        <ButtonContainer>
          <Button isLiked={isLiked} onClick={handleLikeClick}>
            Like
          </Button>
          <Button isLiked={isDisliked} onClick={handleDislikeClick}>
            Dislike
          </Button>
        </ButtonContainer>
      </VideoInfo>
      <DescriptionCont>
        <Description>
          <DescriptionViews>43M views 1 year ago</DescriptionViews>
          The Heart Part 5 is available now
        </Description>
      </DescriptionCont>
    </DescContainer>
  );
};

export default YouTubePlayer;
