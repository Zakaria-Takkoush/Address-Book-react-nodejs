import React from 'react'
import { useState } from 'react';

const Contact = ({contact_data, setContacts, contacts}) => {

  // Edit form status, false by deafult (not visible)
  const [editForm, setEditForm] = useState(false)

  // Edit contact input fields... get the default values 
  const [name, setName] = useState(contact_data.name);
  const [email, setEmail] = useState(contact_data.email);
  const [phone_number, setPhoneNumber] = useState(contact_data.phone_number);
  const [relationship_status, setRelationshipStatus] = useState(contact_data.relationship_status);

  // Delete contact (passing contact id)
  async function deleteContact() {
    const id = contact_data._id
    const res = await fetch(`http://localhost:8080/api/contact/?id=${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      console.log("success")
      // Set contacts after click
      setContacts((contacts) => {
        return contacts.filter((contact) => contact._id !== id)
      })
    }
    else {
      console.log("Error")
    }
  };

  //Edit Contact (passing contact id)

  //onSumbit:
  async function handleSubmit (e) {
    e.preventDefault();
    if (!name || !email || !phone_number || !relationship_status) {
      alert("Please fill all fields!");
      return;
    }
    // Call the edit function
    editContact()
    // Reset fields to empty 
    // setLocation("")
  }

  // Show the edit form under each row on Edit Click
  async function showEditContact() {
    // Show form
    setEditForm(!editForm)
  }

  // Submit edits to database
 async function editContact(){
  const id = contact_data._id   // get the id of the contact
  // save contact new data in an object
  const edited_contact = {
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
  // post changes to databse
  const res = await fetch("http://localhost:8080/api/contact/?id=" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(edited_contact),
  });
  const data = await res.json();
  console.log(data)
  // Set contacts after edit
  // setContacts((contacts) => {
  //   return [...contacts]
  // })
  // setContacts(contacts)
 }

  return (
    <>
      <tr>
      <td>{contact_data.name}</td>
      <td>{contact_data.email}</td>
      <td>{contact_data.phone_number}</td>
      <td>{contact_data.relationship_status}</td>
      <td>location</td>
      <td><button onClick={showEditContact}>Edit</button></td>
      <td><button onClick={deleteContact}>Delete</button></td>
    </tr>

    {/* Edit Contact form */}

    <div className={`edit-contact ${editForm && "edit-contact-show" }`}>
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

        <input type="submit" value={"Submit Changes"} />
      </form>
    </div>
    </>
  )
}

export default Contact