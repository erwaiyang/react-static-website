import React, { PropTypes } from 'react'
import VideoItem from './VideoItem'

function VideoList({ videos }) {
  return (
    <div id="video-list-container">
      {
        videos.map(video => <li key={video.youtubeId}><VideoItem {...video} /></li>)
      }
    </div>
  )
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default VideoList
