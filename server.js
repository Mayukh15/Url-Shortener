require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const connectToDB = require('./database/db');
const {urlshort,getOriginalUrl}=require('./Controllers/url');
const app=express();
const port=3100;
app.use(express.urlencoded({extended:true}));
connectToDB();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render("server",{shortUrl:null});
})
//handle the url
app.post('/shorten',urlshort);

//redirect to the original url
app.get('/:shortCode',getOriginalUrl);
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    
});

