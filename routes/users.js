const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/VSCodeCRUd').then(() =>{
  console.log('connected to db')
}).catch(err =>{
  console.log(err)
})

const userSchema = mongoose.Schema({
  username: String,
  age: Number,
  email: String,
})

module.exports = mongoose.model('user', userSchema)

