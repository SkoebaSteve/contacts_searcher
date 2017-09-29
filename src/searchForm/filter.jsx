import React from 'react'
import style from './style.css'
import { string, func } from 'prop-types'

const SearchFilter = ({id, name, text, onFilter}) => {
  return (
    <div className="filter">
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        onChange={event => onFilter(event.target.value)}
        className="filterRadio"
        placeholder="text"
      />
      <label htmlFor={id} className="filterLabel">{text}</label>
    </div>
  )
}

SearchFilter.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  text: string.isRequired,
  onFilter: func.isRequired
}

export default SearchFilter