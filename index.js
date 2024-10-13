var express = require('express')

app = express();

app.get("/",function (req,res){
    res.send("Home page")
})

app.get("/about",function (req,res){
    res.send("About page")
})

app.get("/contact",function (req,res){
    res.send("Contact page")
})

app.listen(8000, function () {
    console.log('Serve run successfully')
})