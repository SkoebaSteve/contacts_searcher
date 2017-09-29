/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import Contact from './contact'
import { array } from 'prop-types'

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

SearchResults.propTypes = {
  contacts: array.isRequired
}

export default SearchResults
