import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = ({ onEditClick }) => {
  const { videos } = useVideoContext();
  
  // Agrupa los videos por categoría
  const videosByCategory = videos.reduce((acc, video) => {
    if (!acc[video.categoria]) {
      acc[video.categoria] = [];
    }
    acc[video.categoria].push(video);
    return acc;
  }, {});

  return (
    <div style={{ padding: "0 2rem 2rem 3rem", width: "100%" }}>
      {Object.entries(videosByCategory).map(([categoria, videosCategoria]) => (
        <div key={categoria}>
          <CategoryTitle category={categoria}>{categoria}</CategoryTitle>
          <VideoList>
            {videosCategoria.map((video) => (
              <Card
                key={video.id}
                video={video}
                onEditClick={() => onEditClick(video)}
              />
            ))}
          </VideoList>
        </div>
      ))}
    </div>
  );
};

export default CategoryVideos;
