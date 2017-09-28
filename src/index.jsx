import React from 'react'
import { render } from 'react-dom'

const userArray = [
  {firstName: "steef", lastName: "Janssen", phoneNumber: "012345678"}
]

const SearchForm = ({onChange}) => {
  return (
    <form>
      <input
        type="search"
        onChange={event => onChange(event.target.value)}
      />
    </form>
  )
}

const User = ({firstName, lastName, phoneNumber}) => {
  return <li>{firstName} {lastName} - {phoneNumber}</li>
}

const SearchResults = ({users}) => {
  return (
    <ul>
      {
        users.map(function(user) {
          return (
            <User
              key={user.phoneNumber}
              firstName={user.firstName}
              lastName={user.lastName}
              phoneNumber={user.phoneNumber}
            />
          )
        })
      }
    </ul>
  )
}

class ContactSearch extends React.Component {

  state = {
    users: userArray
  }

  onChange = (value) => {
    const updatedUsers = userArray.filter(function(user) {
      if (user.firstName.indexOf(value) !== -1) {
        return user
      }
      return null
    })

    this.setState({
      users:updatedUsers
    })
  }
  
  render () {
    return (
      <div>
        <SearchForm onChange={this.onChange} />
        <SearchResults users={this.state.users} />
      </div>
    )
  }
}

render(<ContactSearch />, document.getElementById('app'))
