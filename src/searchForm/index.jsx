import React from 'react'

const SearchFilter = ({id, name, text, onFilter}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        onChange={event => onFilter(event.target.value)}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

const SearchForm = ({onChange, onFilter}) => {
  return (
    <form>
      <input
        type="search"
        onChange={event => onChange(event.target.value)}
      />
      <SearchFilter
        id="firstName"
        name="filter"
        text ="Filter by first name"
        onFilter={onFilter}
      />
      <SearchFilter
        id="lastName"
        name="filter"
        text ="Filter by last name"
        onFilter={onFilter}
      />
      <SearchFilter
        id="phoneNumber"
        name="filter"
        text ="Filter by phone numer"
        onFilter={onFilter}
      />
    </form>
  )
}

export default SearchForm