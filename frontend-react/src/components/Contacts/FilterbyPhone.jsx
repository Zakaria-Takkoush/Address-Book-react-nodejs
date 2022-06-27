import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const FilterbyPhone = ({setContacts, contacts, setFilteredContacts}) => {

  const [filter, setFilter] = useState("")
  const [option, setOption] = useState("include")

  function filterByPhone(e) {
    e.preventDefault();
    console.log(contacts);
    let filtered = []
    // includes:
    if (option === "include") {
      filtered = contacts.filter(contact =>
        contact.phone_number.includes(filter)
     )}
     // starts with:
    else if (option === "end") {
      filtered = contacts.filter(contact =>
        contact.phone_number.endsWith(filter)
     )
    }
    // ends with:
    else if (option === "start") {
      filtered = contacts.filter(contact =>
        contact.phone_number.startsWith(filter)
     )
    }
     console.log(filtered);
     setFilteredContacts(filtered)
  }

  // CLear filter
  // function clearFilter() {
  //   console.log(contacts)
  //   setContacts(contacts)
  // }

  return (

    <div className='filter'>
      <h3>Filter By Phone Number</h3>
      <form className='filter-form' onSubmit={filterByPhone}>
        <select onChange={(e) => {
              setOption(e.target.value);
              console.log(option);
            }}>
          <option value="include">Includes...</option>
          <option value="start">Starts with...</option>
          <option value="end">Ends with...</option>
        </select>
        <input type="text" value={filter} onChange={(e) => {
            setFilter(e.target.value)
          }} />
        <input type="submit" className='btn' />
        {/* <button onClick={clearFilter}>CLear Filter</button> */}
      </form>
    </div>
  )
}

export default FilterbyPhone