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
    const new_contact = {
      name: "asdf",
      email: "asdf@asdf.com",
      phone_number: "123456789",
      relationship_status: "married",
      user: "62b5eef1842f1c00a4f9dc44",   //to be changed to user from token
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
    console.log(data)
    // setContacts([...contacts, data]);
  }

  return (
    <div>
      <form onSubmit={addContact}>
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddContact