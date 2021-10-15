const express = require('express')
const router = express.Router()
const Ventas = require('../models/ventas')

router.get('/',  (req, res) =>{
      try{
         res.json({
             name: 'Programacion en Ambiente Cliente - Servidor',
             credits: 5
         })
      } catch(error){
           console.log(`Error: ${error}`)
      }
})

module.exports = router
