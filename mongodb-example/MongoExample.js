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

// retrieve all users
async function fetchInformation() {
    const users = await User.find({});
    console.log(users)
}

// fetch users who not married yet
async function fetchUnMarriedUsers() {
    const users = await User.find({isMarried: false});
    console.log(users)
}

async function fetchUnMarriedUsersAndSalary() {
    const users = await User.find({isMarried: false, salary: 80000});
    console.log(users)
}

// fetch nly specific fields without fetching whole object
async function fetchUnMarriedUserNames() {
    const users = await User.find({isMarried: false})
        .select('name salary');
    console.log(users)
}

async function fetchUnMarriedUserNamesExclude() {
    const users = await User.find({isMarried: false})
        .select('-name -salary'); // - means exclude
    console.log(users)
}

// ascending and descending orders
async function fetchUnMarriedUserNamesAscendingSalary() {
    const users = await User.find({isMarried: false})
        .select('name salary')
        .sort('salary');
    console.log(users)
}

async function fetchUnMarriedUserNamesDescendingSalary() {
    const users = await User.find({isMarried: false})
        .select('name salary')
        .sort('-salary');
    console.log(users)
}

// Limit results
async function fetchUnMarriedUserNamesDescendingSalaryLimit() {
    const users = await User.find({isMarried: false})
        .select('name salary')
        .sort('-salary')
        .limit(2);
    console.log(users)
}

// count results
async function fetchUnMarriedUserNamesCount() {
    const users = await User.find({isMarried: false})
        .countDocuments();
    console.log(users)
}

// Comparison operators
// eq, ne, gt, gte, lt, lte, in, nin
async function fetchUsersAgeGreaterThan30() {
    const users = await User.find({age: {$gt: 30}});
    console.log(users)
}

// and or conditions
async function fetchUsersOrQuery() {
    const users = await User.find()
        .or([{isMarried: true}, {age: 30}]);
    console.log(users)
}

async function fetchUsersAndQuery() {
    const users = await User.find()
        .and([{isMarried: true}, {age: 30}]);
    console.log(users)
}

async function fetchUsersSalaryIn() {
    const users = await User.find({salary: {$in: [5000, 10000, 15000]}});
    console.log(users)
}

// storeInformation()
fetchUnMarriedUserNames()