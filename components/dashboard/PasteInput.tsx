"use client";

import { extractVideoId } from "@/utils/youtubeParse";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// icons
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function PasteInput() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!url) return;
    const videoId = extractVideoId(url);
    if (videoId) {
      router.push(`/video/${videoId}`);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg shadow-violet-100 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <PlayCircleFilledIcon className="text-red-500 h-4 w-4" />
        <span className="font-semibold text-lg">
          Start shadowing a Youtube Video
        </span>
      </div>
      <div className="flex flex-row xs:flex-col gap-3">
        <input
          type="text"
          placeholder=" Paste a YouTube link to start shadowing"
          className="flex-1 bg-gray-100 p-3 rounded-lg focus:ring-2 ring-violet-200 focus:outline-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="bg-violet-500 text-white w-32 rounded-lg flex gap-2 items-center justify-center p-2 hover:bg-violet-400 transition-colors duration-200 cursor-pointer xs:w-full "
          onClick={handleSubmit}
        >
          <AutoAwesomeIcon className="white h-4 w-4" />
          <span>Analyze</span>
        </button>
      </div>
    </div>
  );
}

export default PasteInput;
