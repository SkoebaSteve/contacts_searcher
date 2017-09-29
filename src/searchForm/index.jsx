/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import { func } from 'prop-types'
import SearchFilter from './filter'

const SearchForm = ({onChange, onFilter, filter}) => {
  return (
    <form className="searchForm">
      <input
        type="search"
        onChange={event => onChange(event.target.value)}
        className="searchInput"
        placeholder={`search by ${filter}`}
      />
      <div className="searchFilters">
        {/* <h2 className="filtersHeading">Filter by</h2> */}
        <div className="filtersWrapper">
          <SearchFilter
            id="firstName"
            name="filter"
            text ="first name"
            onFilter={onFilter}
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