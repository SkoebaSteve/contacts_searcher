const FilterByUser = (value, filter, userList) => {
  return userList.filter((user) => {
    // only return a user if it matches the value from the input field based on the applied filter (first name, last name, phone number) 
    // convert vale to string, possible for phone number
    if (String(user[filter]).toLowerCase().indexOf(value.toLowerCase()) !== -1) {
      return user
    }
    return null
  })
}

export default FilterByUser