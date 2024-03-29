const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const route = require("./routes/employee.js");

const app = express();
app.use(bodyParser.json())


dotenv.config()

const PORT = process.env.PORT || 5500 
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(() =>{
    console.log("Database connected successfully")
    app.listen(PORT, ()=> {
        console.log(`Port is runing on ${PORT}`);
    } )
}).catch(err => console.log(err))


app.use("/api/employee", route)