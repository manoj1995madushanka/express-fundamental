var express = require('express')

app = express()

app.use(function (req, res, next) {
    console.log("I a from middleware validation")
    next()
})

app.get("/", function (req, res) {
    res.send("This is homepage")
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