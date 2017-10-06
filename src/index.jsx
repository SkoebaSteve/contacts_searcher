/* eslint no-unused-vars: 1 */
/* eslint no-console: 1 */
import React from 'react'
import { render } from 'react-dom'
import 'isomorphic-fetch'
import 'es6-promise'
import SearchForm from './searchForm'
import SearchResults from './searchResults'
import { FilterByUser, FilterForState } from './helpers'
import style from './style.css'

export default class ContactSearch extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      contacts: [], // filtered contacts
      filter: FilterForState(this.filters, 'name'), // which filter applied
      value: '', // holds the value from the text field
    }

    // use the fetch api(with a polyfill imported above) to get the api results
    fetch('http://localhost:3000/contacts')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.userArray = json
        this.updateContacts()
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })

  }
  // create empty user array to store the initially fetched date
  userArray = []
  filters = [
    {name: 'firstName', text: 'first name', checked: false},
    {name: 'lastName', text: 'last name', checked: false},
    {name: 'phoneNumber', text: 'phone number', checked: true}
  ]

  updateContacts = () => {
    //  trigger state change with filtered users
    this.setState({
      // use the userFilter helper
      contacts: FilterByUser(this.state.value, this.state.filter, this.userArray)
    })
  }

  // fired when a filter is been selected, updates both the filter and the placeholder in the input
  onFilter = (value) => {
    this.setState({
      filter: value
    }, this.updateContacts)
  }

  // fired on a change in the textfield
  onChange = (value) => {
    this.setState({
      value: value
    }, this.updateContacts)
  }
  
  render () {
    return (
      <div>
        <SearchForm onChange={this.onChange} onFilter={this.onFilter} filters={this.filters} />
        <SearchResults contacts={this.state.contacts} />
      </div>
    )
  }
}

render(<ContactSearch />, document.getElementById('app'))
