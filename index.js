require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("HOME PAGE HAI BHAI <br> Backend Service Is Running Successfully........");
})

app.get("/about",(req,res)=>{
    res.send("<h1>ABout us</h1>")
})



app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}....`);
})