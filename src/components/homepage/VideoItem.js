import React, { PropTypes } from 'react'

function VideoItem({ title, youtubeId }) {
  return (
    <div className="video-item">
      <a href={`https://youtu.be/${youtubeId}`}>
        <img alt={title} src={`https://img.youtube.com/vi/${youtubeId}/default.jpg`} />
      </a>
      <h3>{title}</h3>
    </div>
  )
}

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  youtubeId: PropTypes.string.isRequired,
}

export default VideoItem
