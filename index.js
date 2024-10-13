var express = require('express')

app = express();

app.get("/", function (req, res) {
    res.send("Home page")
})

app.get("/about", function (req, res) {
    res.send("About page")
})

app.get("/contact", function (req, res) {
    res.send("Contact page")
})

app.get("/three", function (req, res) {
    res.status(201).end("resource created")
})

app.get("/four", function (req, res) {
    let payload = [{
        name: "manoj",
        city: "Galle"
    },
        {
            name: "Dulmi",
            city: "Heenatigala"
        }
    ]

    res.json(payload)
})

app.get("/five", function (req, res) {
    res.download("./uploads/img.png")
})

app.get("/usa", function (req, res) {
    res.redirect("http://localhost:8000/sri_lanka")
})

app.get("/sri_lanka", function (req, res) {
    res.send("Redirected to sri lanka ")
})

app.get("/six",function (req,res){
    // add headers
    res.append("name","Manoj")
    res.append("age","29")

    res.status(200).end("Response with headers")
})

// set cookies data
app.get("/seven",function (req,res){
    res.cookie("name","Manoj")
    res.cookie("age","29")

    res.status(200).end("Response with cookies")
})

// remove cookies data
app.get("/eight",function (req,res){
    res.clearCookie("name")
    res.clearCookie("age")

    res.status(200).end("Cookies cleared")
})

app.listen(8000, function () {
    console.log('Serve run successfully')
})