/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import { string, func, bool } from 'prop-types'

const SearchFilter = ({id, name, text, onFilter, checked}) => {
  return (
    <div className={style.filter}>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        // using the onClick event, since the onChange implementation is quite buggy in React >15.6.1 (https://github.com/facebook/react/issues/10168)
        onClick={(event, text) => onFilter(event.target.value, event.target.title)} //callback event that returns it's title on click
        title={text}
        className={style.filterRadio}
        defaultChecked={checked}
      />
      <label htmlFor={id} className={style.filterLabel}>{text}</label>
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