import React from 'react'

interface ProgressItemProps {
  icon: React.ReactNode;
  title: string;
  progress: string;
}

function ProgressItem({icon, title, progress} : ProgressItemProps) {
  return (
    <div className='flex flex-1 items-center bg-violet-100/70 border border-violet-300 p-6 rounded-xl gap-6'>
        <div className="flex items-center justify-center p-6 bg-violet-300 w-8 h-8 rounded-2xl text-violet-600">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-gray-500 text-sm font-semibold uppercase">{title}</span>
            <span className="text-lg font-extrabold">{progress}</span>
        </div>
    </div>
  )
}

export default ProgressItem