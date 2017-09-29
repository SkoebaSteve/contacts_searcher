import React from 'react'
import style from './style.css'
import { string, number } from 'prop-types'
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
  phoneNumber: number,
}

Contact.defaultProps = {
  phoneNumber: '',
}

export default Contact