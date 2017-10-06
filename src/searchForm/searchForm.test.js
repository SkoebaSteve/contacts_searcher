/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import SearchForm from './'
import SearchFilter from './filter'

const filters = [
  {name: 'firstName', text: 'first name', checked: true},
  {name: 'lastName', text: 'last name', checked: false},
  {name: 'phoneNumber', text: 'phone number', checked: false}
]

it('should render a basic search form', () => {
  const wrapper = shallow(<SearchForm onChange={() => {}} onFilter={() => {}} filters={filters} />)
  expect(wrapper.find(SearchFilter)).to.have.length(3)
  expect(wrapper.state('filter')).to.equal('first name')
})

it('should fire the change event', () => {
  const onChange = sinon.spy()
  const wrapper = mount(

    <SearchForm
      onChange={onChange}
      onFilter={() => {}}
      filters={filters}
    />
  )
  wrapper.find('input[type="search"]').simulate('change')
  expect(onChange).to.have.property('callCount', 1)
})

it('should fire the filter event and update the filter', () => {
  const onFilter = sinon.spy()
  const wrapper = mount(

    <SearchForm
      onChange={() => {}}
      onFilter={onFilter}
      filters={filters}
    />
  )
  wrapper.find('input[title="last name"]').simulate('click')
  expect(onFilter).to.have.property('callCount', 1)
  expect(wrapper.state('filter')).to.equal('last name')
})
