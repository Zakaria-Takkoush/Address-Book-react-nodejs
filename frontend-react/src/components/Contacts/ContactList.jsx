import React from 'react'
import { useState, useEffect } from 'react'
import Contact from './Contact'

// pass contact and filtered contacts props
const ContactList = ({setContacts, contacts, filteredContacts, setFilteredContacts}) => {

  // const [contacts, setContacts] = useState([])

  // Get Contacts
  async function getContacts() {
    const res = await fetch("http://localhost:8080/api/contacts/?user_id=62b5eef1842f1c00a4f9dc44");
    const data = await res.json();
    return data.Contacts; // returns an array of contacts
  };

  useEffect(() => {
    const getData = async () => {
      const contactsFromServer = await getContacts();
      setContacts(contactsFromServer);
      console.log(contactsFromServer)
    };
    getData();
  }, []);

//http://localhost:8080/api/contacts/?user_id=62b5ee1e7e925e598048ff7a

function clearFilters() {
  setContacts(contacts)
  setFilteredContacts(contacts)
}

// Retuen a table containing contacts... map through contacts and insert a contact element for each.
  return (
    <div className='contact-list'>
            {<button className='btn' onClick={clearFilters}>Clear Filters</button>}
      {/* <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th>Phone Number</th>
        <th>Relationship Status</th>
        <th>Location</th>
        <th>Edit Contact</th>
        <th>Delete Contact</th>
      </tr> */}
      {/* If the user has contacts, display "Your Contacts", otherwise display "No Contacts" */}
      {(filteredContacts.length > 0) ? <h1>Your Contacts</h1> : <h1>No Contacts</h1> }
        {filteredContacts?.map((contact) => 
        (<Contact key={contact._id} contact_data={contact} setContacts={setContacts} contacts={contacts}/>)
        )}
    </div>
  )
}

export default ContactList