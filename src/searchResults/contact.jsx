/* eslint no-unused-vars: 1 */
import React from 'react'
import style from './style.css'
import { string } from 'prop-types'
import contactSVG from './contact.svg'

const Contact = ({firstName, lastName, phoneNumber}) => {
  return (
    <li className="contact">
      <img src={contactSVG} width="24" alt="icon depicting a user"/>
      <strong className="contactName">{firstName} {lastName}</strong>
      <span className="contactNumber">{phoneNumber}</span>
    </li>
  )
}

Contact.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  phoneNumber: function(props, propName, componentName) {
    // check if it's a valid phone number
    if (!/^[a-zA-Z 0-9+-]*$/.test(props[propName])) {
      return new Error(propName + ' in ' + componentName + " is not a valid phone number");
    }
    // assume all ok
    return null;
  }
}

Contact.defaultProps = {
  phoneNumber: '',
}

export default Contact