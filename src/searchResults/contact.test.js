/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'
import Contact from './contact'

it('should render a contact', () => {
  const contact = toJson(shallow(
    <Contact
      key={1}
      firstName="Steef"
      lastName="Janssen"
    />
  ))
  expect(contact).toMatchSnapshot()
})

it('should render a contact with a phone number', () => {
  const contact = toJson(shallow(
    <Contact
      key={1}
      firstName="Steef"
      lastName="Janssen"
      phoneNumber={'+31612345678'}
    />
  ))
  expect(contact).toMatchSnapshot()
})

it('should throw an error with a wrong phone number', () => {
  let stub
  stub = sinon.stub(console, 'error')
  const contact = toJson(shallow(
    <Contact
      key={1}
      firstName="Steef"
      lastName="Janssen"
      phoneNumber={'()'}
    />
  ))
  expect(contact).toMatchSnapshot()
  console.error.restore()
})
