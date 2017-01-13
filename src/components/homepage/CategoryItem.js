import React, { PropTypes } from 'react'

function CategoryItem({ name, icon }) {
  return (
    <div className="category-item">
      <img src={icon} />
      <h3>{name}</h3>
    </div>
  )
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default CategoryItem
