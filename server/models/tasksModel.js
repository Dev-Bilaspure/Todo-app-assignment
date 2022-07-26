const mongoose= require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  priority: {
    type: Number,
    require: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('task', taskSchema);