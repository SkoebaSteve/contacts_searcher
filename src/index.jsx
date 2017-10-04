/* eslint no-unused-vars: 1 */
/* eslint no-console: 1 */
import React from 'react'
import { render } from 'react-dom'
import 'isomorphic-fetch'
import 'es6-promise'
import SearchForm from './searchForm'
import SearchResults from './searchResults'
import style from './style.css'

export default class ContactSearch extends React.Component {
  
  constructor(props) {
  super(props)
    this.state = {
      contacts: [], // filtered contacts
      filter: 'firstName', // which filter applied
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

  updateContacts = () => {
    const filteredUsers = this.userArray.filter((user) => {
      // only return a user if it matches the value from the input field based on the applied filter (first name, last name, phone number) 
      // convert vale to string, possible for phone number
      if (String(user[this.state.filter]).toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1) {
        return user
      }
      return null
    })
    //  trigger state change with filtered users
    this.setState({
      contacts: filteredUsers
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
        <SearchForm onChange={this.onChange} onFilter={this.onFilter} filter="first name" />
        <SearchResults contacts={this.state.contacts} />
      </div>
    )
  }
}

render(<ContactSearch />, document.getElementById('app'))
