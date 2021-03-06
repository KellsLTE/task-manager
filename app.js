const express = require('express')
require('dotenv').config()
const { connectDB } = require('./db/connect')

const app = express()
const tasks = require('./routes/tasks')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

let port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.DB_URL);
        app.listen(port, () => {
          console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error)
    }
}

start()