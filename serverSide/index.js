const express = require("express")

const dotenv = require ("dotenv").config();

const app = express();


const pool= require("./db")
 
app.use('/',require("./routes/authRoutes"))

const port = 8000;

 app.use(express.json())

  
app.listen(port,()=>{

    console.log(`server is ruuning on ${port}`);
})