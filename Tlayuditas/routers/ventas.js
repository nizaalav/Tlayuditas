const express = require('express')
const router = express.Router()
const passport = require('passport')
const Ventas = require('../models/ventas')

router.get('/',
passport.authenticate('jwt', {session:false}),
(req, res) =>{
      try{
         res.json({
             name: 'Programacion en Ambiente Cliente - Servidor',
             credits: 5
         })
      }catch(error){
           console.log(`Error: ${error}`)
      }
})

module.exports = router
