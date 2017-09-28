import React from 'react'
import style from './style.css'

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

const SearchForm = ({onChange, onFilter}) => {
  return (
    <form className="searchForm">
      <input
        type="search"
        onChange={event => onChange(event.target.value)}
        className="searchInput"
      />
      <div className="searchFilters">
        <h2 className="filtersHeading">Filter by</h2>
        <div className="filtersWrapper">
          <SearchFilter
            id="firstName"
            name="filter"
            text ="first name"
            onFilter={onFilter}
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

export default SearchForm