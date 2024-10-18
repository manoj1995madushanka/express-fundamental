// refer mongoosejs.com
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test').then(
    () => console.log("Database connected")
).catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String
})

const User = mongoose.model('User', userSchema)

async function storeInformation() {
    const user = new User({
        name: 'Manoj',
        age: 29,
        isMarried: false,
        salary: 15000,
        gender: 'Male'
    })

    await user.save()
    console.log(user)
}

storeInformation()
