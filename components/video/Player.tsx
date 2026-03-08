"use client";

import React from "react";

type Props = {
  videoId: string;
};

function Player({ videoId }: Props) {
  console.log(videoId);
  
  return (
    <div className="w-full aspect-video">
      <iframe
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube player"
        className="w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default Player;
