import React from 'react'

const Filter = ({setContacts, contacts}) => {


  function filterByName(e) {
    e.preventDefault();
    console.log(contacts);
    setContacts()
  }
    
  return (

    <div>
      <form onSubmit={filterByName}>
        <label>FIlter By Name</label>
        <select>
          <option value="include">Includes...</option>
          <option value="start">Starts with...</option>
          <option value="end">Ends with...</option>
        </select>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Filter