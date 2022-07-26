const Tasks = require('../models/tasksModel');

const tasksCtrl = {
  addTask: async (req, res) => {
    try {
      const { title, priority, isCompleted } = req.body;
      if(!title) 
          return res.status(400).json({msg: "Please add the title."})

      const newTask = new Tasks({
        title, priority, isCompleted
      })
      await newTask.save();

      res.json({msg: "Task added: Success!"})

    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },

  removeTask: async(req, res) => {
    const { taskId } = req.body;

    try {
      await Tasks.findByIdAndDelete(taskId);
      res.json({msg: "Task deleted: Success!"});
    } catch(err) {
      return res.status(500).json({msg: err.message})
    }
  },


  updateTask: async(req, res) => {
    const { taskId, title, priority, isCompleted } = req.body;

    try {
      await Tasks.findByIdAndUpdate(taskId, {
        title, priority, isCompleted
      })
      res.json({msg: "Task updated: Success!"});
    } catch (error) {
      return res.status(500).json({msg: err.message})
    }
  }
}


module.exports = tasksCtrl;