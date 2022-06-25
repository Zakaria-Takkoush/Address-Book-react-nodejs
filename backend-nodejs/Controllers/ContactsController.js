const Contact = require("../Models/Contact");

//Add contact

async function addContact(req, res) {
  try {
    console.log(req.body);

    const { name, phone_number, email, relationship_status, location, user } =
      req.body;

    const contact = new Contact({
      name,
      phone_number,
      email,
      relationship_status,
      location,
      user,
    });

    const newContact = await contact.save();

    console.log("New Contact Added =>", newContact);

    return res.status(200).send(newContact); // 200 Success
  } catch (error) {
    console.log(error.message);
    res.send({ ERROR: error.message });
  }
}

// Remove Contact
async function removeContact(req, res) {
  try {
    console.log(req.query);

    // Find contact using querry
    const contact = await Contact.findOne({ _id: req.query.id });

    // if (!_id) {
    //   res.send("Contact Not FOund");
    // }

    // Remove Contact
    const deletedContact = await contact.remove();

    return res.send({ "Contact removed": deletedContact });
  } catch (error) {
    console.log(error.message);
    res.send({ ERROR: error.message });
  }
}

// Get all contacts of a specific user (pass user id as a query param)
async function getUserContacts(req, res) {
  try {
    const contacts = await Contact.find({ user: req.query.user_id });
    res.send({ Found: contacts.length, Contacts: contacts });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
}

// Edit a contact (pass its id)
async function updateContact(req, res) {
  try {
    const { name, phone_number, email, relationship_status, location, user } =
      req.body;

    const contact = await Contact.findByIdAndUpdate(req.query.id, {
      name,
      phone_number,
      email,
      relationship_status,
      location,
      user,
    });

    const updatedContact = await contact.save();

    console.log("Contact Updated =>", updatedContact);
    return res.send({ "Contact Updated => ": updatedContact });

    // Another way (trial)
    //     const contact_to_update = await Contact.findById(req.query.id);
    //     const { name, phone_number, email, relationship_status, location, user } =
    //       req.body;
    //     const updated = await contact_to_update.update({
    //       name,
    //       phone_number,
    //       email,
    //       relationship_status,
    //       location,
    //       user,
    //     });
    //     return res.send(updated);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
}

module.exports = {
  addContact,
  removeContact,
  getUserContacts,
  updateContact,
};
