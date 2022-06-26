import React from 'react'
import ContactList from "../components/Contacts/ContactList"
import AddContact from '../components/Contacts/AddContact'
import Filter from "../components/Contacts/Filter"
import FilterbyPhone from '../components/Contacts/FilterbyPhone'
import { useState } from 'react'
import { useEffect } from 'react'

const Contacts = () => {

  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  useEffect(() => {
    setFilteredContacts(contacts)
  }, [contacts])

  return (
    <div>
      <AddContact setContacts={setContacts} contacts={contacts}/>
      <Filter setContacts={setContacts} contacts={contacts} setFilteredContacts={setFilteredContacts}/>
      <FilterbyPhone setContacts={setContacts} contacts={contacts}/>
      <ContactList setContacts={setContacts} contacts={contacts} filteredContacts={filteredContacts} />
    </div>
  )
}

export default Contacts