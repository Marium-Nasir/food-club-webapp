const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const hbs = require('hbs');
const router = require('./router/route')
const bodyParser = require("body-parser")
require("./db/connection")

const static_path = path.join(__dirname,"../public");
const view_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views',view_path);
hbs.registerPartials(partial_path);

app.use([router])


app.listen(port,()=>{
    console.log(`${port}`);
})
