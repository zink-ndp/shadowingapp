import React from 'react'
import ProgressItem from './ProgressItem'

import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MovieIcon from '@mui/icons-material/Movie';

function Progress() {
  return (
    <div className='flex justify-between gap-3'>
        <ProgressItem icon={<AlarmOnIcon/>} title="Time practiced" progress="24.5h" />
        <ProgressItem icon={<EventAvailableIcon/>} title="Day streaks" progress="6 days" />
        <ProgressItem icon={<MovieIcon/>} title="Video watched" progress="8 videos" />
    </div>
  )
}

export default Progress