/* eslint no-undef: 0 */
import FilterByUser from './'

const userArray = [
  {firstName: 'Steef', lastName: 'Janssen', phoneNumber: '01234'},
  {firstName: 'Janssen', lastName: 'Steef', phoneNumber: '56789'}
]

test('returns all users', () => {
  expect(FilterByUser('', 'firstName', userArray)).toEqual(userArray)
})

test('returns the correct user with a first name', () => {
  expect(FilterByUser('St', 'firstName', userArray)).toEqual([{firstName: 'Steef', lastName: 'Janssen', phoneNumber: '01234'}])
})

test('returns the correct user with a last name', () => {
  expect(FilterByUser('eef', 'lastName', userArray)).toEqual([{firstName: 'Janssen', lastName: 'Steef', phoneNumber: '56789'}])
})

test('returns the correct user with a phone number', () => {
  expect(FilterByUser('9', 'phoneNumber', userArray)).toEqual([{firstName: 'Janssen', lastName: 'Steef', phoneNumber: '56789'}])
})

test('returns no users with wrong data', () => {
  expect(FilterByUser('Some name that doesnt exist', 'lastName', userArray)).toEqual([])
})

test('is not case sensitive', () => {
  expect(FilterByUser('steef', 'lastName', userArray)).toEqual([{firstName: 'Janssen', lastName: 'Steef', phoneNumber: '56789'}])
})


