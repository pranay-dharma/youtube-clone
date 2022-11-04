

import React from 'react'
import VideoItem from './VideoItem'
import './VideoList.css'

const VideoList = ({videos, onSelectVideo}) => {
    const renderList = videos.map(video =>{
        return(
            <VideoItem  video = {video} onSelectVideo ={onSelectVideo} />
        )
    })
  return (
    <>
    <div className='video-list'>
        {renderList}
        
        </div>
        </>
  )
}

export default VideoList
