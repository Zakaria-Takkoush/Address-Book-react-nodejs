const { Router } = require("express");
const {
  addContact,
  removeContact,
  getUserContacts,
  updateContact,
} = require("./Controllers/ContactsController");
const { getUsers, register, login } = require("./Controllers/UserController");

const router = Router();

// User APIs
router.get("/users", getUsers);
router.post("/auth/register", register);
router.post("/auth/login", login);

// Contacts
router.post("/contact", addContact); // pass body params
router.delete("/contact", removeContact); // pass the contact id in the URL (?id=...)
router.put("/contact", updateContact); // update a certain contact, pass the id of contact in the url (?id=...), pass other params in the body
router.get("/contacts", getUserContacts); // get all contacts of a certian user, pass the user_id in the url (?user_id=...)

module.exports = router;
