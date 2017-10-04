/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchResults from './'

const contactsArray = [{firstName: 'Steef', lastName: 'Janssen', phoneNumber: '+31612345678'}]

it('should render the search results', () => {
  const searchResults = toJson(shallow(
    <SearchResults contacts={contactsArray} />
  ))
  expect(searchResults).toMatchSnapshot()
})

it('should render the empty search results', () => {
  const searchResults = toJson(shallow(
    <SearchResults contacts={[]} />
  ))
  expect(searchResults).toMatchSnapshot()
})