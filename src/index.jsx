import React from 'react'
import { render } from 'react-dom'
import SearchForm from './searchForm'
import SearchResults from './searchResults'

const userArray = [
  {firstName: "steef", lastName: "Janssen", phoneNumber: "012345678"}
]

class ContactSearch extends React.Component {

  state = {
    users: userArray,
    filter: "firstName"
  }

  onFilter = (value) => {
    this.setState({
      filter: value
    })
  }

  onChange = (value) => {
    const filteredUsers = userArray.filter((user) => {
      if (user[this.state.filter].indexOf(value) !== -1) {
        return user
      }
      return null
    })

    this.setState({
      users:filteredUsers
    })
  }
  
  render () {
    return (
      <div>
        <SearchForm onChange={this.onChange} onFilter={this.onFilter} />
        <SearchResults users={this.state.users} />
      </div>
    )
  }
}

render(<ContactSearch />, document.getElementById('app'))
