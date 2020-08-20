import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="some video"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage=""
          channel="Sa-Rang"
          image=""
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
