import React from 'react'
import { useState } from 'react';

const Contact = ({contact_data, setContacts}) => {

  const [editForm, setEditForm] = useState(false)

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
  async function editContact() {
    setEditForm(!editForm)
    const id = contact_data._id
  }

  return (
    <>
        <tr>
      <td>{contact_data.name}</td>
      <td>{contact_data.email}</td>
      <td>{contact_data.phone_number}</td>
      <td>{contact_data.relationship_status}</td>
      <td>location</td>
      <td><button onClick={editContact}>Edit</button></td>
      <td><button onClick={deleteContact}>Delete</button></td>
    </tr>
    <div className={`edit-contact ${editForm && "edit-contact-show" }`}>
      fasdfsdf
    </div>
    </>
  )
}

export default Contact