import React from "react";
import YouTube from "react-youtube";

interface YouTubeOptions {
  height: string;
  width: string;
  playerVars: {
    autoplay: number;
    controls: number;
  };
}

interface ReactClipProps {
  videoId: string;
}
const YoutubeClip: React.FC<ReactClipProps> = ({ videoId }) => {
  const options: YouTubeOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const _onReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      opts={options}
      onReady={_onReady}
      id="video"
      loop
      muted
      autoPlay
    />
  );
};

export default YoutubeClip;
