import React from 'react'
import { useState } from 'react';

const Filter = ({setContacts, contacts}) => {

  const [filter, setFilter] = useState("")
  const [option, setOption] = useState("include")

  function filterByName(e) {
    e.preventDefault();
    console.log(contacts);
    // includes:
    if (option === "include") {
      const filtered = contacts.filter(contact =>
        contact.name.includes(filter)
     )
     // starts with:
     
     console.log(filtered);
     setContacts(filtered)
    }
  }
    
  return (

    <div>
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
      </form>
    </div>
  )
}

export default Filter