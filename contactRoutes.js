const express = require("express");
const {getContacts ,createContact , getContact ,updateContact , deleteContact  } = require("../controllers/contactController");
const router = express.Router(); 

// GET ALL CONTACTS & Create 
router.route("/").get(getContacts).post(createContact);


// get conctact , update & delete contact 
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



module.exports = router;

