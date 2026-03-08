'use client'

import React, { useState } from "react";

import LoopIcon from "@mui/icons-material/Loop";
import SpeedIcon from "@mui/icons-material/Speed";
import MicNoneIcon from "@mui/icons-material/MicNone";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function PlayerControl() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="my-5 border flex border-gray-100 shadow-md p-2 rounded-md">
      <div className="flex w-fitrounded-sm gap-1 p-1">
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-white text-violet-500 hover:bg-violet-100/75 cursor-pointer transion-colors durarion-300 ease-in-out">
          <LoopIcon />
          Loop
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-white text-violet-500 hover:bg-violet-100/75 cursor-pointer transion-colors durarion-300 ease-in-out">
          <SpeedIcon />
          1x
        </button>
      </div>
      <div className="flex flex-1 justify-end">
        <button className="flex items-center justify-center h-12 w-12 text-sm font-semibold rounded-full bg-white text-red-500 hover:bg-red-100/75 cursor-pointer transion-colors durarion-300 ease-in-out">
          <MicNoneIcon />
        </button>
        <button className="flex items-center justify-center h-12 w-12 text-sm font-semibold rounded-full bg-white text-violet-500 hover:bg-violet-100/75 cursor-pointer transion-colors durarion-300 ease-in-out">
          <SkipPreviousIcon />
        </button>
        <button
          onClick={handlePlayPause}
          className="flex items-center justify-center h-12 w-12 text-sm font-semibold rounded-full bg-white text-violet-500 hover:bg-violet-100/75 cursor-pointer transion-colors durarion-300 ease-in-out"
        >
          {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
        </button>
        <button className="flex items-center justify-center h-12 w-12 text-sm font-semibold rounded-full bg-white text-violet-500 hover:bg-violet-100/75 cursor-pointer transion-colors durarion-300 ease-in-out">
          <SkipNextIcon />
        </button>
      </div>
    </div>
  );
}

export default PlayerControl;
