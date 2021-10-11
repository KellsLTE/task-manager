const Task = require('./../models/Task')

exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find();

        res.status(200).json({
          status: "success",
          results: tasks.length,
          data: {
            tasks,
          },
        });
    }catch(err){
        res.status(500).json({
          status: "error",
          message: err,
        });
    }
}

exports.createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({
          status: "success",
          data: {
            task,
          },
        });
    }catch(err){
        res.status(500).json({
            status: "error",
            message: err
        })
    }
}

exports.getTask = (req, res) => {
    res.send('Get single task')
}

exports.updateTask = (req, res) => {
    res.send('Delete task')
}

exports.deleteTask = (req, res) => {
    res.send('Delete single task')
}