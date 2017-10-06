/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import { func } from 'prop-types'
import SearchFilter from './filter'

export default class SearchForm extends React.Component {

  state = {
    filter: this.props.filters[0].text
  }

  onFilter = (filter, filterText) => {
    this.setState({
      filter: filterText
    })
    this.props.onFilter(filter)
  }
  
  render () {
    const filters = this.props.filters
    const filter = this.state.filter
    const onFilter = this.onFilter
    return (
      <form className={style.searchForm}>
        <input
          type="search"
          onChange={event => this.props.onChange(event.target.value)} // callback with the input value to update parent's state
          className={style.searchInput}
          placeholder={`search by ${filter}`}
        />
        <div className={style.searchFilters}>
          <div className={style.filtersWrapper}>
            {
              filters.map(function(filter) {
                const {name, text, checked} = filter
                return (
                  <SearchFilter
                    key={name}
                    id={name}
                    name="filter"
                    text={text}
                    onFilter={onFilter} // callback with the filter title to update parent's state
                    checked={checked}
                  />
                )
              })
            }
          </div>
        </div>
      </form>
    )
  }
}

SearchForm.propTypes = {
  onChange: func.isRequired,
  onFilter: func.isRequired
}
