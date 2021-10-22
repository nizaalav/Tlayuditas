const express = require('express')
const router = express.Router()
const menu = require('../models/menu')

router.get('/',  (req, res) =>{
    res.json([
      {
        category: 'Tlayudas',
      },
      {
        especiality:  'Sencilla',
        ingredients: 'con frijolitos,col,quesillo',
        price: 55
      },
      {
        especiality: 'Combinada',
        ingredients: 'con frijolitos,col,quesillo y carne asada',
        price:  65
      },
      {
        especiality: 'Especial',
        ingredients: 'con frijolitos,col,quesillo,carne asada y pastor',
        price: 75
    }
  ])
})

module.exports = router

