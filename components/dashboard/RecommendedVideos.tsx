import React from "react";
import { Video } from "../ui/Video";

function RecommendedVideos() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <Video
          url="https://youtube.com"
          thumbnail="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Video Title"
          channel="Channel Name"
        />
        <Video
          url="https://youtube.com"
          thumbnail="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Video Title"
          channel="Channel Name"
        />
        <Video
          url="https://youtube.com"
          thumbnail="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Video Title"
          channel="Channel Name"
        />
        <Video
          url="https://youtube.com"
          thumbnail="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Video Title"
          channel="Channel Name"
        />
        <Video
          url="https://youtube.com"
          thumbnail="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Video Title"
          channel="Channel Name"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
