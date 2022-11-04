import React from 'react'
import './VideoDetails.css'

const VideoDetails = ({video}) => {
 if(!video)
 { 
     return(
        <div>Loading....</div>
     )

   
}
const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
return (
    <>
    <div className='video-container'>
        <iframe src={videoSrc}
        title="video player"
        className='default-video'>

        </iframe>
    </div>
    <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>
    </>
)
}

export default VideoDetails
