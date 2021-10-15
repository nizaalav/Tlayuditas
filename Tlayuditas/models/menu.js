const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({

  name: { type: String, default: 'Niza'},
  lastName: { type: String, default: 'Alavat'},
  phone: { type: String, default: '9712657084'},
  genre: {type: String, enum: ['H', 'M', 'U'], default: 'U'},
  email: {required: true, type: String, lowercase: true, trim: true, unique: true},
  location: {type: String, lowercase: true, trim: true, default: 'Coatzacoalcos, Ver.'},
  recommendation:{type: String, lowercase: true, trim: true, default: 'Muy Buenas, Sin Duda Volveria a Comerlas!'},




},{
  timestamps: true
})

const Menu= mongoose.model('Menu', menuSchema)
module.exports = Menu
