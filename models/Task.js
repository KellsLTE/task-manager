const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    name: {
        type:String,
        required: [true, 'The name of the task is required'],
        trim:true,
        maxLength:[20, 'The name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Task', taskSchema)