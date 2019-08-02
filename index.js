const express = require('express');
const port = process.env.PORT || 3001;

const app = express();

app.get("/",(req,res)=>{
    res.send(process.env.NODE_ENV)
})


app.listen(port,()=>{
    console.log('CONNECTED');
})