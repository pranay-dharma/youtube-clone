import React from 'react'
import './VideoItem.css'


const VideoItem = ({video, onSelectVideo}) => {
  return (
  <>
  <div className='video-type' onClick = {() => {onSelectVideo(video)}}>
    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
   <center>
   <p className = "video-title"> {video.snippet.title}</p>
   </center>
  </div>
  </>
  )
}

export default VideoItem
