const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email id')
            }
        }
    },
    phone : {
        type : String,
        required : true,
        min : 11
    },
    message :{
        type : String,
        required : true
    }
})

const orderschema = new mongoose.Schema({
    orname:{
       type : String,
       required : true
    },
    orinp : {
        type : Array,
        required:true
    },
    oraddress : {
        type : String,
        required : true
    },
    ornmbr : {
        type : String,
        required : true,
        min : 11
    }
})

const Usercontact = new mongoose.model("Usercontact",contactSchema);

const OrderCollection = new mongoose.model("OrderCollection",orderschema)
 module.exports = {Usercontact,OrderCollection};