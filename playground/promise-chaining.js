require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('632175660e88f9742ff4bbfb', {age:100}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 100})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6321757b0e88f9742ff4bbfd', 3).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})