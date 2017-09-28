import React from 'react'

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

export default SearchResults
