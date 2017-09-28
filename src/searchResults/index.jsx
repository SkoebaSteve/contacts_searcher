import React from 'react'
import style from './style.css'

const Contact = ({firstName, lastName, phoneNumber}) => {
  return (
    <li className="contact">
      <img src="contact.svg" alt=""/>
      <strong className="contactName">{firstName} {lastName}</strong>
      <span className="contactNumber">{phoneNumber}</span>
    </li>
  )
}

const SearchResults = ({contacts}) => {
  return (
    <ul className="contactsList">
      {
        contacts.map(function(contact) {
          return (
            <Contact
              key={contact.phoneNumber}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phoneNumber={contact.phoneNumber}
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
