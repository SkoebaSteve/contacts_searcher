import React from 'react'
import { render } from 'react-dom'
import SearchForm from './searchForm'
import SearchResults from './searchResults'

class ContactSearch extends React.Component {

  constructor(props) {
  super(props)
    this.state = {
      contacts: [],
      filter: "firstName"
    }

    fetch('http://localhost:3000/contacts')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.userArray = json
        this.updateContacts(this.userArray)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })

  }

  userArray = []

  updateContacts = (contacts) => {
    this.setState({
      contacts: contacts
    })
  }

  onFilter = (value) => {
    this.setState({
      filter: value
    })
  }

  onChange = (value) => {
    const filteredUsers = this.userArray.filter((user) => {
      if (String(user[this.state.filter]).indexOf(value) !== -1) {
        return user
      }
      return null
    })

    this.setState({
      contacts:filteredUsers
    })
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
