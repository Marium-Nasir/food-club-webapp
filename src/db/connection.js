const mongoose = require('mongoose');
const validator=require('validator')
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/restaurantcontact",{useNewUrlParser:true}).then(()=>{
    console.log("connect successfully")
}).catch((err)=>{
    console.log(err)
})