import React from 'react'
import ContactList from "../components/Contacts/ContactList"
import AddContact from '../components/Contacts/AddContact'
import Filter from "../components/Contacts/Filter"
import FilterbyPhone from '../components/Contacts/FilterbyPhone'
import { useState } from 'react'

const Contacts = () => {

  const [contacts, setContacts] = useState([])

  return (
    <div>
      <AddContact setContacts={setContacts} contacts={contacts}/>
      <Filter setContacts={setContacts} contacts={contacts}/>
      <FilterbyPhone setContacts={setContacts} contacts={contacts}/>
      <ContactList setContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts