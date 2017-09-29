/* eslint no-unused-vars: 1 */
import React from 'react'
import { render } from 'react-dom'
import SearchForm from './searchForm'
import SearchResults from './searchResults'
import style from './style.css'

class ContactSearch extends React.Component {

  constructor(props) {
  super(props)
    this.state = {
      contacts: [],
      filter: 'firstName',
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

  onFilter = (value) => {
    this.setState({
      filter: value
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
        <SearchForm onChange={this.onChange} onFilter={this.onFilter} />
        <SearchResults contacts={this.state.contacts} />
      </div>
    )
  }
}

render(<ContactSearch />, document.getElementById('app'))
