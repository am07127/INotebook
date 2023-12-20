import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
    const { video } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "80px",
      }}
    >
      <iframe
        width="640"
        height="315"
        src= {video}
        frameBorder="2"
        allowFullScreen
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoPage;
