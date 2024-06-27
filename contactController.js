const  asyncHandler = require("express-async-handler");
const Contact = require ("../models/contactModel"); 

// Get ALL CONTACTS 
// public access 
// @ route GET /api/contacts 

const getContacts = asyncHandler (async (req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


// Create New  CONTACTS 
// public access
// @ route POST /api/contacts 

const createContact = asyncHandler (async(req,res) =>{
    console.log(" The request body is :" , req.body);
    const { name , email, phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All Fileds are mandatory!!");
    } 

    const contact = await Contact.create ({
        name,
        phone ,
        email,
    }); 
    res.status(201).json(contact);

});

// Get  CONTACT 
// public access 
// @ route GET /api/contacts /:id

const getContact  = asyncHandler (async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error ("Contact not found");

    }
    res.status(200).json(contact);
});
   
// UPDATE  CONTACTS  
// public access 
// @ route PUT  /api/contacts /:id

const updateContact = asyncHandler ( async(req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error ("Contact not found");
    }

    const contactUpdated = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(contactUpdated);
});

// DELETE  CONTACTS  
// public access
// @ route DELETE  /api/contacts/:id 
const deleteContact = asyncHandler (async(req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error ("Contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
}); 




module.exports = {getContacts ,createContact , getContact ,updateContact ,  deleteContact}; 

