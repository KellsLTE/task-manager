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

exports.getTask = async (req, res) => {
  try{
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });
    if(!task){
      return res.status(404).json({
        status: "error",
        message: `No task with id : ${id}`
      })
    }
    res.status(200).json({
      status: "successful",
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

exports.updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        status: "error",
        message: `No task with id : ${taskID}`,
      });
    }
    res.status(200).json({
      status: "successful",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
}

exports.deleteTask = async (req, res) => {
    try{
      const taskID = req.params.id;
      const task = await Task.findOneAndDelete({ _id: taskID })
      if (!task) {
        return res.status(404).json({
          status: "error",
          message: `No task with id : ${taskID}`,
        });
      }
      res.status(200).json({
        status: "successful",
        data: {
          task
        }
      })
    }catch(err){
      res.status(500).json({
        status: "error",
        message: err,
      });
    }
}