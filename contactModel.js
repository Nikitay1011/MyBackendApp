const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please add the contact name"],
    },
    email : {
        type: String,
        required:[true, "Please add the Contact email id "],
    },
    phone: {
        type: String,
        required:[true, "Please add the Contact phone no "],
    },
},
{
    timestamps:true,
}
);

module.exports =mongoose.model("Contact" , contactSchema);