const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({

  category: {type: String, default:  'comida ' },
  email: {required: true, type: String, lowercase: true, trim: true, unique: true},
  location: {type: String, lowercase: true, trim: true, default: 'Coatzacoalcos, Ver.'},
  recommendation:{type: String, lowercase: true, trim: true, default: 'Muy Buenas, Sin Duda Volveria a Comerlas!'},




},{
  timestamps: true
})

const Menu= mongoose.model('Menu', menuSchema)
module.exports = Menu
