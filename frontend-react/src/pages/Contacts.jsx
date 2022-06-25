import React from 'react'
import ContactList from "../components/Contacts/ContactList"
import AddContact from '../components/Contacts/AddContact'
import Filter from "../components/Contacts/Filter"

const Contacts = () => {
  return (
    <div>
      <AddContact />
      <Filter />
      <ContactList />
    </div>
  )
}

export default Contacts