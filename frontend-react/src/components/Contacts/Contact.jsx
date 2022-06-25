import React from 'react'

const Contact = ({contact_data}) => {

  // Delete contact (passing contact id)
  async function deleteContact(id) {
    const res = await fetch(`http://localhost:8080/api/contact/?id=${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      console.log("success")
    }
    else {
      console.log("Error")
    }
    //Checking Deletion Status
    // res.status === 200
    //   ? setTasks(contacts.filter((contact) => contact.id !== id))
    //   : alert("Error Deleting");
  };

  return (
    <tr>
      <td>{contact_data.name}</td>
      <td>{contact_data.email}</td>
      <td>{contact_data.phone_number}</td>
      <td>{contact_data.relationship_status}</td>
      <td>location</td>
      <td>Edit</td>
      <td><button onClick={ () => deleteContact(contact_data._id)}>Delete</button></td>
    </tr>
  )
}

export default Contact