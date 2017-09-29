/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import { func } from 'prop-types'
import SearchFilter from './filter'

const SearchForm = ({onChange, onFilter, filter}) => {
  return (
    <form className={style.searchForm}>
      <input
        type="search"
        onChange={event => onChange(event.target.value)} // callback with the input value to update parent's state
        className={style.searchInput}
        placeholder={`search by ${filter}`}
      />
      <div className={style.searchFilters}>
        <div className={style.filtersWrapper}>
          <SearchFilter
            id="firstName"
            name="filter"
            text ="first name"
            onFilter={onFilter} // callback with the filter title to update parent's state
            checked
          />
          <SearchFilter
            id="lastName"
            name="filter"
            text ="last name"
            onFilter={onFilter}
          />
          <SearchFilter
            id="phoneNumber"
            name="filter"
            text ="phone number"
            onFilter={onFilter}
          />
        </div>
      </div>
    </form>
  )
}

SearchForm.propTypes = {
  onChange: func.isRequired,
  onFilter: func.isRequired
}

export default SearchForm