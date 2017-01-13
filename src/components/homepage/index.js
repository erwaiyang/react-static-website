import React from 'react'
import Categories from './Categories'
import categoriesData from './../../data/categories'

function Homepage() {
  return (
    <div id="homepage">
      <Categories categories={categoriesData}>
    </div>
  )
}
