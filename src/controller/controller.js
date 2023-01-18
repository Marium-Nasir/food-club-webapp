const {Usercontact,OrderCollection} = require('../models/schema');

const contactdata = async(req,res) => {
    try{
        const ccdata = new Usercontact(req.body);
        await ccdata.save();
        // res.status(201).render("/contact")
        res.send("alert('submitted successfully')")
        
    }catch(err){
        res.send(err);
        console.log(err);
    }
}

const orderdata = async(req,res) => {
    try{
        let odata = new OrderCollection(req.body);
        await odata.save();
        res.send("<h1 style='color: red;'>YOUR ORDER HAS BEEN PLACED SUCCESSFULLY</h1>")
        // res.status(201).render("/slip")
        // res.render("/slip.hbs")
        
    }catch(err){
        res.send(err);
        console.log(err);
    }
}

// const readorder = async(req,res) =>{
//     try{
//         let readdata = oddata;
//         const rreaddata = new OrderCollection.find(req.body);
//         await odata.save();
//         // res.status(201).render("/slip")
//         // res.render("/slip.hbs")
//         res.send("ok")
        
//     }catch(err){
//         res.send(err);
//         console.log(err);
//     }
// }

module.exports = {contactdata,orderdata};