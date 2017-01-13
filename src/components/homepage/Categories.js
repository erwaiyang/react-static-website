import React, { PropTypes } from 'react'
import CategoryItem from './CategoryItem'

function Categories({ categories }) {
  return (
    <div id="categories-container">
      <ul>
        {
          categories.map(category =>
            <li key={category.id}><CategoryItem {...category} /></li>)
        }
      </ul>
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Categories
