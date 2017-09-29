/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import { string, func, bool } from 'prop-types'

const SearchFilter = ({id, name, text, onFilter, checked}) => {
  return (
    <div className="filter">
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        onClick={(event, text) => onFilter(event.target.value, event.target.title)}
        title={text}
        className="filterRadio"
        defaultChecked={checked}
      />
      <label htmlFor={id} className="filterLabel">{text}</label>
    </div>
  )
}

SearchFilter.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  text: string.isRequired,
  onFilter: func.isRequired,
  checked: bool,
}

SearchFilter.defaultProps = {
  checked: false,
}

export default SearchFilter