var express = require('express')
var bodyParser = require("body-parser")
var multer = require("multer")

app = express();

// below line needs to read json payload in the request
app.use(bodyParser.json())

// below line need to access form data
var multer = multer()
app.use(multer.array())
app.use(express.static('public'))

// below line needs to file upload
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})
var upload = multer({storage: storage}).single('myfile')

// access query parameters of url
// access localhost:9000?firstName=manoj&lastName=madushanka
app.get("/", function (req, res) {

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName)
})

// access header parameters of url
app.get("/", function (req, res) {

    let firstName = req.header('firstName');
    let lastName = req.header('lastName');

    res.end(firstName + " " + lastName)
})

// post method
app.post("/", function (rq, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send("Simple pos response firstName : " + firstName + " lst name :" + lastName)
})

// post method with header properties
app.post("/with-headers", function (req, res) {
    let userName = req.header('userName')

    res.send("Username is : " + userName)
})

// post with json data
// for this we can use body-parser library
app.post("/with-json", function (req, res) {
    let JSONData = req.body;
    let JSONString = JSON.stringify(JSONData)

    res.send("received : " + JSONString)
})

// work with multipart form data
// for this we need to install multer package
// we can access form data in postman formdata tab in the body
app.post("/with-form-daa", function (req, res) {
    let JSONData = req.body;
    res.send(JSON.stringify(JSONData))
})

// file upload example
app.post('file-upload', function (req, res) {
    upload(req, res, function (error) {
        if (error) {
            res.send("File uploading failed")
        } else {
            res.send("File uploaded success")
        }
    })
})

app.listen(9000, function () {
    console.log("Request operations app running")
})