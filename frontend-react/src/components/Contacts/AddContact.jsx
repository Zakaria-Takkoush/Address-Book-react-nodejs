import React from 'react'
import { useState } from 'react';

const AddContact = ({setContacts}) => {

  //Add a contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [relationship_status, setRelationshipStatus] = useState("");
  const [user, setUser] = useState("");

  async function addContact() {
    new_contact = {
      name: name,
      email: email,
      phone_number: phone_number,
      relationship_status: relationship_status,
      user: "62b5eef1842f1c00a4f9dc44",
      location: {
        type : "Point",
        coordinates : [
          -122.5,
          37.7
        ]}
    }
    const res = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(new_contact),
    });
    const data = await res.json();
    setContacts([...contacts, data]);
  }

  return (
    <div>
      <form onSubmit={addContact}>

      </form>
    </div>
  )
}

export default AddContact