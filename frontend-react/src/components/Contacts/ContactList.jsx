import React from 'react'
import { useState, useEffect } from 'react'

const ContactList = () => {

  const [contacts, setContacts] = useState([])

  // Get Contacts
  async function getContacts() {
    const res = await fetch("http://localhost:8080/api/contacts/?user_id=62b5ee1e7e925e598048ff7a");
    const data = await res.json();
    return data;
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

  return (
    <div>{contacts.Found}</div>
  )
}

export default ContactList