import CurrentSentence from '@/components/video/CurrentSentence'
import Player from '@/components/video/Player'
import PlayerControl from '@/components/video/PlayerControl'
import React from 'react'

async function VideoPage({ params }: {params: Promise<{ videoId: string }>}) {

  const {videoId} = await params;

  return (
    <div className='flex gap-4 px-20 py-10'>
      <div className="flex flex-col flex-1">
        <Player videoId={videoId}/>
        <PlayerControl/>
        <CurrentSentence />
      </div>
      <div className="flex flex-col flex-1">

      </div>
    </div>
  )
}

export default VideoPage