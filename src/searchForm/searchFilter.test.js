/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchFilter from './filter'

it('should render a filter item', () => {
  const filter = toJson(shallow(
    <SearchFilter
      id="firstName"
      name="filter"
      text ="first name"
      onFilter={() => {}}
    />
  ));
  expect(filter).toMatchSnapshot()
})

it('should render a filter item with a checked state', () => {
  const filter = toJson(shallow(
    <SearchFilter
      id="firstName"
      name="filter"
      text ="first name"
      onFilter={() => {}}
      checked
    />
  ));
  expect(filter).toMatchSnapshot()
})
