import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Filter = ({setContacts, contacts}) => {

  const [filter, setFilter] = useState("")
  const [option, setOption] = useState("include")

  function filterByName(e) {
    e.preventDefault();
    console.log(contacts);
    let filtered = []
    // includes:
    if (option === "include") {
      filtered = contacts.filter(contact =>
        contact.name.includes(filter)
     )}
     // starts with:
    else if (option === "end") {
      filtered = contacts.filter(contact =>
        contact.name.endsWith(filter)
     )
    }
    // ends with:
    else if (option === "start") {
      filtered = contacts.filter(contact =>
        contact.name.startsWith(filter)
     )
    }
     console.log(filtered);
     setContacts(filtered)
  }

  // CLear filter
  function clearFilter() {
    console.log(contacts)
    setContacts(contacts)
  }

  return (

    <div>
      <h3>Filter By Name</h3>
      <form onSubmit={filterByName}>
        <label>FIlter By Name</label>
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
        <input type="submit" />
        <button onClick={clearFilter}>CLear Filter</button>
      </form>
    </div>
  )
}

export default Filter