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
      contacts: [],
      filter: 'firstName',
      filterText: 'first name',
      value: '',
    }

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

  userArray = []

  updateContacts = () => {
    const filteredUsers = this.userArray.filter((user) => {
      if (String(user[this.state.filter]).indexOf(this.state.value) !== -1) {
        return user
      }
      return null
    })
    this.setState({
      contacts: filteredUsers
    })
  }

  onFilter = (value, text) => {
    this.setState({
      filter: value,
      filterText: text
    }, this.updateContacts)
  }

  onChange = (value) => {
    this.setState({
      value: value
    }, this.updateContacts)
  }
  
  render () {
    return (
      <div>
        <SearchForm onChange={this.onChange} onFilter={this.onFilter} filter={this.state.filterText} />
        <SearchResults contacts={this.state.contacts} />
      </div>
    )
  }
}

render(<ContactSearch />, document.getElementById('app'))
