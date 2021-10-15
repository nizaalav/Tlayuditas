const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ventasSchema = new Schema({
  name: 'String',
  date: {type: String, default: ''},
  description: {type: String, default: ''},


})

const Ventas = mongoose.model('Ventas', ventasSchema)
module.exports = Ventas
