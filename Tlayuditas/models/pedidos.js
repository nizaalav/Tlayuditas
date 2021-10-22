const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidosSchema = new Schema({


  phone: { type: String, default: '9712657084'},
  date:{ type: String},
  email: {required: true, type: String, lowercase: true, trim: true, unique: true},
  location: {type: String, lowercase: true, trim: true, default: 'Coatzacoalcos, Ver.'},
  order: {type: String, lowercase: true, trim: true, default: 'Quisiera ordenar'},




},{
  timestamps: true
})

const Pedidos= mongoose.model('Pedidos', pedidosSchema)
module.exports = Pedidos
