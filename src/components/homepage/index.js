import React from 'react'
import Categories from './Categories'
import VideoList from './VideoList'
import categoriesData from './../../data/categories'
import videosData from './../../data/videos'

export default function Homepage() {
  return (
    <div id="homepage">
      <Categories categories={categoriesData} />
      <VideoList videos={videosData} />
    </div>
  )
}
