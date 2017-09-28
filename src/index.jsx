import React from 'react'
import { render } from 'react-dom'

const userArray = [
  {firstName: "steef", lastName: "Janssen", phoneNumber: "012345678"}
]

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
