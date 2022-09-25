const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Task = require('./models/task')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {

//     // console.log(req.method, req.path)
//     // next()

//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('632f9d7b72c2a653ef1019ba')
    // await task.populate('owner').execPopulate
    // console.log(task.owner)

    const user = await User.findById('632f9ba49b8632b91a54ad46')
    await user.populate('tasks').execPopulate
    console.log(user.tasks)
}

main()