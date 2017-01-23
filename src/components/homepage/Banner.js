import React from 'react'
import vid from '../../assets/sample.mp4'

function Banner() {
  return (
    <div id="banner-container">
      <div className="banner-sprite" />
      <video src={vid} controls />
    </div>
  )
}

export default Banner
