const express = require('express');
const router = express.Router();
const {contactdata,orderdata} = require('../controller/controller');

//routing
router.get('/',(req,res)=>{
     res.render('index')
})
router.get('/about',(req,res)=>{
     res.render('about')
})

router.get('/contact',(req,res)=>{
     res.render('contact')
})

router.get('/menu',(req,res)=>{
     res.render('menu')
})

router.get('/message',(req,res)=>{
     res.render('message')
})

router.get('/menu',(req,res)=>{
     res.render('menu')
})

router.get('/order',(req,res)=>{
    res.render('order')
})
//submit message
router.post('/message',contactdata)

//order place
router.post('/order',orderdata);

//slip generate 
// router.get('/slip',readorder)

// router.get('/slip',(req,res)=>{
//      res.render('slip')
//  })


module.exports = router