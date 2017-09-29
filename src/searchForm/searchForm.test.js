/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchForm from './'

it('should render a search form', () => {
  const form = toJson(shallow(
    <SearchForm onChange={() => {}} onFilter={() => {}} />
  ))
  expect(form).toMatchSnapshot()
})

it('should render a search form with filter text', () => {
  const form = toJson(shallow(
    <SearchForm onChange={() => {}} onFilter={() => {}} filter={'test'} />
  ))
  expect(form).toMatchSnapshot()
})
