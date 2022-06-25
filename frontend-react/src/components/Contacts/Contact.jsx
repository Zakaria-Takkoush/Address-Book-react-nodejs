import React from 'react'

const Contact = ({contact_data}) => {
  return (
    <tr>
      <td>{contact_data.name}</td>
      <td>{contact_data.email}</td>
      <td>{contact_data.phone_number}</td>
      <td>{contact_data.relationship_status}</td>
      <td>location</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  )
}

export default Contact