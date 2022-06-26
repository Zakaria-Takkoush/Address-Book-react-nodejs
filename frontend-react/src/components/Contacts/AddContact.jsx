import React from 'react'
import { useState } from 'react';

const AddContact = ({setContacts, contacts}) => {

//Add a contact

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [relationship_status, setRelationshipStatus] = useState("");
  const [user, setUser] = useState("");

  async function handleSubmit (e) {
    e.preventDefault();
    if (!name || !email || !phone_number || !relationship_status) {
      alert("Please fill all fields!");
      return;
    }
    // Call the add function
    addContact()
    // Reset fields to empty 
    setName("");
    setEmail("");
    setPhoneNumber("");
    setRelationshipStatus("")
    // setLocation("")
  }

  // Adding a contact function
  async function addContact() {
    const new_contact = {
      name: name,
      email: email,
      phone_number: phone_number,
      relationship_status: relationship_status,
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
    setContacts([...contacts, data]);
    // setContacts((contacts) => {
    //   return [...contacts, data];
    // })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input type="text" value={name} onChange={(e) => {
            setName(e.target.value);
            }}/>

        <label>e-mail</label>
        <input type="email" value={email} onChange={(e) => {
            setEmail(e.target.value);
            }}/>

        <label>Phone Number</label>
        <input type="text" value={phone_number} onChange={(e) => {
            setPhoneNumber(e.target.value);
            }}/>

        <label>Relationship</label>
        <input type="text" value={relationship_status }  onChange={(e) => {
            setRelationshipStatus(e.target.value);
            }}/>

        {/* <label>Location</label>
        <input type="" value={relationship_status} /> */}

        <input type="submit" />
      </form>
    </div>
  )
}

export default AddContact