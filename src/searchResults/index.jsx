import React from 'react'

const User = ({firstName, lastName, phoneNumber}) => {
  return <li>{firstName} {lastName} - {phoneNumber}</li>
}

const SearchResults = ({contacts}) => {
  return (
    <ul>
      {
        contacts.map(function(user) {
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
      { contacts.length === 0 &&
        <li>no contacts found</li>
      }
    </ul>
  )
}

export default SearchResults
