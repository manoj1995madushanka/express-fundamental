// this will execute only specific rute is called

var express = require('express')

app = express()

app.get("/", function (req, res) {
    res.send("This is homepage")
})

// This is route middleware calls when /about route called
app.use('/about', function (req, res, next) {
    console.log("I a from about page middleware validation")
    next()
})

app.get("/about", function (req, res) {
    res.send("This is about page")
})

app.get("/contact", function (req, res) {
    res.send("This is contact page")
})

app.listen('8080', function () {
    console.log("Application middleware running")
})