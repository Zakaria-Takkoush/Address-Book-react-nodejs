import React from 'react'
import ContactList from "../components/Contacts/ContactList"
import AddContact from '../components/Contacts/AddContact'
import Filter from "../components/Contacts/Filter"
import FilterbyPhone from '../components/Contacts/FilterbyPhone'
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayMap from '../components/Contacts/DisplayMap'


const Contacts = () => {

  // creat the initial state of contacts and filtered contatcs,
  // filtered contacts was create to implement the filter feature,
  // then set the filtered contacts to contacts when clearing filter.
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  // whenever contacts change, set filtered contacts as contacts
  useEffect(() => {
    setFilteredContacts(contacts)
  }, [contacts])

  // The page components
  return (
    <div>
      {/* <DisplayMap/> */}
      <AddContact setContacts={setContacts} contacts={contacts}/>
      <div className='filter-section'>
        <Filter setContacts={setContacts} contacts={contacts} setFilteredContacts={setFilteredContacts}/>
        <FilterbyPhone setContacts={setContacts} contacts={contacts} setFilteredContacts={setFilteredContacts}/>
      </div>
      <ContactList setContacts={setContacts} contacts={contacts} setFilteredContacts={setFilteredContacts} filteredContacts={filteredContacts} />
    </div>
  )
}

export default Contacts