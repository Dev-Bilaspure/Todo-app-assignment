const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  },
  tasks: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('user', userSchema);