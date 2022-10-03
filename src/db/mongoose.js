const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://TaskApp:Septian12345@cluster0.zfih1sk.mongodb.net/task-manager-api?retryWrites=true"
).then(() => {
    console.log('MongoDB successfully connected. Database URL:', process.env.MONGODB_URL);
}).catch(error => {
    console.log('Error establishing MongoDB connection. Error:', error.message);
});

