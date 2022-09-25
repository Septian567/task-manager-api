require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('631f07c03f96ea146032b7b8').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6321e1670e7a423bbc4d1eca').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})