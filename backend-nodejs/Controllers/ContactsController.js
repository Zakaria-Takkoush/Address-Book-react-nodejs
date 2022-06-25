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
  }
}

module.exports = {
  addContact,
};
