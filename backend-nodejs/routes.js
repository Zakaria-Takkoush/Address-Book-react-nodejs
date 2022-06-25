const { Router } = require("express");
const {
  addContact,
  removeContact,
} = require("./Controllers/ContactsController");
const { getUsers, register, login } = require("./Controllers/UserController");

const router = Router();

// User APIs
router.get("/users", getUsers);
router.post("/auth/register", register);
router.post("/auth/login", login);

// Contacts
router.post("/contact", addContact);
router.delete("/contact", removeContact);

module.exports = router;
